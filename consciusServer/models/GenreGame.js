const sequelize = require("../database/db.js");
const { DataTypes, Model } = require("sequelize");
class GenreGame extends Model {
  otherPublicField;
}

GenreGame.init(
  {
    id_genregame: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },

    id_genre: {
      type: DataTypes.INTEGER,
    },

    id_game: {
        type: DataTypes.INTEGER,
      },
  },
  {
    sequelize,
    modelName: "genregames",
    timestamps: false,
  }
);

module.exports = GenreGame;
