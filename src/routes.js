const { Router } = require('express');
const UsuarioController = require('./controllers/UsuarioController');

const routes = Router();

routes.get('/', (req, res) => res.redirect('/usuarios'));
routes.get('/usuarios', UsuarioController.index);  // Adicionando a rota de listagem
routes.post('/usuarios', UsuarioController.create);
routes.put('/usuarios/:id', UsuarioController.edit);
routes.delete('/usuarios/:id', UsuarioController.delete);

module.exports = routes;