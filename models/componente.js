const Sequelize = require("sequelize");
const sequelize = require("./bd");
const db = require("./bd");

const comp_desc = db.define("descricao", {
   
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    nome:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: false,
    }

});


/*criar a tablea*/

comp_desc.sync();
// comp_desc.sync({force: true}); // Cria uma tabela sempre que é iniciada o arquivo users.js
//comp_desc.sync({alter: true});


module.exports = comp_desc;