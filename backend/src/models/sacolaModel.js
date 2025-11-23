const db = require("../../db");

module.exports = {
  adicionar(userId, jogoId, callback) {
    db.run(
      "INSERT INTO sacola (userId, jogoId) VALUES (?, ?)",
      [userId, jogoId],
      callback
    );
  },

  listar(userId, callback) {
    db.all(
      `SELECT jogos.nome, jogos.preco
       FROM sacola
       JOIN jogos ON jogos.id = sacola.jogoId
       WHERE sacola.userId = ?`,
      [userId],
      callback
    );
  }
};
