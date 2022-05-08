
const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");  
const varenv = require("config");  
const reg = require("./models/register");  
const busca = require("./models/busca");  
const buscadesc = require("./models/buscadesc");  
const insert = require("./models/insertion");  
const compcad = require("./models/cadcomp");
const testecomp = require("./testacomp");
const querycomp = require("./models/buscaComp");

/*const valor = {
    componente1: "cod1",
    componente2: "cod2",
    descricao1: "cod",
    descricao2: "cod",
    
};

console.log();
 async function capture(){
    const value = await insert(valor);
    console.log(value);
};

capture();*/





//formulario.napuea.com
app.engine('handlebars', exphbs({defaultLayout : 'main'}));

app.set('view engine', 'handlebars')

app.use(express.static("public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));



app.get("/", async (req,res)=>{
    /*variável com as informações da base de dados*/
    
    res.render("index");

})

app.get("/buscaerro", async (req,res)=>{
    /*variável com as informações da base de dados*/
    const registro  = await busca();
    // console.log(registro[0].dataValues.id);
    // res.json(registro);

    res.render('erros', {registro: registro});
    // res.render('erros', {erros: erros });

})

//para inserir o erro
app.post("/insertion", async (req,res)=>{
    const retorno = await insert(req.body);
    //const registro = await busca();
    //res.json(registro);
});

//para cadastrar os componentes
app.post("/cadcomp", async (req,res)=>{
    
    const valorestestados = await testecomp(req.body);
    console.log(valorestestados);
    console.log(valorestestados[2]);

    if(!valorestestados[2]){ //campo de status do array
        let respErro = ["Erro ao Inserir", 0];
        console.log(respErro);
        
        res.send(respErro);
           
    }else{
        const retorno = await compcad(req.body);
        if(retorno){//caso tenha dado algum erro
            res.status(200).send(retorno);       
        }
    }
});

/*
app.get("/busca/:id", async (req,res)=>{
    
    const produto = await buscadesc(req.params.id);

    res.json(produto);
});
*/

app.post("/busca", async (req,res)=>{
    console.log(req.body);
    const produto = await buscadesc(req.body.componente);

    res.json(produto);
});

app.get("/cad", async (req,res)=>{
    res.render("cadComp", {titule:"Cadastro"});
});



app.post("/buscaComp", async (req,res)=>{
    // obj = {id:"0000", nome:"resistor", descricao: "000000"};
    // console.log("obj" + obj);
    const buscacompnte = await querycomp(req.body);
    const title = "busca de componente";
    const todos = {buscacompnte, title};
    // console.log( buscacompnte)    
    // res.send(buscacompnte);
    res.status(200).render("buscaComp", {busca:todos});
    
} );


/*MUDAR PARA MÉTODO POST E FAZER A REQUISOIÇÃO NA BARRAS DE BUSCA (MÉTODO CHANGE)*/
app.get("/buscaComp", async (req,res)=>{
    
    const title = "busca de componente";
    const todos = {title};
 
    // res.send("PÁGINA CARREGANDO...");
    res.render("buscaComp", {busca:todos});
    // res.json(buscacompnte);
} );

app.listen(3333, ()=>{
    console.log("Servidor da Aplicação no AR");
});