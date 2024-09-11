const express = require('express');
const router = express.Router();
const ServicosController = require('../controller/ControladorServicos');

// Rota para criar um novo servicos
router.post('/servicos', ServicosController.createServicos);

// Rota para obter todos os servicos
router.get('/servicos', ServicosController.getAllServicos);

// Rota para obter um servicos pelo ID
router.get('/servicos/:id', ServicosController.getServicosById);

// Rota para atualizar um servicos
router.put('/servicos/:id', ServicosController.updateServicos);

// Rota para deletar um servicos
router.delete('/servicos/:id', ServicosController.deleteServicos);

// Rota para registrar entrada de estoque
// router.post('/servicos/:id/entrada', ServicosController.registrarEntrada);

// Rota para registrar saída de estoque
// router.post('/servicos/:id/saida', ServicosController.registrarSaida);

module.exports = router;