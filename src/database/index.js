const { Sequelize } = require('sequelize');
const Tarefas = require('../models/Tarefas'); // Supondo que o caminho do modelo seja esse
const databaseConfig = require('../config/db'); // O arquivo de configuração

class Database {
  constructor() {
    this.init();
  }

  async init() {
    try {
      // Criando a conexão com o banco de dados
      this.connection = new Sequelize(databaseConfig);

      // Verificar a conexão com o banco de dados
      await this.connection.authenticate();
      console.log('Conexão com o banco de dados foi bem-sucedida!');

      // Inicializando os modelos
      Tarefas.init(this.connection);

      // Sincronizando o banco de dados
      await this.connection.sync({ force: false });
      console.log('Banco de dados sincronizado');
    } catch (error) {
      console.error('Erro ao conectar ao banco de dados:', error);
    }
  }
}

module.exports = new Database();
