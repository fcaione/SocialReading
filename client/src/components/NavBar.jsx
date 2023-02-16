import { NavLink } from "react-router-dom"
import icon from "../images/astronomy.png"
import swal from "sweetalert"
import "./NavBar.css"

const NavBar = () => {

	const signOut = () => {
		localStorage.removeItem("userId")
		window.location.reload()
	}

	const handleSignOut = async () => {
		const response = await swal({
			title: "Are you sure you want to sign out",
			type: "warning",
			buttons: true,
			dangerMode: true,
		})

		if (response) signOut()
	}


	return (
		<nav className="navbar">
			<NavLink to="/">
				<div className="home-page">
					<h2>LITERARY LOUNGE</h2>
				</div>
			</NavLink>
			<div className="flex-row">
				<NavLink to="/favorites">
					<div className="favorites-page">
					<h3>Favorites</h3>
					</div>
				</NavLink>
				<NavLink to="/about">
					<div className="about-page">
					<h3>About</h3>
					</div>
				</NavLink>
				<div className="sign-out">
				<button 
				className="sign-out-btn"
				onClick={handleSignOut}
				>
					<h3>Sign Out</h3>
				</button>
				</div>
			</div>
		</nav>
	)
}
export default NavBar
