const mongoose = require("mongoose")
const Schema = mongoose.Schema

const academicSource = new Schema(
    {
        title: { type: String, required: true},
        description: {type: String, required: true},
        link: { type: String, required: true},
        user: {type: Schema.Types.ObjectId, required: true},
    },
    { timestamps: true }
)

module.exports = academicSource