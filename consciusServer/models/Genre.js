const sequelize = require("../database/db.js");
const { DataTypes, Model } = require("sequelize");
class Genre extends Model {
  otherPublicField;
}

Genre.init(
  {
    id_genre: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "genres",
    timestamps: false,
  }
);

module.exports = Genre;
