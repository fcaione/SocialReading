const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Post = new Schema(
    {
        title: { type: String, required: true},
        content: { type: String, required: true},
        book: { type: Schema.Types.ObjectId },
        user: {type: Schema.Types.ObjectId, required: true},
        fullReview: {type: Boolean},
        chapter:  {type: Number},
        page: {type: Number},
        academicSource: {type: [Schema.Types.ObjectId]}
    },
    { timestamps: true }
)

module.exports = Post