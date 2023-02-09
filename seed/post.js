const { Schema } = require("mongoose");
const db = require("../db");
const { Post, Book, User } = require("../models");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {

	const arrayOfLists = await Book.find({});
    const userList = await User.find({})
	const posts = [
		{
			title: "Something about why i love madeline miller",
			content: "she rocks!",
			book: arrayOfLists[0].id,
			user: userList[0].id,
			fullReview: null,
			chapter: null,
			page: 72,
			academicSource: null
		},
        {
			title: "Something about why i love TJ Klune",
			content: "she rocks!",
			book: arrayOfLists[1].id,
			user: userList[1].id,
			fullReview: null,
			chapter: null,
			page: 55,
			academicSource: null
		}
	];

    await Post.insertMany(posts)
    console.log("Posts created")
};

const run = async () => {
    await main()
    db.close()
}

run()
