const db = require("../../db");

module.exports = {
    listar(callback) {
        db.all("SELECT * FROM jogos", [], callback);
    }
};
