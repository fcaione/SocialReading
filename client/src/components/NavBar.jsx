import { NavLink, useNavigate } from "react-router-dom"
import bookIcon from "../images/bookicon.png"
import swal from "sweetalert"
import "./NavBar.css"

const NavBar = ({ setUser }) => {
	let navigate = useNavigate()

	const signOut = () => {
		localStorage.removeItem("userId")
		setUser(null)
		navigate("/")
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
				<div className="flex-row items-center">
					<div className="home-page">
						<h2>Literary Lounge</h2>
					</div>

					<div>
						<img className="book-icon" src={bookIcon} alt="" />
					</div>
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
					<button className="sign-out-btn" onClick={handleSignOut}>
						<h3>Sign Out</h3>
					</button>
				</div>
			</div>
		</nav>
	)
}
export default NavBar
