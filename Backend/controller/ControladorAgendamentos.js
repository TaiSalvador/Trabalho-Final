const Agendamentos = require('../model/Agendamento');
// const EntradaEstoque = require('../models/EntradaEstoque');
// const SaidaEstoque = require('../models/SaidaEstoque');

const AgendamentosController = {
    createAgendamentos: async (req, res) => {
        try {
            const novoAgendamentos = await Agendamentos.create(req.body);
            res.json(novoAgendamentos);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getAllAgendamentos: async (req, res) => {
        try {
            const agendamentos = await Agendamentos.findAll();
            res.json(agendamentos);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getAgendamentosById: async (req, res) => {
        try {
            const agendamentos = await Agendamentos.findByPk(req.params.id);
            if (!agendamentos) {
                return res.status(404).send('Agendamentos não encontrado');
            }
            res.json(agendamentos);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    updateAgendamentos: async (req, res) => {
        try {
            const agendamentos = await Agendamentos.findByPk(req.params.id);
            if (!agendamentos) {
                return res.status(404).send('Agendamentos não encontrado');
            }
            await agendamentos.update(req.body);
            res.send('Agendamentos atualizado com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    deleteAgendamentos: async (req, res) => {
        try {
            const agendamentos = await Agendamentos.findByPk(req.params.id);
            if (!agendamentos) {
                return res.status(404).send('Agendamentos não encontrado');
            }
            await agendamentos.destroy();
            res.send('Agendamentos deletado com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    // Implementação das funções de controle de estoque
    // registrarEntrada e registrarSaida
    // ... (a ser implementado)
};

module.exports = AgendamentosController;