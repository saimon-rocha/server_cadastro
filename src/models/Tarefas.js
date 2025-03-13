const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Tarefas extends Model {}

Tarefas.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: DataTypes.STRING,
    description: DataTypes.STRING,
  },
  {
    sequelize,            // Conexão com o banco de dados
    modelName: 'Tarefas', // Nome do modelo
    tableName: 'tarefas', // Nome da tabela no banco de dados
    timestamps: true,     // Adiciona os campos 'createdAt' e 'updatedAt'
  }
);

module.exports = Tarefas;
