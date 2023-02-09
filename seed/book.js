const db = require("../db");
const { Book } = require("../models");

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
	const books = [
		{
            title: "The Song of Achilles",
			author: "Madeline Miller",
			publisher: "Ecco",
			datePublished: "2011"
		},
        {
            title: "The House in the Cerulean Sea",
			author: "TJ Klune",
			publisher: "Tor Books",
			datePublished: "2020"
		},
        {
            title: "Crying in H Mart",
			author: "Michelle Zauner",
			publisher: "Knopf",
			datePublished: "2021"
		}
	]

    await Book.insertMany(books)
    console.log("created books!")
};

const run = async () => {
    await main()
    db.close()
}

run()
