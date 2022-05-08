

const teste = function testecomp(valores){
    const nome = valores.nome;
    const desc = valores.descricao;

    //console.log(nome + desc);

    if(nome === ""){
        console.log(" nome vazio");
    }
    
    if(nome === undefined){
        console.log("nome undefined");
    }
    if(desc === false){
        console.log("nome falso");
    }
    
    if(desc === ""){
        console.log("nome vazio");
    }
    
    if(desc === undefined){
        console.log("nome undefined");
    }
    if(desc === false){
        console.log("nome falso");
    }


    /* ---------------------------------------------------------------------------------------------------------------- */
    if( (nome === "" || nome === undefined || nome === null ) || (desc === "" || desc === undefined || desc === null) ){
        return [false,false,0];
        
    }
    else{
        array = [nome.toUpperCase(), desc.toUpperCase(), 200] //TUDO NA BASE SERÁ SALVO EM MAÍSCULO
        return array;
    }
}

module.exports  = teste;   
