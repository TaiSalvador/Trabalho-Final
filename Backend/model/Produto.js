const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class produto extends Model {}

produto.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING
    },
    descricao: {
        type: DataTypes.TEXT
    },
    preco: {
        type: DataTypes.DECIMAL(10,2)
    },
    categoria: {
        type: DataTypes.STRING
    },
    marca: {
        type: DataTypes.STRING
    },
    linkimg: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'produtos',
    timestamps: false
});

module.exports = produto;