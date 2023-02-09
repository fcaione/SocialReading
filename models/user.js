const mongoose = require("mongoose")
const Schema = mongoose.Schema

const User = new Schema(
    {
        name: { type: String, required: true},
        email: { type: String, required: true},
        booksLiked: {type: [Schema.Types.ObjectId]},
        posts: {type: [Schema.Types.ObjectId]}
    },
    { timestamps: true }
)

module.exports = User