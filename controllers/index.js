const { Book, Post } = require("../models")

const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find({})
        return res.status(200).send(books)
    } catch (e) {
        return res.status(500).send({error: e.message})
    }
}

const getBook = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id)
        return res.status(200).send(book)
    } catch (e) {
        return res.status(500).send({error: e.message})
    }
}

const getPostsForBook = async (req, res) => {
    try {
        const posts = await Post.find({ book: req.params.id})
        return res.status(200).send(posts)
    } catch (e) {
        return res.status(500).send({error: e.message})
    }
}



module.exports = {
    getAllBooks,
    getBook,
    getPostsForBook
}