const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Book = new Schema(
    {
        title: { type: String, required: true },
        author: { type: String, required: true},
        description: { type: String, required: true},
        img: { type: String, required: true},
        publisher: { type: String, required: true},
        datePublished: {type: String, required: true}
    },
    { timestamps: true }
)

module.exports = Book