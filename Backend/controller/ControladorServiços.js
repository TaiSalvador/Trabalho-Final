const Servicos = require('../model/Servicos');
// const EntradaEstoque = require('../models/EntradaEstoque');
// const SaidaEstoque = require('../models/SaidaEstoque');

const ServicosController = {
    createServicos: async (req, res) => {
        try {
            const novoServicos = await Servicos.create(req.body);
            res.json(novoServicos);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getAllServicos: async (req, res) => {
        try {
            const servicos = await Servicos.findAll();
            res.json(servicos);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getServicosById: async (req, res) => {
        try {
            const servicos = await Servicos.findByPk(req.params.id);
            if (!servicos) {
                return res.status(404).send('Servicos não encontrado');
            }
            res.json(servicos);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    updateServicos: async (req, res) => {
        try {
            const servicos = await Servicos.findByPk(req.params.id);
            if (!servicos) {
                return res.status(404).send('Servicos não encontrado');
            }
            await servicos.update(req.body);
            res.send('Servicos atualizado com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    deleteServicos: async (req, res) => {
        try {
            const servicos = await Servicos.findByPk(req.params.id);
            if (!servicos) {
                return res.status(404).send('Servicos não encontrado');
            }
            await servicos.destroy();
            res.send('Servicos deletado com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    // Implementação das funções de controle de estoque
    // registrarEntrada e registrarSaida
    // ... (a ser implementado)
};

module.exports = ServicosController;