const express = require('express');
const router = express.Router();
const clienteController = require('../controller/ControladorClientes')

// Rota para criar um novo cliente
router.post('/clientes', clienteController.createClientes);

// Rota para obter todos os clientes
router.get('/clientes', clienteController.getAllClientes);

// Rota para obter um cliente pelo ID
router.get('/clientes/:id', clienteController.getClientesById);

// Rota para atualizar um cliente
router.put('/clientes/:id', clienteController.updateClientes);

// Rota para deletar um cliente
router.delete('/clientes/:id', clienteController.deleteClientes);

// Rota para registrar entrada de estoque
// router.post('/clientes/:id/entrada', clienteController.registrarEntrada);

// Rota para registrar saída de estoque
// router.post('/clientes/:id/saida', clienteController.registrarSaida);

module.exports = router;