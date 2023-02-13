import axios from "axios"
import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import Posts from "./Posts"

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
	}, [id])

	return (
		<>
			<div>
				<img src={selectedBook.img} alt="" />
				<h3>{selectedBook.title}</h3>
				<h3>{selectedBook.author}</h3>
				<h3>{selectedBook.publisher}</h3>
				<h3>{selectedBook.datePublished}</h3>
			</div>
			<div className="posts-container">
				<Posts />
			</div>
		</>
	)
}
export default BookDetails
