const sequelize = require("../database/db.js");
const { DataTypes, Model } = require("sequelize");
class Game extends Model {
  otherPublicField;
}

Game.init(
  {
    id_game: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "games",
    timestamps: false,
  }
);

module.exports = Game;
