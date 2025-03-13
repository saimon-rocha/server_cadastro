require('dotenv').config();
const { Sequelize } = require("sequelize");

// Verifica se a variável de ambiente está definida corretamente
if (!process.env.DATABASE_URL) {
  throw new Error("A variável DATABASE_URL não está definida!");
}

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres', 
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, 
    }
  },
  logging: false,
});

module.exports = sequelize;
