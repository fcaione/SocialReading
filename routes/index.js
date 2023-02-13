const { Router } = require('express');
const router = Router();
const controller = require("../controllers")

router.get('/books', controller.getAllBooks)
router.get('/books/:id', controller.getBook)
router.get('/books/:id/posts', controller.getPostsForBook)
router.post("/books/add", controller.createBook)
router.post("/books/:id/new", controller.createPost)

module.exports = router;