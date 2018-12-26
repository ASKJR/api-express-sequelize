const Sequelize  = require('sequelize');
const sequelize = new Sequelize('express', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false
});

module.exports = {
    Sequelize,
    sequelize
}