// src/app.js
const express = require('express');
const cors = require('cors');
const routes = require('./routes'); // Importa as rotas
const database = require('./database'); // Conexão com o banco de dados


const app = express();
const port = 3000;

// Middleware para analisar o corpo da requisição em formato JSON
app.use(express.json());

// Habilitando o CORS para permitir requisições do front-end em http://localhost:5173
app.use(cors({
  origin: 'http://localhost:5173', // Permite apenas o front-end React no localhost:5173
  methods: 'GET,POST,PUT,DELETE',  // Define os métodos HTTP permitidos
  allowedHeaders: 'Content-Type',  // Define os cabeçalhos permitidos
}));

// Usando as rotas definidas em outro arquivo
app.use('/', routes);

module.exports = app; // Exporta a aplicação para testes ou outra configuração
