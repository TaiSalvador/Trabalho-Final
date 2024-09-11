const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class servicos extends Model {}

servicos.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING
    },
    descricao: {
        type: DataTypes.TEXT(900)
    },
    preco: {
        type: DataTypes.DECIMAL(7,2)
    }
}, {
    sequelize,
    modelName: 'servicos',
    timestamps: false
});

module.exports = servicos;