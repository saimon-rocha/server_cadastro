const Users = require("../models/Users");

class UsuarioController {
    static async index(req, res) {
        try {
            const users = await Users.getAll();  // Aguardar a resolução da promessa

            if (users && users.length > 0) {  // Verifica se há usuários
                res.json(users);  // Envia a lista de usuários
            } else {
                res.status(404).send('Nenhum usuário encontrado!');  // Mensagem de erro
            }
        } catch (error) {
            res.status(500).send('Erro ao buscar usuários: ' + error.message);  // Tratamento de erro
        }
    }

    static async create(req, res) {
        res.send('Criar');
    }

    static async edit(req, res) {
        res.send('Editar!');
    }

    static async delete(req, res) {
        res.send('Deletar!');
    }
}

module.exports = UsuarioController;
