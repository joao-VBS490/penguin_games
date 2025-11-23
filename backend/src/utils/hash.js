const bcrypt = require("bcryptjs");

module.exports = {
    hashSenha(senha) {
        return bcrypt.hashSync(senha, 10);
    },
    compararSenha(senha, hash) {
        return bcrypt.compareSync(senha, hash);
    }
};
