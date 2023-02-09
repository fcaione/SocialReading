const { Schema } = require("mongoose");
const db = require("../db");
const { User } = require("../models");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {

	const users = [
		{
            name: "freddy",
            email: "someemailaddress@mail.com",
            booksLiked: [],
            posts: []
		},
        {
            name: "sam",
            email: "someemailaddress1@mail.com",
            booksLiked: [],
            posts: []
		},
        {
            name: "teresa",
            email: "someemailaddress2@mail.com",
            booksLiked: [],
            posts: []
		},
	];

    await User.insertMany(users)
    console.log("users created!")
};

const run = async () => {
    await main()
    db.close()
}

run()