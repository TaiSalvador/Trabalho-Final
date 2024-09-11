const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class agendamentos extends Model {}

agendamentos.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    datahora: {
        type: DataTypes.STRING
    },
    formadepagamento: {
        type: DataTypes.STRING(30)
    },
    funcionario: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'agendamentos',
    timestamps: false
});

module.exports = agendamentos;