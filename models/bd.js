
const varenv = require("config");
const Sequelize = require("sequelize");

const sequelize = new Sequelize( varenv.get("db").database, varenv.get("db").user, varenv.get("db").password, {
    host: varenv.get("db").host,
    dialect: varenv.get("db").dialect
});


sequelize.authenticate()
  .then(function(){
    console.log('Connection has been established successfully.');
  }).catch(function (error){ 
    console.error('Unable to connect to the database:', error);
  });


  module.exports =  sequelize;