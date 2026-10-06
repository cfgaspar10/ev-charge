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
apiRouter.use('/veiculos', require('./routes/veiculos.routes'));

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
