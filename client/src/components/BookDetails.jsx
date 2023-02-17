import axios from "axios"
import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import Posts from "./Posts"
import AddFavorite from "./AddFavorite"
import "./BookDetails.css"

const BookDetails = ({ user }) => {
	let { id } = useParams()

	const [selectedBook, setSelectedBook] = useState({})

	const getBook = async () => {
		const response = await axios.get(
			`/api/books/${id}`
		)
		setSelectedBook(response.data)
	}

	useEffect(() => {
		getBook()
	}, [])

	return (
		<div className="book-details-container">
			<div className="details--sidebar">
				<div className="details--opaque">
					<img
						src={selectedBook.img}
						alt=""
						className="details--photo"
					/>
					<div className="flex-row-evenly">
						<h2 className="white-text">Favorite</h2>
						<AddFavorite user={user} />
					</div>
				</div>
			</div>

			<div className="details--data">
				<h1>
					{selectedBook.title}
					<br />
					<span className="italics author">by: {selectedBook.author}</span>
				</h1>
				<p>Description:</p>
				<div className="details--description">
					<p>{selectedBook.description}</p>
				</div>
				<p>Published by <span className="italics">{selectedBook.publisher}</span></p>
				<p>Published in {selectedBook.datePublished}</p>
				<hr className="details-hr"/>
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
