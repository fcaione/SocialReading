const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Post = new Schema(
    {
        title: { type: String, required: true},
        content: { type: String, required: true},
        book: { type: Schema.Types.ObjectId, ref: Book },
        user: {type: Schema.Types.ObjectId, ref: User, required: true},
    },
    { timestamps: true }
)

module.exports = Post