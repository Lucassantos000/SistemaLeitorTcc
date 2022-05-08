const componentes = require("./models/componente");
var fs = require('fs');
const readLine = require('readline');
/*COMANDO PARA INSERIR NA TABELA COMPONENTES


await User.create({
    firstName: "Nathan"
  });

*/



/*
const insertion = async function insere(array){

    for( i in array){
    await componentes.create(valores)
     .then( ()=>{
         console.log("Inserção dos valores concluida");
         let msg = `O Componente de Nome: ${valores.nome} e Descrição: ${valores.descricao} foi inserido com sucesso!`; 
         let status = 200;
         retorno = [msg,status];
         console.log(retorno[0]);
     }).catch( ()=>{
       console.log("Erro ao inserir"); 
         retorno = false; 
     })
     //console.log(`Foi inserido:`);
     //console.log(valores.nome);
     return retorno;
 }//fim do array
 
}
*/


function trataCSV(){

    var bruto = `
    122192;SOLDA FIO 60X40 189M10;
    237349;SOLDA BARRA BA VACULOY 60X40;
    242080;SOLDA FIO 63X37 183M05;
    288995;PASTA SOLDA ALPHA OM-5300;
    `;
    
    
    var cabecalho = "id, nome, descricao"
    var newstr = bruto.replace(/;/g ,  ',');
    // var newstr = newstr.replace(/;/g, '\n');
    const csv = cabecalho + newstr;
    return csv;
}



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

const tratadoCSV = trataCSV();
const csv = CSVTOJSON(tratadoCSV);


/*
for(i of csv){
    console.log(i);
}*/

const insertion = async function insere(linha){

    
    await componentes.create(linha)
     .then( ()=>{
         console.log("Inserção dos valores concluida");
         let msg = `O Componente de Id ${linha.id} , de Nome: ${linha.nome} e Descrição: ${linha.descricao} foi inserido com sucesso!`; 
         let status = 200;
         retorno = {msg,status};
         console.log(retorno);
     }).catch( ()=>{
       console.log("Erro ao inserir"); 
         retorno = {msg:"Erro ao inserir",false:false}; 
     })
     //console.log(`Foi inserido:`);
     //console.log(valores.nome);
     return retorno;
 }//fim do array
 


for(linha of csv){
    const insercao = insertion(linha);
    console.log(insercao);
};








const tratado = fs.readdir("./", (error, files)=>{
  console.log(files);
});

/*

let texto = async function lerfile(){
let newfile = [];
var file = './compMichael.csv';
var rl = readLine.createInterface({
    input : fs.createReadStream(file),
    output : process.stdout,
    terminal: false
});
rl.on('line', function (text) {
//   console.log(typeof(text));
    newfile.push(text);
    // console.log(newfile);
});
    return newfile;
}

*/
/*
for( i of jsonObj){
    // console.log(i);
    
}
*/




