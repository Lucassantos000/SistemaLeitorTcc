// const db = require("./bd");
const componente = require("../models/componente");  
const sequelize = require("./bd");

/*const querycomp = async function (){
    const comp =  componente.findByPk().then(function (registro){
        console.log(registro);
        //res.send(registro);
        return registro;
     });
     
     return comp;
 }
*/
//  const identificador = id;
//  const nomeComp = nome;
//  const descricao = desc;
// console.log(id);
// console.log(nome);

 const querycomp = async function(obj){
     /*buscar por todos os campos*/
     if(obj.id !="" && obj.nome !== "" && obj.descricao !==""){
        const [result, metadata] = await sequelize.query(`SELECT * FROM descricaos WHERE id LIKE  '%${obj.id}%' OR nome LIKE '%${obj.nome}%'  OR descricao LIKE '%${obj.descricao}%' `);
        console.log("*************busca toda**************")
        let objeto = result;
        return objeto;
     }
     /*buscar pelo ID*/ 
     else if(obj.id !="" && obj.nome === "" && obj.descricao ===""){
        const [result, metadata] = await sequelize.query(`SELECT * FROM descricaos WHERE id LIKE  '%${obj.id}%' `);
        console.log("*************busca ID**************");
        let objeto = result;
        return objeto;
     }
     /*buscar pela DESCRICAO*/ 
     else if(obj.id =="" && obj.nome === "" && obj.descricao !==""){
        const [result, metadata] = await sequelize.query(`SELECT * FROM descricaos WHERE descricao LIKE '%${obj.descricao}%' `);        
        console.log("*************busca DESCRICAO**************");
        let objeto = result;
        return objeto;
     }
     /*buscar pelo NOME*/ 
     else if(obj.id =="" && obj.nome !== "" && obj.descricao ===""){
        const [result, metadata] = await sequelize.query(`SELECT * FROM descricaos WHERE nome LIKE '%${obj.nome}%' `);        
        console.log("*************busca NOME**************");
        let objeto = result;
        return objeto;
     }
     /*buscar pela id e pelo nome*/ 
     else if(obj.id !="" && obj.nome !== "" && obj.descricao ===""){
        const [result, metadata] = await sequelize.query(`SELECT * FROM descricaos WHERE id LIKE '%${obj.id}%' OR nome LIKE '%${obj.nome}%' `);        
        console.log("*************busca ID/NOME**************");
        let objeto = result;
        return objeto;

     }
     /*buscar pelo id e pela descricao*/
     else if(obj.id !="" && obj.nome === "" && obj.descricao !==""){
        const [result, metadata] = await sequelize.query(`SELECT * FROM descricaos WHERE id LIKE '%${obj.id}%' OR descricao LIKE '%${obj.descricao}%' `);        
        console.log("*************busca ID/DESC**************");
        let objeto = result;
        return objeto;
         }
     /*buscar pelo nome e pela descricao*/
     else if(obj.id =="" && obj.nome !== "" && obj.descricao !==""){
        const [result, metadata] = await sequelize.query(`SELECT * FROM descricaos WHERE nome LIKE '%${obj.nome}%' OR descricao LIKE '%${obj.descricao}%' `);        
        console.log("*************busca NOME/DESC**************");
        let objeto = result;
        return objeto;
     }

//    let objeto = metadata;
   
 }
 
 
// module.exports ={ querycomp, result, metadata }; 
module.exports =  querycomp; 
