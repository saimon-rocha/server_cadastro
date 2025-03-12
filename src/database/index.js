const { Sequelize } = require('sequelize');
const databaseConfig = require('../config/db');
const Users = require('../models/Users');

class Database {
  constructor() {
    this.init();
  }

  init() {
    // Criando a conexão com o banco de dados
    this.connection = new Sequelize(
      databaseConfig.database,   // Nome do banco de dados
      databaseConfig.username,   // Usuário do banco
      databaseConfig.password,   // Senha do banco
      {
        host: databaseConfig.host,     // Endereço do banco de dados
        dialect: databaseConfig.dialect,  // Dialeto (PostgreSQL, MySQL, etc)
        logging: false,  // Desabilitando logs do Sequelize
      }
    );

    // Passando a instância do Sequelize para o modelo Users
    Users.init(this.connection); // Agora a conexão é passada corretamente para a inicialização do modelo
  }
}

module.exports = new Database();
