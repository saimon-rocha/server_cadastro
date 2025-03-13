require('dotenv').config();
const { Sequelize } = require("sequelize");

// Verifica se a variável de ambiente está carregada corretamente
if (!process.env.DATABASE_URL) {
  throw new Error("A variável DATABASE_URL não está definida!");
}

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres', // Garante que o Sequelize está interpretando o banco corretamente
  dialectOptions: {
    ssl: {
      require: true,  // Railway geralmente exige SSL para conexão com o banco
      rejectUnauthorized: false, // Isso evita erro de certificado inválido
    }
  },
  logging: false, // Desativar logs no terminal
});

sequelize.authenticate()
  .then(() => console.log("Conexão com o banco de dados foi estabelecida com sucesso!"))
  .catch(err => {
    console.error("Erro ao conectar com o banco de dados:", err);
    process.exit(1); // Encerra o processo se a conexão falhar
  });

module.exports = sequelize;
