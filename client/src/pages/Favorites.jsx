import BookCard from "../components/BookCard"
import { useEffect, useState } from "react"
import axios from "axios"
import "./Books.css"

const Favorites = ({ user }) => {
	const [favorites, setFavorites] = useState([])

	const loadFavorites = async (req, res) => {
		const response = await axios.get("/api/users", {
			params: {
				product: user,
			},
		})
		if (response.data.favorites) setFavorites(response.data.favorites)
	}

	useEffect(() => {
		loadFavorites()
	}, [])

	const favoritesComponent = favorites.length ? (
		<div className="books-container">
			{favorites.map((favorite) => (
				<BookCard key={favorite._id} {...favorite} />
			))}
		</div>
	) : (
		<h1>Go favorite some books!</h1>
	)
	return (
		<>
			{favoritesComponent}
		</>
	)
}
export default Favorites
