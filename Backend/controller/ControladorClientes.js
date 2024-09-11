const Clientes = require('../model/Clientes');
// const EntradaEstoque = require('../models/EntradaEstoque');
// const SaidaEstoque = require('../models/SaidaEstoque');

const ClientesController = {
    createClientes: async (req, res) => {
        try {
            const novoClientes = await Clientes.create(req.body);
            res.json(novoClientes);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getAllClientes: async (req, res) => {
        try {
            const clientes = await Clientes.findAll();
            res.json(clientes);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getClientesById: async (req, res) => {
        try {
            const clientes = await Clientes.findByPk(req.params.id);
            if (!clientes) {
                return res.status(404).send('Clientes não encontrado');
            }
            res.json(clientes);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    updateClientes: async (req, res) => {
        try {
            const clientes = await Clientes.findByPk(req.params.id);
            if (!clientes) {
                return res.status(404).send('Clientes não encontrado');
            }
            await clientes.update(req.body);
            res.send('Clientes atualizado com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    deleteClientes: async (req, res) => {
        try {
            const clientes = await Clientes.findByPk(req.params.id);
            if (!clientes) {
                return res.status(404).send('Clientes não encontrado');
            }
            await clientes.destroy();
            res.send('Clientes deletado com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    // Implementação das funções de controle de estoque
    // registrarEntrada e registrarSaida
    // ... (a ser implementado)
};

module.exports = ClientesController;