const usuarioModel = require("../models/usuarioModel");
const { compararSenha } = require("../utils/hash");

module.exports = {
  login(req, res) {
    const { email, senha } = req.body;

    usuarioModel.buscarPorEmail(email, (err, usuario) => {
        if (!usuario) return res.status(404).json({ erro: "Usuário não encontrado!" });

            if (!compararSenha(senha, usuario.senha)) {
                return res.status(401).json({ erro: "Senha incorreta!" });
            }
            res.json({ mensagem: "Logado!", userId: usuario.id });
        });
    }
};
