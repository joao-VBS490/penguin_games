const db = require("../../db");

module.exports = {
    criar(nome, email, senhaHash, callback) {
        db.run(
            "INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)",
            [nome, email, senhaHash],
            function (err) {
                callback(err, this?.lastID);
            }
        );
    },

    buscarPorEmail(email, callback) {
        db.get("SELECT * FROM usuarios WHERE email = ?", [email], callback);
    }
,
    buscarTodos(callback) {
        db.all("SELECT id, nome, email FROM usuarios", [], callback);
    }
};
