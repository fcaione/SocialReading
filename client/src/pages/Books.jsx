import axios from "axios"
import { useState, useEffect } from "react"
import BookCard from "../components/BookCard"
import AddBook from "../components/AddBook"
import Header from "../components/Header"
import "./Books.css"

const Books = () => {
	const [books, setBooks] = useState([])

	const getBooks = async () => {
		const response = await axios.get("/api/books/")
		setBooks(response.data)
	}

	useEffect(() => {
		getBooks()
	}, [])

	const listOfBooks = books.map((book) => (
		<BookCard key={book._id} {...book} />
	))

	return (
		<div className="flex-column">
			<Header />
			<div className="books-container">
				{listOfBooks}
				<AddBook />
			</div>
		</div>
	)
}
export default Books
