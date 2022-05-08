const Sequelize = require("sequelize");
const db = require("./bd");
const componente = require("./componente");

const reg = db.define("registro", {
   
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    componente1: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    componente2: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    descricao1: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    descricao2: {
        type: Sequelize.STRING,
        allowNull: false,
    }

});

/*Cria uma relação (chave estrangeria) entre a tabela  componente e registro*/

/*
reg.belongsTo( componente, {
    constraint: true,
    foreingKey: 'idcomponente'
});
*/

/*criar a tablea*/

reg.sync({alter: true});


module.exports = reg;