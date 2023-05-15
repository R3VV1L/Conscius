require("dotenv").config();
const Game = require("../models/Game");
const Genre = require("../models/Genre");
const GenreGame = require("../models/GenreGame");

class PostServices {
  async showAll() {
    try {
      let game = await Game.findAll();
      let genre = await Genre.findAll();
      let genregames = await GenreGame.findAll();
      return [game, genre, genregames];
    } catch (err) {
      console.log(
        err
      );
    }
  }
}

module.exports = new PostServices();