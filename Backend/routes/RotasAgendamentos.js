const express = require('express');
const router = express.Router();
const AgendamentosController = require('../controller/ControladorAgendamentos');

// Rota para criar um novo produto
router.post('/agendamentos', AgendamentosController.createAgendamentos);

// Rota para obter todos os agendamentos
router.get('/agendamentos', AgendamentosController.getAllAgendamentos);

// Rota para obter um produto pelo ID
router.get('/agendamentos/:id', AgendamentosController.getAgendamentosById);

// Rota para atualizar um produto
router.put('/agendamentos/:id', AgendamentosController.updateAgendamentos);

// Rota para deletar um produto
router.delete('/agendamentos/:id', AgendamentosController.deleteAgendamentos);

// Rota para registrar entrada de estoque
// router.post('/agendamentos/:id/entrada', AgendamentosController.registrarEntrada);

// Rota para registrar saída de estoque
// router.post('/agendamentos/:id/saida', AgendamentosController.registrarSaida);

module.exports = router;