const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.MYSQL_URI);

sequelize.authenticate();
console.log("DB connection successful");

module.exports = sequelize;
