const User = require("../models/register");  

const queryall = async function (){
    const registro =  User.findAll().then(function (registro){
         //console.log(registro);
        //res.send(registro);
        return registro;
     });
     
     return registro;
 }

module.exports = queryall; 
