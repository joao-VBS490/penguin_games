const express = require("express");
const cors = require("cors");
require("./db"); // inicializa o banco

const app = express();

app.use(cors());
app.use(express.json());

// Rotas
app.use("/usuarios", require("./src/routes/usuarios"));
app.use("/login", require("./src/routes/auth"));
app.use("/jogos", require("./src/routes/jogos"));
app.use("/sacola", require("./src/routes/sacola"));

app.listen(3000, () => {
    console.log("Backend rodando em http://localhost:3000");
});