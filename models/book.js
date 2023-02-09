const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Book = new Schema(
    {
        author: { type: String, required: true},
        publisher: { type: String, required: true},
        datePublished: {type: String, required: true},
        posts: {type: [Schema.Types.ObjectId]}
    },
    { timestamps: true }
)

module.exports = Book