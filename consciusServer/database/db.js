const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(
  "conscius",
  "root",
  "", // password
  {
    host: "localhost",
    dialect: "mysql",
    port: "3306"
  }
);

sequelize
  .authenticate()
  .then(() => console.log("Сервак кайфует"))
  .catch((err) => console.error("Бро, косяк ", err));

module.exports = sequelize;