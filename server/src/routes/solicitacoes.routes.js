const express = require('express');
const router = express.Router();
const solicitacoesController = require('../controllers/solicitacoes.controller');
const authAdmin = require('../middlewares/authAdmin');

// Rota pública para qualquer usuário sugerir/solicitar a inclusão de um veículo
router.post('/', solicitacoesController.criarSolicitacao);

// Rotas administrativas (requer chave/senha admin)
router.get('/', authAdmin, solicitacoesController.listarSolicitacoes);
router.get('/contagem-pendentes', authAdmin, solicitacoesController.contarPendentes);
router.put('/:id', authAdmin, solicitacoesController.atualizarStatusSolicitacao);
router.delete('/:id', authAdmin, solicitacoesController.excluirSolicitacao);

module.exports = router;
