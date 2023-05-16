require("dotenv").config();
const Game = require("../models/Game");
const Genre = require("../models/Genre");
const GenreGame = require("../models/GenreGame");
const SelectGenreGamesFilter = require("../database/db.js");

class PostServices {
  async showAll() {
    try {
      let game = await Game.findAll();
      let genre = await Genre.findAll();
      let genregames = await GenreGame.findAll();
      let genregamesfilter = await SelectGenreGamesFilter.query('SELECT * FROM `genregamefilters`')
      return [game, genre, genregames, genregamesfilter];
    } catch (err) {
      console.log(
        err
      );
    }
  }
}

module.exports = new PostServices();