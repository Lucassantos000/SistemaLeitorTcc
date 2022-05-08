const User = require("../models/register");  

const insertion = async function insere(valores){
   const inserir = await User.create(valores)
    .then( ()=>{
        console.log("Inserção Concluida");
    }).catch( ()=>{
      console.log("Erro ao inserir");  
    })

    return inserir;
}


module.exports = insertion;