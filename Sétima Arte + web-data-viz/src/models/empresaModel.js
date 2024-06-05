var database = require("../database/config");

function buscarPorId(id) {
  var instrucaoSql = `SELECT * FROM usuario WHERE id = '${id}'`;

  return database.executar(instrucaoSql);
}

function listar() {
  var instrucaoSql = `SELECT * FROM usuario`;

  return database.executar(instrucaoSql);
}

function buscarPorCnpj(nome) {
  var instrucaoSql = `SELECT * FROM usuario WHERE nome = '${nome}'`;

  return database.executar(instrucaoSql);
}

function cadastrar(razaoSocial, cnpj) {
  var instrucaoSql = `INSERT INTO usuario (razao_social, cnpj) VALUES ('${razaoSocial}', '${cnpj}')`;

  return database.executar(instrucaoSql);
}

module.exports = { buscarPorCnpj, buscarPorId, cadastrar, listar };
