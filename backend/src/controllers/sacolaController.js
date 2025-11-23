const sacolaModel = require("../models/sacolaModel");

module.exports = {
    adicionar(req, res) {
        const { userId } = req.params;
        const { jogoId } = req.body;

        sacolaModel.adicionar(userId, jogoId, err => {
            return res.json({ mensagem: "Jogo adicionado à sacola!" });
        });
    },

    listar(req, res) {
        const { userId } = req.params;
        sacolaModel.listar(userId, (err, itens) => {
            return res.json(itens);
        });
    }
};
