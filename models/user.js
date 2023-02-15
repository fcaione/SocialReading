const mongoose = require("mongoose")
const Schema = mongoose.Schema

const User = new Schema(
    {
        name: { type: String, required: true, unique: true},
        email: { type: String, required: true, unique: true},
        password: { type: String, required: true},
        favorites: {type: [Schema.Types.ObjectId], ref: "Book"},
    },
    { timestamps: true }
)

module.exports = User