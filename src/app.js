// src/app.js
const express = require('express');
const cors = require('cors');
const routes = require('./routes'); // Importa as rotas
const database = require('./database'); // Conexão com o banco de dados


const app = express();
const port = 3000;

// Middleware para analisar o corpo da requisição em formato JSON
app.use(express.json());

// Habilitar CORS para o seu frontend no Vercel)
app.use(cors({
  origin: 'https://gerenciador-tarefas-rolmdbvd3-saimon-rochas-projects.vercel.app', // Permite que o frontend acesse o backend
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
}));

// Usando as rotas definidas em outro arquivo
app.use('/', routes);

module.exports = app; // Exporta a aplicação para testes ou outra configuração
