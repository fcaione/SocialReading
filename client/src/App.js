import logo from "./logo.svg"
import "./App.css"
import { Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react"
import Signup from "./pages/Signup"
import NavBar from "./components/NavBar"
import Books from "./pages/Books"
import BookDetails from "./components/BookDetails"
import PostsForm from "./components/PostsForm"
import BooksForm from "./components/BooksForm"
import Login from "./pages/Login"
import PostsUpdateForm from "./components/PostsUpdateForm"
import Favorites from "./pages/Favorites"
import ScrollToTop from "./components/ScrollToTop"

function App() {
	const [user, setUser] = useState(localStorage.getItem("userId"))
	const [successMessage, setSuccessMessage] = useState()

	useEffect(() => {}, [])

	return (
		<div className="App">
			<ScrollToTop>
				{user && <NavBar setUser={setUser} />}
				<Routes>
					<Route
						path="/"
						element={
							user ? (
								<Books />
							) : (
								<Login
									user={user}
									setUser={setUser}
									successMessage={successMessage}
								/>
							)
						}
					/>
					<Route
						path="/signup"
						element={
							<Signup setSuccessMessage={setSuccessMessage} />
						}
					/>
					<Route path="/books/add" element={<BooksForm />} />
					<Route
						path="/books/:id"
						element={<BookDetails user={user} />}
					/>
					<Route path="/books/:id/new" element={<PostsForm />} />
					<Route
						path="/posts/:id/update"
						element={<PostsUpdateForm />}
					/>
					<Route
						path="/favorites"
						element={<Favorites user={user} />}
					/>
				</Routes>
			</ScrollToTop>
		</div>
	)
}

export default App
