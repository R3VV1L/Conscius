const Router = require("express").Router;
const PostController = require("../controllers/post-controller.js");

const router = new Router();

router.get("/", PostController.showAll);

module.exports = router;