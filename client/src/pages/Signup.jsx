import { useState } from "react"
import axios from "axios"

const Home = () => {
	const initialState = {
		name: "",
		email: "",
		password: "",
	}

	const [formState, setFormState] = useState(initialState)

	const handleChange = (e) => {
		setFormState({ ...formState, [e.target.id]: e.target.value })
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		await axios.get(`http://localhost:3001/api/users`, formState)
		setFormState(initialState)
	}

	return (
		<div>
			<form onSubmit={handleSubmit} className="form-create-user">
				<label htmlFor="user">username</label>
				<input 
        		type="text" 
        		name="username" 
        		id="name" 
        		value={formState.name}
        		onChange={handleChange}
        		/>
				<label htmlFor="email">email</label>
				<input 
        		type="email" 
        		name="email" 
        		id="email" 
        		value={formState.email}
        		onChange={handleChange}
        		/>
				<label htmlFor="password">password</label>
				<input 
        		type="password" 
        		name="password" 
        		id="password" 
        		value={formState.password}
        		onChange={handleChange}
        		/>
				<button type="submit">Create User</button>
			</form>
		</div>
	)
}
export default Home
