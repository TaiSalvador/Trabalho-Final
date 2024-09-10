const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Clientes extends Model {}

Clientes.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    cpf: {
        type: DataTypes.CHAR(14)
    },
    senha: {
        type: DataTypes.STRING
    },
    telefone: {
        type: DataTypes.INTEGER
    }
}, {
    sequelize,
    modelName: 'clientes',
    timestamps: false
});

module.exports = Clientes;