var express = require("express");
var router = express.Router();

var categoriaController = require("../controllers/categoriaController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    categoriaController.cadastrar(req, res);
})

router.get("/buscar", function (req, res) {
    categoriaController.buscarPorCnpj(req, res);
});

router.get("/buscar/:id", function (req, res) {
  categoriaController.buscarPorId(req, res);
});

router.get("/listar", function (req, res) {
  categoriaController.listar(req, res);
});

module.exports = router;