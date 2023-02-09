const mongoose = require("mongoose")
const BookSchema = require("./book")
const PostSchema = require("./post")
const UserSchema = require("./user")
const AcademicSourceSchema = require("./academicSource")

const Book = mongoose.model("Book", BookSchema)
const Post = mongoose.model("Post", PostSchema)
const User = mongoose.model("User", UserSchema)
const AcademicSource = mongoose.model("Sources", AcademicSourceSchema)

module.exports = {
    Book,
    Post,
    User,
    AcademicSource
}