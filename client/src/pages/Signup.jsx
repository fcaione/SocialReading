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
			<div className="form">
				<h2>Sign up!</h2>
				<form onSubmit={handleSubmit} >
					<label htmlFor="user">Username</label>
					<input
						type="text"
						name="username"
						id="name"
						value={formState.name}
						onChange={handleChange}
					/>
					<label htmlFor="email">Email</label>
					<input
						type="email"
						name="email"
						id="email"
						value={formState.email}
						onChange={handleChange}
					/>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						name="password"
						id="password"
						value={formState.password}
						onChange={handleChange}
					/>
					<button type="submit">Create User</button>
					<hr />
					<h2>Already have an account?</h2>
					<button type="button" onClick={() => navigate("/")}>
						Sign In
					</button>
				</form>
			</div>
		</div>
	)
}
export default Home
