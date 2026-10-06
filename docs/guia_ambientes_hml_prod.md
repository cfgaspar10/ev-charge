# 🌐 Guia de Configuração dos Ambientes HML e PROD na VPS

Este guia complementa o planejamento da aplicação **EV Charging Calculator** e especifica as configurações necessárias na VPS (Oracle Cloud / Ubuntu) para suportar a coexistência isolada dos ambientes de **Homologação (HML)** e **Produção (PROD)**.

---

## 1. 📂 Estrutura de Diretórios na VPS

Na máquina VPS, crie o diretório base `~/stacks/` e clone os ambientes a partir do repositório oficial:

```bash
mkdir -p ~/stacks
cd ~/stacks

# Ambiente de Homologação (branch develop)
git clone -b develop git@github.com:cfgaspar10/ev-charge.git ev-calc-hml

# Ambiente de Produção (branch main)
git clone -b main git@github.com:cfgaspar10/ev-charge.git ev-calc-prod
```

---

## 2. 🔐 Arquivos de Variáveis de Ambiente na VPS

### 2.1. Homologação (`~/stacks/ev-calc-hml/.env`)
```ini
NODE_ENV=production
APP_PORT=3001
APP_BIND_IP=127.0.0.1
APP_CONTAINER_NAME=ev-calc-app-hml
DB_CONTAINER_NAME=ev-calc-db-hml

POSTGRES_USER=ev_hml_user
POSTGRES_PASSWORD=senha_segura_hml_9876
POSTGRES_DB=ev_calculator_hml
POSTGRES_PORT=5432

APP_SECRET=chave_secreta_exclusiva_hml_2026
```

### 2.2. Produção (`~/stacks/ev-calc-prod/.env`)
```ini
NODE_ENV=production
APP_PORT=3000
APP_BIND_IP=127.0.0.1
APP_CONTAINER_NAME=ev-calc-app-prod
DB_CONTAINER_NAME=ev-calc-db-prod

POSTGRES_USER=ev_prod_user
POSTGRES_PASSWORD=senha_ultra_segura_prod_5432
POSTGRES_DB=ev_calculator_prod
POSTGRES_PORT=5432

APP_SECRET=chave_secreta_exclusiva_prod_2026
```

---

## 3. 🌐 Configuração do Nginx (Proxy Reverso)

Crie o arquivo `/etc/nginx/sites-available/ev-charge`:

```nginx
# Homologação (HML)
server {
    server_name hml.seudominio.com;

    location / {
        proxy_pass http://127.0.0.1:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}

# Produção (PROD)
server {
    server_name app.seudominio.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Ativação e SSL:
```bash
sudo ln -s /etc/nginx/sites-available/ev-charge /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
sudo certbot --nginx -d hml.seudominio.com -d app.seudominio.com
```

---

## 4. 🔑 Secrets Necessários no GitHub Actions

No repositório `cfgaspar10/ev-charge` (**Settings** > **Secrets and variables** > **Actions**), cadastre:
- `TAILSCALE_AUTHKEY`: Token de autorização Tailscale para permitir que o GitHub Actions conecte na VPN da VPS.
- `SSH_HOST`: IP privado da VPS na rede Tailscale (ex: `100.x.y.z`).
- `SSH_USER`: Usuário de login da VPS (ex: `ubuntu`).
- `SSH_PRIVATE_KEY`: Conteúdo da chave privada SSH autorizada em `~/.ssh/authorized_keys` da VPS.
