const express = require('express');
const router = express.Router();
const controller = require('../controllers/veiculos.controller');
const authAdmin = require('../middlewares/authAdmin');

// Rotas públicas
router.get('/', controller.listarVeiculos);
router.get('/:id', controller.obterVeiculoPorId);

// Rotas administrativas (requerem senha/chave de admin)
router.post('/admin/verificar', authAdmin, controller.verificarAdmin);
router.post('/', authAdmin, controller.criarVeiculo);
router.put('/:id', authAdmin, controller.atualizarVeiculo);
router.delete('/:id', authAdmin, controller.deletarVeiculo);

module.exports = router;
