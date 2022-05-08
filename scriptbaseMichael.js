const componentes = require("./models/componente");
var fs = require('fs');

/*FUNÇÃO PARA TRANTAR OS ARQUIVO CSV*/

function trataCSV(){

    var bruto = `
    337794;DIODO SCH BAT54C SOT23 L43/W1;
    337865;CAP CERA 101 J 50V NP0 1005;
    337883;CAP CERA 103 K 25V X7R 1005;
    337909;CAP CERA 106 K 16V X5R 2012;
    337990;CAP CERA 22R J 50V NP0 1005;
    338034;CAP CERA 331 K 50V X7R 1005;
    338043;CAP CERA 332 K 50V X7R 1005;
    338061;CAP CERA 473 K 25V X7R 1005;
    338089;CAP CERA 561 K 50V X7R 1005;
    338347;RES META 0R0 J 1/16W 1005;
    338356;RES META 101 J 1/10W 2012;
    338365;RES META 101 J 1/16W 1005;
    338392;RES META 102 J 1/16W 1005;
    338409;RES META 103 J 1/16W 1005;
    338418;RES META 104 J 1/16W 1005;
    
    `;
    
    
    var cabecalho = "id, nome, descricao"
    var newstr = bruto.replace(/;/g ,  ',');
    // var newstr = newstr.replace(/;/g, '\n');
    const csv = cabecalho + newstr;
    return csv;
}



/* FUNÇÃO QUE TRASFORMA O CSV EM JSON*/

function CSVTOJSON(csv){
    var  bufferString = csv;
    
    var arr = bufferString.split('\n');     
    
    var jsonObj = [];
    var headers = arr[0].split(',');
    for(var i = 1; i < arr.length; i++) {
      var data = arr[i].split(',');
      var obj = {};
      for(var j = 0; j < data.length; j++) {
         obj[headers[j].trim()] = data[j].trim();
      }
      jsonObj.push(obj); //OBJETO JSON COM ID, NOME, DESCRICAO
    }
    
    obj = JSON.stringify(jsonObj); //STRING DO OBJ ANTERIOR
    
        return jsonObj;
    }

    /*CHAMADA DAS  DUAS FUNÇÕES EM SEQUENCIA -> PARA TRATAR -> DEPOIS CONVERTER */
const tratadoCSV = trataCSV();
const csv = CSVTOJSON(tratadoCSV);


    /*INSERÇÃO NO BANCO*/
    const insertion = async function insere(linha){
       await componentes.create(linha)
         .then( (sucess)=>{
             console.log("Inserção dos valores concluida");
             let msg = `O Componente de Id ${linha.id} , de Nome: ${linha.nome} e Descrição: ${linha.descricao} foi inserido com sucesso!`; 
             let status = "OK";
             let parametros = {id: linha.id, nome:linha.nome, descricao: linha.descricao};
             retorno = {msg,status, parametros,sucess};
             console.log(retorno);
         }).catch( (e)=>{
           console.log("Erro ao inserir"); 
           retorno = {msg:"Erro ao inserir",false:false, erroName: e.name, erro: e.parent}; 
         })
         
         
         return retorno;
        }
     
    
 /**LAÇO PARA CADA UMA LINHA DO JSON (QUE CONTÉM AS INFORÇÃOMES ID, NOME, DFESCRICAO */   
    for(linha of csv){
        const insercao = insertion(linha)
        .then((inserir)=>{
            console.log(inserir);
        });
        
    };
    