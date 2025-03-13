const { Model, DataTypes } = require('sequelize');
class Tarefas extends Model {
  static init(sequelize) {
    super.init(
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
        sequelize,
        modelName: 'Tarefas',
        tableName: 'tarefas',
        timestamps: true,  // Campos 'createdAt' e 'updatedAt'
      }
    );
  }
}

module.exports = Tarefas;
