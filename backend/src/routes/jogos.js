const express = require("express");
const router = express.Router();
const controller = require("../controllers/jogosController");

router.get("/", controller.listar);

module.exports = router;
