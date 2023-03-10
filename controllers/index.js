const { Book, Post, User } = require("../models")

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

const getPost = async (req, res) => {
    try {
        const book = await Post.findById(req.params.id)
        return res.status(200).send(book)
    } catch (e) {
        return res.status(500).send({error: e.message})
    }
}

const getPostsForBook = async (req, res) => {
    try {
        const posts = await Post.find({ book: req.params.id}).populate("user")
        return res.status(200).send(posts)
    } catch (e) {
        return res.status(500).send({error: e.message})
    }
}

const createBook = async (req, res) => {
    try {
        const book = await new Book(req.body)
        await book.save()
        return res.status(201).json({book})
    } catch (e) {
        return res.status(500).json({ error: e.message})
    }
}

const createPost = async (req, res) => {
    try {
        const post = await new Post(req.body)
        await post.save()
        return res.status(201).json({post})
    } catch (e) {
        return res.status(500).json({ error: e.message})
    }
}

const updatePost = async (req, res) => {
    try {
        console.log(req.body)
        const post =  await Post.findByIdAndUpdate(req.params.id, {title: req.body.title, content: req.body.content})
        return res.status(201).json(post)
    } catch (e) {
        return res.status(500).json({ error: e.message})
    }
}

const deletePost = async (req, res) => {
    try {
        Post.findByIdAndDelete(req.params.id, () => {
            return res.status(201).send("Post Deleted!")
        })
    } catch (e) {
        return res.status(500).json({ error: e.message})
    }
}

const updateFavorites = async (req, res) => {
    try {
        console.log(req.body)
        const user = await User.findByIdAndUpdate(req.body.user,
        {$push: {favorites: req.body.id}},
        { new: true })
        res.status(201).send("favorited")
    } catch (e) {
        return res.status(500).json({ error: e.message})
    }
}

const deleteFavorites = async (req, res) => {
    try {
        console.log(req.query)
        console.log("delete")
        const user = await User.findByIdAndUpdate(req.query.user,
        {$pull: {favorites: req.query.id}},
        { new: true })

        res.status(201).send("unfavorited")
    } catch (e) {
        return res.status(500).json({ error: e.message})
    }
}

const createUser = async (req, res) => {
    try {
        const user = await new User(req.body)
        await user.save()

        return res.status(201).json({message: "user created, please sign in"})
    } catch (e) {
        return res.status(500).json({ error: e.message})
    }
}

const certifyUser = async (req, res) => {
    try {
        const user = await User.findOne({email: req.query.product.email, password: req.query.product.password})
        if (!user) 
            throw new Error("email or password is incorrect")
        return res.status(201).json(user)
    } catch (e) {
        return res.status(500).json({ error: e.message})
    }
}

const findUser = async (req, res) => {
    try {
        const user = await User.findById(req.query.product).populate("favorites")
        return res.status(201).json(user)
    } catch (e) {
        return res.status(500).json({ error: e.message})
    }
}

module.exports = {
    getAllBooks,
    getBook,
    getPostsForBook,
    createBook,
    createPost,
    createUser,
    certifyUser,
    deletePost,
    getPost,
    updatePost,
    updateFavorites,
    findUser,
    deleteFavorites
}