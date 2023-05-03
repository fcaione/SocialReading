import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import "./LoginSignup.css"

const Login = (props) => {
	let navigate = useNavigate()
	const initialState = {
		email: "",
		password: "",
	}

	const [formState, setFormState] = useState(initialState)
	const [error, setError] = useState("")


	const handleChange = (e) => {
		setFormState({ ...formState, [e.target.id]: e.target.value })
	}

	const login = (user) => {
		localStorage.setItem("userId", user._id)
		props.setUser(user._id)
		navigate("/")
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			const response = await axios.get(
				`/api/users/certify`,
				{
					params: {
						product: formState,
					},
				}
			)
			const user = response.data
			setFormState(initialState)
			if (user) login(user)
		} catch (e) {
			setError(e.response.data.error)
		}
	}

	const guestLogin = async (e) => {
		const response = await axios.get(
			`/api/users/certify`,
			{
				params: {
					product: {
						email: "guest@gmail.com",
						password: "guest"
					},
				},
			}
		)
		const user = response.data
		setFormState(initialState)
		if (user) login(user)
	}

	return (
		<div className="grid">
			<div className="library-image">
				<div className="blur"></div>
			</div>
			<div className="log-form-container">
				<h1>Login!</h1>
				<form onSubmit={handleSubmit} className="log-form">
					<label className="login-label" htmlFor="email">
						Email
					</label>
					<input
						className="login-input"
						type="email"
						name="email"
						id="email"
						value={formState.email}
						onChange={handleChange}
					/>
					<label className="login-label" htmlFor="password">
						Password
					</label>
					<input
						className="login-input"
						type="password"
						name="password"
						id="password"
						value={formState.password}
						onChange={handleChange}
					/>

					{error && 
					<h5 className="error">{error}</h5>
					}

					{props.successMessage &&
					<h5 className="success">{props.successMessage}</h5>
					}
					<button className="post-btn" type="submit">
						Login
					</button>
					<hr className="login-hr" />
					<h2>Don't have an account?</h2>
					<button
						className="post-btn"
						type="button"
						onClick={() => navigate("/signup")}
					>
						Sign up
					</button>
					<button
						className="post-btn"
						type="button"
						onClick={() => guestLogin()}
					>
						Guest login
					</button>
				</form>
			</div>
		</div>
	)
}
export default Login
