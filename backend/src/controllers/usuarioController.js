const usuarioModel = require("../models/usuarioModel");
const { hashSenha } = require("../utils/hash");

module.exports = {
    listarUsuarios(req, res) {
        usuarioModel.buscarTodos((err, rows) => {
            if (err) return res.status(500).json({ erro: "Erro ao listar usuários" });
            return res.json(rows);
        });
    },

    criarUsuario(req, res) {
        const { nome, email, senha } = req.body;
        const senhaHash = hashSenha(senha);

        usuarioModel.criar(nome, email, senhaHash, (err, id) => {
            if (err) return res.status(400).json({ erro: "Email já cadastrado!" });
            return res.status(201).json({ mensagem: "Usuário criado!", userId: id });
        });
    },

    registrar(req, res) {
        return module.exports.criarUsuario(req, res);
    }
};
