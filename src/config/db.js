const { Sequelize } = require('sequelize');
require('dotenv').config(); // Certifique-se de carregar as variáveis do .env

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("A variável de ambiente DATABASE_URL não está definida!");
}

// Faz o parse correto da URL
const { hostname, port, username, password, pathname } = new URL(databaseUrl);
const database = pathname.replace("/", ""); // Remove a barra inicial do caminho

const sequelize = new Sequelize(database, username, password, {
  host: hostname,
  port,
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // Necessário para o Railway
    },
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Conexão bem-sucedida com o banco de dados!");
  })
  .catch((err) => {
    console.error("Erro ao conectar ao banco de dados:", err);
  });

module.exports = sequelize;
