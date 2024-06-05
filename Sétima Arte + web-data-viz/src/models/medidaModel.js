var database = require("../database/config");

function buscarUltimasMedidas() {

    var instrucaoSql = ` select categoria, count(categoria) as Total from usuario group by categoria;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// function buscarMedidasEmTempoReal() {

//     var instrucaoSql = ` select categoria, count(categoria) as Total from usuario group by categoria;`;

//     console.log("Executando a instrução SQL: \n" + instrucaoSql);
//     return database.executar(instrucaoSql);
// }

module.exports = {
    buscarUltimasMedidas,
    // buscarMedidasEmTempoReal
}
