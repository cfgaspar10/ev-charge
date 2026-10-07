const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Configuração de segurança e parsers
app.use(helmet({
  contentSecurityPolicy: false // Permite compatibilidade com scripts inline e estilos locais
}));
app.use(cors({ origin: true, credentials: true }));
app.use(cookieParser());
app.use(express.json());

// Rota de Healthcheck
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    app: 'EV Charging Calculator',
    timestamp: new Date().toISOString()
  });
});

// Router de API
const apiRouter = express.Router();

// Índice descritivo das rotas da API
apiRouter.get('/', (req, res) => {
  res.json({
    nome: 'EV Charging Calculator API',
    versao: '1.0.0',
    descricao: 'API REST para simulação e catálogo de veículos elétricos',
    endpoints: [
      {
        metodo: 'GET',
        rota: '/health',
        descricao: 'Verificação de integridade e status do servidor'
      },
      {
        metodo: 'GET',
        rota: '/api/veiculos',
        descricao: 'Retorna a lista completa com todos os 82 veículos cadastrados no PostgreSQL'
      },
      {
        metodo: 'GET',
        rota: '/api/veiculos/:id',
        exemplo: '/api/veiculos/byd_dolphin_mini',
        descricao: 'Retorna as especificações técnicas de um veículo específico por ID'
      },
      {
        metodo: 'POST',
        rota: '/api/veiculos/admin/verificar',
        descricao: '[Admin] Valida a senha/chave de acesso administrativo (Header x-admin-key)'
      },
      {
        metodo: 'POST',
        rota: '/api/veiculos',
        descricao: '[Admin] Cadastra um novo modelo de veículo no banco de dados (Header x-admin-key)'
      },
      {
        metodo: 'PUT',
        rota: '/api/veiculos/:id',
        descricao: '[Admin] Atualiza especificações técnicas de um veículo existente (Header x-admin-key)'
      },
      {
        metodo: 'DELETE',
        rota: '/api/veiculos/:id',
        descricao: '[Admin] Desativa ou remove um veículo do catálogo (Header x-admin-key)'
      },
      {
        metodo: 'POST',
        rota: '/api/solicitacoes',
        descricao: 'Envia uma sugestão de inclusão de novo veículo pelo visitante'
      },
      {
        metodo: 'GET',
        rota: '/api/solicitacoes',
        descricao: '[Admin] Lista as solicitações de inclusão de veículos (Header x-admin-key)'
      },
      {
        metodo: 'GET',
        rota: '/api/solicitacoes/contagem-pendentes',
        descricao: '[Admin] Retorna o número de solicitações pendentes (Header x-admin-key)'
      },
      {
        metodo: 'PUT',
        rota: '/api/solicitacoes/:id',
        descricao: '[Admin] Atualiza o status de uma solicitação (APROVADA/REJEITADA) (Header x-admin-key)'
      },
      {
        metodo: 'DELETE',
        rota: '/api/solicitacoes/:id',
        descricao: '[Admin] Remove uma solicitação da lista (Header x-admin-key)'
      },
      {
        metodo: 'POST',
        rota: '/api/sync/verificar',
        descricao: '[Admin] Varre eletricos.app e retorna novos modelos BEV/PHEV encontrados (Header x-admin-key)'
      },
      {
        metodo: 'POST',
        rota: '/api/sync/executar',
        descricao: '[Admin] Importa modelos selecionados com progresso em tempo real SSE (Header x-admin-key)'
      }
    ]
  });
});

apiRouter.use('/veiculos', require('./routes/veiculos.routes'));
apiRouter.use('/solicitacoes', require('./routes/solicitacoes.routes'));
apiRouter.use('/sync', require('./routes/sync.routes'));

// Atende API na raiz e em subcaminhos suportados pelo proxy reverso
app.use('/api', apiRouter);
app.use('/app-hml/api', apiRouter);
app.use('/app/api', apiRouter);

// Servir frontend SPA estático da pasta client
const clientPath = path.resolve(__dirname, '../../client');
app.use(express.static(clientPath));
app.use('/app-hml', express.static(clientPath));
app.use('/app', express.static(clientPath));

// Fallback para SPA (qualquer rota não encontrada entrega o index.html)
app.get('*', (req, res) => {
  res.sendFile(path.join(clientPath, 'index.html'));
});

// Inicialização do servidor
app.listen(PORT, '0.0.0.0', () => {
  console.log(`⚡ EV Charging Calculator Server rodando na porta ${PORT}`);
  console.log(`📁 Servindo frontend estático de: ${clientPath}`);
});
