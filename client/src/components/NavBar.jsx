import { NavLink } from "react-router-dom"

const NavBar = () => {
	return (
		<nav className="navbar">
			<NavLink to="/home">
				<h3>Home</h3>
			</NavLink>
			<NavLink to="/mybooks">
				<h3>My Books</h3>
			</NavLink>
		</nav>
	)
}
export default NavBar
