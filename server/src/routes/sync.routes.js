const express = require('express');
const router = express.Router();
const syncController = require('../controllers/sync.controller');
const authAdmin = require('../middlewares/authAdmin');

// Ambas as rotas são restritas a administradores
router.post('/verificar', authAdmin, syncController.verificar);
router.post('/executar', authAdmin, syncController.executar);

module.exports = router;
