import BookCard from "../components/BookCard"
import { useEffect, useState } from "react"
import axios from "axios"
import Header from "../components/Header"
import image from "../images/favoriteBooks.jpg"
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
		<div className="flex-column">
			<Header image={image} text={1}/>
			<div className="books-container">
				{favorites.map((favorite) => (
					<BookCard key={favorite._id} {...favorite} />
				))}
			</div>
		</div>
	) : (
		<div className="flex-column">
		<Header image={image} text={1}/>
		<h1 className="margin-top">Go favorite some books!</h1>
	</div>
	)
	return <>{favoritesComponent}</>
}
export default Favorites
