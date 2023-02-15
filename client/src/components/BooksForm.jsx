import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"
import "./PostingForms.css"

const BooksForm = () => {
	let { id } = useParams()
	const navigate = useNavigate()

	const initialState = {
		title: "",
		author: "",
		img: "",
		publisher: "",
		datePublished: "",
	}

	const [formState, setFormState] = useState(initialState)

	const handleChange = (e) => {
		setFormState({ ...formState, [e.target.id]: e.target.value })
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		await axios.post(`http://localhost:3001/api/books/add`, formState)
		setFormState(initialState)
		navigate(`/books/`)
	}

	return (
		<div className="form-container">
			<form onSubmit={handleSubmit} className="form-post">
				<label htmlFor="title">Book Title</label>
				<input
					className="post-input"
					type="text"
					name="title"
					id="title"
					onChange={handleChange}
					value={formState.title}
				/>
				<label htmlFor="author">Author</label>
				<input
					className="post-input"
					type="text"
					name="author"
					id="author"
					onChange={handleChange}
					value={formState.author}
				/>
				<label htmlFor="description">Synopsis</label>
				<textarea
					className="post-input"
					type="text"
					name="description"
					id="description"
					onChange={handleChange}
					value={formState.author}
				/>
				<label htmlFor="img">Image Address</label>
				<input
					className="post-input"
					type="text"
					name="img"
					id="img"
					onChange={handleChange}
					value={formState.img}
				/>
				<label htmlFor="publisher">Publisher</label>
				<input
					className="post-input"
					type="text"
					name="publisher"
					id="publisher"
					onChange={handleChange}
					value={formState.publisher}
				/>
				<label htmlFor="date Published">Date Published</label>
				<input
					className="post-input"
					type="text"
					name="datePublished"
					id="datePublished"
					onChange={handleChange}
					value={formState.datePublished}
				/>
				<button className="post-btn" type="submit">
					Add Book
				</button>
			</form>
		</div>
	)
}

export default BooksForm
