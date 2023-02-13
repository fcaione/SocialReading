import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Login = () => {

  const initialState = {
		email: "",
		password: ""
	}

	const [formState, setFormState] = useState(initialState)

	const handleChange = (e) => {
		setFormState({ ...formState, [e.target.id]: e.target.value })
	}

  const login = (user) => {
    console.log(user)
    localStorage.setItem("userId", user._id)
  }

	const handleSubmit = async (e) => {
		e.preventDefault()
		const response = await axios.get(`http://localhost:3001/api/users`, {
      params: {
        product: formState
      }
    })
    const user = response.data
    console.log(user)
		setFormState(initialState)
    if (user) login(user)

	}

  return (
    <div>
      <h3>Welcome Back</h3>
      <form onSubmit={handleSubmit} className="form-login">
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
				<button type="submit">Login</button>
			</form>
    </div>
  )
}
export default Login