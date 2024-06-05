var database = require("../database/config");

function buscarAquariosPorEmpresa() {

  var instrucaoSql = `select categoria, count(categoria) as Total from usuario group by categoria;`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

// function cadastrar(empresaId, descricao) {
  
//   var instrucaoSql = `INSERT INTO (descricao, fk_empresa) aquario VALUES (${descricao}, ${empresaId})`;

//   console.log("Executando a instrução SQL: \n" + instrucaoSql);
//   return database.executar(instrucaoSql);
// }


module.exports = {
  buscarAquariosPorEmpresa,
  // cadastrar
}
