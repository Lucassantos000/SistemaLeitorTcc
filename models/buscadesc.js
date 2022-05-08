const componente = require("../models/componente");  

const querydesc = async function (id){
    const registro =  componente.findByPk(id).then(function (registro){
         //console.log(registro);
        //res.send(registro);
        return registro;
     });
     
     return registro;
 }

module.exports = querydesc; 
