import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import "./LoginSignup.css"

const Home = () => {
	const initialState = {
		name: "",
		email: "",
		password: "",
	}

	let navigate = useNavigate()

	const [formState, setFormState] = useState(initialState)

	const handleChange = (e) => {
		setFormState({ ...formState, [e.target.id]: e.target.value })
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		await axios.post(`http://localhost:3001/api/users`, formState)
		setFormState(initialState)
		navigate("/")
	}

	return (
		<div className="grid">
			<div className="library-image">
				<div className="blur"></div>
			</div>
			<div className="log-form-container">
				<h2>Sign up!</h2>
				<form onSubmit={handleSubmit} className="log-form">
					<label className="login-label" htmlFor="user">Username</label>
					<input className="login-input"
						type="text"
						name="username"
						id="name"
						value={formState.name}
						onChange={handleChange}
					/>
					<label className="login-label" htmlFor="email">Email</label>
					<input className="login-input"
						type="email"
						name="email"
						id="email"
						value={formState.email}
						onChange={handleChange}
					/>
					<label className="login-label" htmlFor="password">Password</label>
					<input className="login-input"
						type="password"
						name="password"
						id="password"
						value={formState.password}
						onChange={handleChange}
					/>
					<button className="login-btn"type="submit">Create User</button>
					<hr className="login-hr"/>
					<h2>Already have an account?</h2>
					<button className="login-btn"type="button" onClick={() => navigate("/")}>
						Sign In
					</button>
				</form>
			</div>
		</div>
	)
}
export default Home
