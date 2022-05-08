const User = require("../models/componente");  

var retorno;

const insertion = async function insere(valores){
   const inserir = await User.create(valores)
    .then( (sucess)=>{
        console.log("Inserção dos valores concluida");
        let msg = `O Componente de Nome: ${valores.nome} e Descrição: ${valores.descricao} foi inserido com sucesso!`; 
        let status = 200;
        retorno = [msg,status];
        console.log(sucess)
        console.log(retorno[0]);
    }).catch( ()=>{
      console.log("Erro ao inserir"); 
        retorno = false; 
    })
    //console.log(`Foi inserido:`);
    //console.log(valores.nome);
    return retorno;
}


module.exports = insertion;