const express = require('express');
const router = express.Router();
const controller = require('../controllers/veiculos.controller');

router.get('/', controller.listarVeiculos);
router.get('/:id', controller.obterVeiculoPorId);

module.exports = router;
