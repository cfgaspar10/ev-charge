# 🚀 Guia Definitivo: Migração de Aplicações Google Apps Script (GAS) para VPS com Ambientes HML e PROD

Este guia documenta todo o processo técnico, arquitetural e operacional para migrar sistemas desenvolvidos sobre o ecossistema **Google Apps Script (HTML Service + Google Sheets)** para uma infraestrutura profissional baseada em **VPS (Ubuntu / Oracle Cloud)**, conteinerizada com **Docker**, banco relacional **PostgreSQL**, e esteira de **CI/CD automatizada** com dois ambientes isolados: **Homologação (HML)** e **Produção (PROD)**.

Utilize este documento como modelo de referência (*blueprint*) para migrar novos sistemas legados para a VPS.

---

## 📑 Sumário

1. [Visão Geral e Arquitetura da Solução](#1-visão-geral-e-arquitetura-da-solução)
2. [Etapa 1: Desacoplamento do Frontend (SPA) e Emulador de API](#etapa-1-desacoplamento-do-frontend-spa-e-emulador-de-api)
3. [Etapa 2: Construção do Backend REST e Banco Relacional](#etapa-2-construção-do-backend-rest-e-banco-relacional)
4. [Etapa 3: Containerização com Docker e Docker Compose](#etapa-3-containerização-com-docker-e-docker-compose)
5. [Etapa 4: Preparação e Segurança da VPS Oracle Cloud](#etapa-4-preparação-e-segurança-da-vps-oracle-cloud)
6. [Etapa 5: Configuração dos Ambientes HML e PROD na Mesma VPS](#etapa-5-configuração-dos-ambientes-hml-e-prod-na-mesma-vps)
7. [Etapa 6: Proxy Reverso (Nginx) e Certificados SSL](#etapa-6-proxy-reverso-nginx-e-certificados-ssl)
8. [Etapa 7: Esteira de CI/CD com GitHub Actions e Tailscale](#etapa-7-esteira-de-cicd-com-github-actions-e-tailscale)
9. [Etapa 8: Manutenção, Backups e Comandos Essenciais](#etapa-8-manutenção-backups-e-comandos-essenciais)
10. [Checklist Resumido de Execução](#checklist-resumido-de-execução)

---

## 1. Visão Geral e Arquitetura da Solução

### Por que migrar do Google Apps Script?
* **Eliminação de Cotas:** Fim do limite de 6 minutos por execução, bloqueios de leitura/escrita simultânea no Sheets e limites diários de requisição.
* **Performance Real:** Substituição de chamadas `google.script.run` lentas (que demoram de 1 a 4 segundos por request) por respostas REST em milissegundos (< 50ms).
* **Integridade Relacional:** Troca de abas do Google Sheets por PostgreSQL com chaves primárias, estrangeiras, índices e constraints.
* **Isolamento de Ambientes:** Separação estrita entre dados de teste (HML) e dados reais (PROD).

### Arquitetura de Coexistência na VPS

```mermaid
flowchart TD
    subgraph Internet / Usuários
        DEV[Desenvolvedor / Git Push]
        USER[Usuários Finais / Navegador / PWA]
    end

    subgraph GitHub
        REPO[Repositório GitHub]
        ACTION[GitHub Actions CI/CD]
    end

    subgraph Rede Privada Tailscale
        TS_ACTION[Tailscale GitHub Runner]
        TS_VPS[Tailscale VPS Oracle]
    end

    subgraph VPS Oracle Cloud
        NGINX[Nginx / Proxy Reverso + SSL]

        subgraph Ambiente PROD [main branch]
            APP_PROD[Contêiner: app-prod :3000]
            DB_PROD[(Postgres: db-prod :5432)]
        end

        subgraph Ambiente HML [develop branch]
            APP_HML[Contêiner: app-hml :3001]
            DB_HML[(Postgres: db-hml :5433)]
        end
    end

    DEV -->|Push develop| REPO
    DEV -->|Push main| REPO
    REPO --> ACTION
    ACTION --> TS_ACTION
    TS_ACTION -.->|SSH Seguro via VPN| TS_VPS
    TS_VPS -->|Deploy develop| APP_HML
    TS_VPS -->|Deploy main| APP_PROD

    USER -->|https://app.dominio.com| NGINX
    USER -->|https://hml.dominio.com| NGINX
    NGINX -->|Proxy / ou /app| APP_PROD
    NGINX -->|Proxy /hml ou /app-hml| APP_HML
    APP_PROD --> DB_PROD
    APP_HML --> DB_HML
```

---

## Etapa 1: Desacoplamento do Frontend (SPA) e Emulador de API

No Google Apps Script, o frontend costuma ser composto por arquivos `.html` incorporados via `HtmlService.createHtmlOutputFromFile()`, e toda a comunicação ocorre via `google.script.run.minhaFuncaoDoBackend(args)`.

Para não reescrever o código de tela (tabelas, formulários, validações), adote o **Padrão Adaptador (Adapter Pattern)**.

### 1.1. Extração dos Arquivos
Crie uma pasta `client/` com:
* `index.html`: Arquivo principal da aplicação SPA.
* `login.html`: Tela de login (se houver autenticação desacoplada).
* `css/estilos.css`: Estilos extraídos dos blocos `<style>` do GAS.
* `js/scripts.js`: Lógica de UI extraída dos blocos `<script>` do GAS.
* `js/api.js`: O adaptador de comunicação (substitui o GAS).

### 1.2. Criando o Emulador `google.script.run` (`client/js/api.js`)
Este arquivo injeta um objeto `window.google = { script: { run: ... } }` que intercepta todas as chamadas do frontend original e as direciona via `fetch()` para a API Node.js:

```javascript
/**
 * Emulador do SDK Google Apps Script para frontend desacoplado
 */
(function () {
  'use strict';

  // Detecção dinâmica de subcaminho (/app, /app-hml ou raiz)
  function getContextBasePath() {
    if (window.location.pathname.startsWith('/app-hml')) return '/app-hml';
    if (window.location.pathname.startsWith('/app')) return '/app';
    return '';
  }

  const API_BASE = getContextBasePath() + '/api';

  async function fetchAPI(endpoint, options = {}) {
    const response = await fetch(API_BASE + endpoint, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...(options.headers || {})
      },
      credentials: 'include' // Envia cookies JWT automaticamente
    });

    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      throw new Error(err.erro || err.message || 'Erro HTTP ' + response.status);
    }
    return response.json();
  }

  // Cria o encadeamento fluente com withSuccessHandler e withFailureHandler
  class GASRunner {
    constructor() {
      this._success = () => {};
      this._failure = (err) => console.error(err);
    }

    withSuccessHandler(fn) {
      this._success = fn;
      return this;
    }

    withFailureHandler(fn) {
      this._failure = fn;
      return this;
    }

    // Mapeamento das funções que existiam no Code.gs para rotas REST
    carregarDadosGerais() {
      fetchAPI('/dashboard/dados')
        .then(res => this._success(res))
        .catch(err => this._failure(err));
    }

    salvarRegistro(payload) {
      fetchAPI('/registros', { method: 'POST', body: JSON.stringify(payload) })
        .then(res => this._success(res))
        .catch(err => this._failure(err));
    }

    deletarRegistro(id) {
      fetchAPI(`/registros/${encodeURIComponent(id)}`, { method: 'DELETE' })
        .then(res => this._success(res))
        .catch(err => this._failure(err));
    }
  }

  window.google = {
    script: {
      run: new Proxy({}, {
        get: (target, prop) => {
          return (...args) => {
            const runner = new GASRunner();
            setTimeout(() => {
              if (typeof runner[prop] === 'function') {
                runner[prop](...args);
              } else {
                console.warn(`Método ${prop} não mapeado no api.js`);
              }
            }, 0);
            return runner;
          };
        }
      })
    }
  };
})();
```

### 1.3. Ajuste de Caminhos no PWA / Service Worker
Se a aplicação utilizar PWA, ajuste o Service Worker (`client/sw.js`) para capturar dinamicamente o subdiretório onde está instalado:

```javascript
// sw.js
const basePath = self.location.pathname.replace(/\/sw\.js$/, '');
const CACHE_NAME = 'app-cache-v1';

const STATIC_ASSETS = [
  basePath + '/',
  basePath + '/index.html',
  basePath + '/css/estilos.css',
  basePath + '/js/api.js',
  basePath + '/js/scripts.js'
];
```

---

## Etapa 2: Construção do Backend REST e Banco Relacional

### 2.1. Estrutura do Backend Node.js
Crie uma pasta `server/`:
```text
server/
├── Dockerfile
├── package.json
├── prisma/
│   └── schema.prisma
└── src/
    ├── index.js
    ├── controllers/
    ├── middlewares/
    │   ├── auth.js
    │   └── errorHandler.js
    └── routes/
```

### 2.2. Modelagem com Prisma ORM (`server/prisma/schema.prisma`)
Mapeie as colunas das planilhas Google Sheets para modelos de banco relacional:

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model Usuario {
  id        String   @id @default(uuid())
  email     String   @unique
  nome      String
  senhaHash String?
  perfil    String   @default("usuario")
  ativo     Boolean  @default(true)
  criadoEm  DateTime @default(now())

  registros Registro[]
  @@map("usuarios")
}

model Registro {
  id          String   @id @default(uuid())
  usuarioId   String
  descricao   String
  valor       Decimal  @db.Decimal(12, 2)
  data        DateTime
  categoria   String
  status      String   @default("Pendente")
  criadoEm    DateTime @default(now())

  usuario     Usuario  @relation(fields: [usuarioId], references: [id])
  @@map("registros")
}
```

### 2.3. Servidor Express Principal (`server/src/index.js`)
Configurado para atender tanto requisições de API quanto servir os estáticos do frontend em diferentes prefixos de URL:

```javascript
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet({ contentSecurityPolicy: false }));
app.use(cors({ origin: true, credentials: true }));
app.use(cookieParser());
app.use(express.json());

// Rota de Healthcheck
app.get('/health', (req, res) => res.json({ status: 'ok', time: new Date() }));

// Rotas da API
const apiRouter = express.Router();
apiRouter.use('/registros', require('./routes/registros.routes'));

// Atende API na raiz e em subcaminhos
app.use('/api', apiRouter);
app.use('/app-hml/api', apiRouter);
app.use('/app/api', apiRouter);

// Serve o Frontend SPA estático
const clientPath = path.resolve(__dirname, '../../client');
app.use(express.static(clientPath));
app.use('/app-hml', express.static(clientPath));
app.use('/app', express.static(clientPath));

// Fallback SPA
app.get('*', (req, res) => res.sendFile(path.join(clientPath, 'index.html')));

app.listen(PORT, '0.0.0.0', () => console.log(`Servidor rodando na porta ${PORT}`));
```

---

## Etapa 3: Containerização com Docker e Docker Compose

### 3.1. Dockerfile Otimizado Multi-Stage (`server/Dockerfile`)
Suporta compilação nativa do Prisma Client e reduz o tamanho da imagem final:

```dockerfile
# Estágio de Dependências e Build
FROM node:20-alpine AS builder
WORKDIR /app
COPY server/package*.json ./
COPY server/prisma ./prisma/
RUN npm ci
RUN npx prisma generate

# Estágio de Produção
FROM node:20-alpine AS production
WORKDIR /app
ENV NODE_ENV=production

COPY server/package*.json ./
RUN npm ci --omit=dev

COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder /app/node_modules/@prisma ./node_modules/@prisma
COPY server/src ./src
COPY server/prisma ./prisma
COPY client ../client

EXPOSE 3000
CMD ["sh", "-c", "npx prisma migrate deploy && node src/index.js"]
```

### 3.2. Docker Compose Parametrizado (`docker-compose.yml`)
Permite rodar múltiplas instâncias na mesma máquina apenas alterando o arquivo `.env`:

```yaml
services:
  app-db:
    image: postgres:16-alpine
    container_name: ${DB_CONTAINER_NAME}
    restart: unless-stopped
    environment:
      POSTGRES_USER: ${POSTGRES_USER}
      POSTGRES_PASSWORD: ${POSTGRES_PASSWORD}
      POSTGRES_DB: ${POSTGRES_DB}
    volumes:
      - pgdata:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U ${POSTGRES_USER} -d ${POSTGRES_DB}"]
      interval: 5s
      timeout: 5s
      retries: 5
    networks:
      - app-net

  app-server:
    build:
      context: .
      dockerfile: ./server/Dockerfile
    container_name: ${APP_CONTAINER_NAME}
    restart: unless-stopped
    environment:
      NODE_ENV: ${NODE_ENV}
      PORT: 3000
      APP_SECRET: ${APP_SECRET}
      DATABASE_URL: postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@app-db:5432/${POSTGRES_DB}?schema=public
    ports:
      - "${APP_BIND_IP:-127.0.0.1}:${APP_PORT}:3000"
    depends_on:
      app-db:
        condition: service_healthy
    networks:
      - app-net

networks:
  app-net:
    driver: bridge

volumes:
  pgdata:
```

---

## Etapa 4: Preparação e Segurança da VPS Oracle Cloud

### 4.1. Liberar Portas no Oracle Cloud (Security Lists / Ingress Rules)
No painel web da Oracle Cloud:
1. Navegue até **Networking** > **Virtual Cloud Networks (VCN)** > Sua VCN > **Security Lists**.
2. Adicione **Ingress Rules** para a internet pública:
   * **Porta 80 (HTTP):** CIDR `0.0.0.0/0`, TCP Port `80`.
   * **Porta 443 (HTTPS):** CIDR `0.0.0.0/0`, TCP Port `443`.
   * *Atenção:* **NÃO** libere portas de banco de dados (5432) nem de SSH (22) abertas para a internet pública se estiver usando Tailscale.

### 4.2. Liberar Firewall Nativo do Ubuntu (iptables)
O Ubuntu na Oracle Cloud possui regras rígidas no `iptables` que bloqueiam tráfego de entrada mesmo com as Security Lists liberadas:

```bash
# Permite HTTP e HTTPS no iptables
sudo iptables -I INPUT 6 -m state --state NEW -p tcp --dport 80 -j ACCEPT
sudo iptables -I INPUT 6 -m state --state NEW -p tcp --dport 443 -j ACCEPT

# Salva permanentemente as regras para não perder após reboot
sudo apt install -y netfilter-persistent iptables-persistent
sudo netfilter-persistent save
```

### 4.3. Configurar Swapfile (Prevenção de Quedas por Memória)
Em instâncias Always Free, configurar swap de 4GB a 8GB garante estabilidade no build do Docker e no PostgreSQL:

```bash
sudo fallocate -l 4G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
```

### 4.4. Instalar Docker e Docker Compose Plugin
```bash
sudo apt update && sudo apt install -y ca-certificates curl gnupg
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg

echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

sudo apt update && sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
sudo usermod -aG docker $USER
```

### 4.5. Instalar Tailscale (VPN Segura de Gerenciamento)
Evita expor a porta 22 (SSH) na internet:
```bash
curl -fsSL https://tailscale.com/install.sh | sh
sudo tailscale up
```

---

## Etapa 5: Configuração dos Ambientes HML e PROD na Mesma VPS

Para rodar Homologação e Produção na mesma máquina sem colisão de portas ou dados, organize em diretórios separados dentro de `~/stacks/`:

```text
/home/ubuntu/stacks/
├── meuapp-hml/   (Branch: develop)
└── meuapp-prod/  (Branch: main)
```

### 5.1. Clonando os Repositórios
```bash
mkdir -p ~/stacks
cd ~/stacks

# Clone do ambiente HML
git clone -b develop git@github.com:seu-usuario/seu-repositorio.git meuapp-hml

# Clone do ambiente PROD
git clone -b main git@github.com:seu-usuario/seu-repositorio.git meuapp-prod
```

### 5.2. Arquivo de Variáveis do HML (`meuapp-hml/.env`)
```ini
NODE_ENV=production
APP_BIND_IP=127.0.0.1
APP_PORT=3001
APP_CONTAINER_NAME=meuapp-server-hml
DB_CONTAINER_NAME=meuapp-db-hml

POSTGRES_USER=meuapp_hml_user
POSTGRES_PASSWORD=senha_segura_hml_123
POSTGRES_DB=meuapp_db_hml

APP_SECRET=jwt_secret_exclusivo_para_hml_2026
```

### 5.3. Arquivo de Variáveis do PROD (`meuapp-prod/.env`)
```ini
NODE_ENV=production
APP_BIND_IP=127.0.0.1
APP_PORT=3000
APP_CONTAINER_NAME=meuapp-server-prod
DB_CONTAINER_NAME=meuapp-db-prod

POSTGRES_USER=meuapp_prod_user
POSTGRES_PASSWORD=senha_ultra_secreta_prod_456
POSTGRES_DB=meuapp_db_prod

APP_SECRET=jwt_secret_exclusivo_para_prod_2026
```

### 5.4. Subindo os Ambientes
```bash
# Iniciar Homologação
cd ~/stacks/meuapp-hml
docker compose up -d --build

# Iniciar Produção
cd ~/stacks/meuapp-prod
docker compose up -d --build
```

Verifique se ambos estão ativos:
```bash
docker ps --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"
```

---

## Etapa 6: Proxy Reverso (Nginx) e Certificados SSL

O Nginx instalado diretamente no host recebe o tráfego da internet (portas 80 e 443) e encaminha para os contêineres locais via loopback (`127.0.0.1`).

```bash
sudo apt install -y nginx certbot python3-certbot-nginx
```

### 6.1. Configuração por Subdomínios (Opção Recomendada)
Crie o arquivo `/etc/nginx/sites-available/meuapp`:

```nginx
# Homologação (HML)
server {
    server_name hml.meudominio.com;

    location / {
        proxy_pass http://127.0.0.1:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}

# Produção (PROD)
server {
    server_name app.meudominio.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### 6.2. Ativar Site e Gerar SSL com Certbot
```bash
sudo ln -s /etc/nginx/sites-available/meuapp /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx

# Emite e instala automaticamente os certificados HTTPS Let's Encrypt
sudo certbot --nginx -d app.meudominio.com -d hml.meudominio.com
```

---

## Etapa 7: Esteira de CI/CD com GitHub Actions e Tailscale

Toda alteração mergeada na branch `develop` atualiza automaticamente o ambiente HML; alterações mergeadas na branch `main` atualizam automaticamente o ambiente PROD.

### 7.1. Chave SSH de Deploy na VPS
1. Na VPS, gere um par de chaves sem senha:
   ```bash
   ssh-keygen -t ed25519 -C "vps-deploy-github" -f ~/.ssh/id_ed25519_deploy -N ""
   cat ~/.ssh/id_ed25519_deploy.pub >> ~/.ssh/authorized_keys
   chmod 600 ~/.ssh/authorized_keys
   ```
2. Copie o conteúdo da chave privada (`cat ~/.ssh/id_ed25519_deploy`).

### 7.2. Cadastrar Secrets no GitHub
No repositório GitHub (**Settings** > **Secrets and variables** > **Actions**), cadastre:
* `TAILSCALE_AUTHKEY`: Chave de autenticação gerada no painel do Tailscale (Reutilizável / Ephemeral).
* `SSH_HOST`: IP Tailscale da VPS (ex: `100.x.y.z`).
* `SSH_USER`: Usuário da VPS (ex: `ubuntu`).
* `SSH_PRIVATE_KEY`: O conteúdo da chave privada gerada acima.

### 7.3. Workflow de Deploy (`.github/workflows/deploy.yml`)
```yaml
name: Deploy Contínuo VPS

on:
  push:
    branches:
      - develop
      - main
  workflow_dispatch:

jobs:
  deploy:
    name: Deploy na VPS via Tailscale
    runs-on: ubuntu-latest

    steps:
      - name: Conectar à rede Tailscale
        uses: tailscale/github-action@v3
        with:
          authkey: ${{ secrets.TAILSCALE_AUTHKEY }}

      - name: Configurar Chave SSH
        run: |
          mkdir -p ~/.ssh
          echo "${{ secrets.SSH_PRIVATE_KEY }}" > ~/.ssh/id_rsa
          chmod 600 ~/.ssh/id_rsa
          ssh-keyscan -H ${{ secrets.SSH_HOST }} >> ~/.ssh/known_hosts 2>/dev/null || true

      - name: Executar Deploy na VPS
        run: |
          if [ "${{ github.ref_name }}" = "develop" ]; then
            TARGET_DIR="~/stacks/meuapp-hml"
            TARGET_BRANCH="develop"
            AMBIENTE="Homologação (HML)"
          elif [ "${{ github.ref_name }}" = "main" ]; then
            TARGET_DIR="~/stacks/meuapp-prod"
            TARGET_BRANCH="main"
            AMBIENTE="Produção (PROD)"
          fi

          echo "🚀 Atualizando $AMBIENTE na pasta $TARGET_DIR..."

          ssh -o StrictHostKeyChecking=no -i ~/.ssh/id_rsa ${{ secrets.SSH_USER }}@${{ secrets.SSH_HOST }} << EOF
            set -e
            cd $TARGET_DIR
            git checkout $TARGET_BRANCH
            git pull origin $TARGET_BRANCH
            docker compose up -d --build app-server
            docker ps --filter name=meuapp --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"
          EOF

          echo "✅ Deploy concluído com sucesso!"
```

---

## Etapa 8: Manutenção, Backups e Comandos Essenciais

### 8.1. Script de Backup Diário do PostgreSQL
Crie o arquivo `/home/ubuntu/scripts/backup-db.sh`:

```bash
#!/bin/bash
BACKUP_DIR="/home/ubuntu/backups"
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
mkdir -p $BACKUP_DIR

# Backup do Banco de Produção
docker exec meuapp-db-prod pg_dump -U meuapp_prod_user meuapp_db_prod | gzip > "$BACKUP_DIR/prod_$TIMESTAMP.sql.gz"

# Backup do Banco de Homologação
docker exec meuapp-db-hml pg_dump -U meuapp_hml_user meuapp_db_hml | gzip > "$BACKUP_DIR/hml_$TIMESTAMP.sql.gz"

# Remove backups com mais de 15 dias
find $BACKUP_DIR -type f -name "*.sql.gz" -mtime +15 -delete
echo "[$TIMESTAMP] Backups gerados com sucesso."
```

Torne executável e adicione ao cron (`crontab -e`):
```bash
chmod +x /home/ubuntu/scripts/backup-db.sh
# Roda todo dia às 03:00 da manhã
0 3 * * * /home/ubuntu/scripts/backup-db.sh >> /home/ubuntu/backups/backup.log 2>&1
```

### 8.2. Comandos do Dia a Dia

```bash
# Ver logs em tempo real
docker compose logs -f app-server

# Executar migrations manualmente
docker exec -it meuapp-server-prod npx prisma migrate deploy

# Visualizar banco via Prisma Studio temporário
docker exec -it meuapp-server-prod npx prisma studio --port 5555

# Limpar imagens antigas sem uso (economizar espaço em disco)
docker image prune -af
```

---

## Checklist Resumido de Execução

Ao iniciar a migração de um novo sistema GAS, siga estes passos:

- [ ] **1. Frontend:** Extrair HTML/JS/CSS para `client/` e plugar o `api.js` emulador do `google.script.run`.
- [ ] **2. Banco:** Criar `schema.prisma` mapeando as abas da planilha para tabelas com tipos reais.
- [ ] **3. Backend:** Criar rotas Express em `server/src/` correspondentes às funções do antigo `Code.gs`.
- [ ] **4. Docker:** Configurar `Dockerfile` multi-stage e `docker-compose.yml` parametrizado por variáveis `.env`.
- [ ] **5. VPS:** Clonar repositório em `~/stacks/<app>-hml` (branch `develop`) e `~/stacks/<app>-prod` (branch `main`).
- [ ] **6. Portas:** Atribuir portas locais distintas no `.env` (ex: 3000 para PROD, 3001 para HML).
- [ ] **7. Nginx:** Configurar proxy reverso apontando para as portas e gerar certificados SSL com `certbot`.
- [ ] **8. CI/CD:** Configurar Secrets do GitHub (`SSH_PRIVATE_KEY`, `SSH_HOST`, `TAILSCALE_AUTHKEY`) e validar o deploy automático.
- [ ] **9. Backup:** Incluir os novos bancos no script diário de `pg_dump` no cron.
