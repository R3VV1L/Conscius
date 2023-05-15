const PostServices = require("../services/post-services");

class PostController {
  async showAll(_req, res) {
    try {
      let allPost = PostServices.showAll();
      return res.json(await allPost)
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = new PostController();