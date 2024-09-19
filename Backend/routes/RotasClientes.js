const express = require('express');
const router = express.Router();
const produtoController = require('../controller/ControladorProdutos');

// Rota para criar um novo produto
router.post('/produtos', produtoController.createProduto);

// Rota para obter todos os produtos
router.get('/produtos', produtoController.getAllProdutos);

// Rota para obter um produto pelo ID
router.get('/produtos/:id', produtoController.getProdutoById);

// Rota para atualizar um produto
router.put('/produtos/:id', produtoController.updateProduto);

// Rota para deletar um produto
router.delete('/produtos/:id', produtoController.deleteProduto);

// Rota para registrar entrada de estoque
// router.post('/produtos/:id/entrada', ProdutoController.registrarEntrada);

// Rota para registrar saída de estoque
// router.post('/produtos/:id/saida', ProdutoController.registrarSaida);

module.exports = router;