var database = require("../database/config");

function buscarPorId(id) {
  var instrucaoSql = `SELECT * FROM categoria WHERE id = '${id}'`;

  return database.executar(instrucaoSql);
}

function listar() {
  var instrucaoSql = `SELECT * FROM categoria`;

  return database.executar(instrucaoSql);
}

function buscarPorCnpj(nome) {
  var instrucaoSql = `SELECT * FROM categoria WHERE nome = '${nome}'`;

  return database.executar(instrucaoSql);
}

function cadastrar(razaoSocial, cnpj) {
  var instrucaoSql = `INSERT INTO categoria (razao_social, cnpj) VALUES ('${razaoSocial}', '${cnpj}')`;

  return database.executar(instrucaoSql);
}

module.exports = { buscarPorCnpj, buscarPorId, cadastrar, listar };
