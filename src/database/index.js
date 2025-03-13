const sequelize = require('../config/db'); // Importando a instância do Sequelize já configurada

sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
  })
  .catch(err => {
    console.error('Erro ao conectar com o banco de dados:', err);
  });

module.exports = sequelize;
