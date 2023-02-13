import { NavLink } from "react-router-dom"

const NavBar = () => {
	return (
		<nav className="navbar">
			<NavLink to="/">
				<h3>HOME</h3>
			</NavLink>
			<NavLink to="/books">
				<h3>BOOKS</h3>
			</NavLink>
		</nav>
	)
}
export default NavBar
