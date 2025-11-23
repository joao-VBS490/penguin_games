const jogoModel = require("../models/jogoModel");

module.exports = {
  listar(req, res) {
        jogoModel.listar((err, jogos) => {
            return res.json(jogos);
        });
    }
};
