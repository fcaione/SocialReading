import axios from "axios"
import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import Posts from "./Posts"
import "./BookDetails.css"

const BookDetails = () => {
	let { id } = useParams()

	const [selectedBook, setSelectedBook] = useState({})

	const getBook = async () => {
		const response = await axios.get(
			`http://localhost:3001/api/books/${id}`
		)
		setSelectedBook(response.data)
	}

	useEffect(() => {
		getBook()
	}, [])

	return (
		<div className="book-details-container">
			<div className="details--sidebar">
				<img src={selectedBook.img} alt="" className="details--photo"/>
			</div>
			<div className="details--data">
				<h1>{selectedBook.title}</h1>
				<h3>by: {selectedBook.author}</h3>
				<h3>Publisher: {selectedBook.publisher}</h3>
				<h3>Date Published: {selectedBook.datePublished}</h3>
			</div>


			<div className="details--posts">
				<Posts />
				<Link to={`new`}>
					<button className="details--btn">Write a Review</button>
				</Link>
			</div>
		</div>
	)
}
export default BookDetails
