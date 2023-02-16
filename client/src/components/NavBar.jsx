import { NavLink } from "react-router-dom"

const NavBar = () => {
	return (
		<nav className="navbar">
			<NavLink to="/">
				<h3>Home</h3>
			</NavLink>
			<NavLink to="/favorites">
				<h3>Favorites</h3>
			</NavLink>
		</nav>
	)
}
export default NavBar
