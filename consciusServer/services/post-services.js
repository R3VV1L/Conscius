require("dotenv").config();
const Game = require("../models/Game");

class PostServices {
  async showAll() {
    try {
      let game = await Game.findAll();
      return [game];
    } catch (err) {
      console.log(
        err
      );
    }
  }
}

module.exports = new PostServices();