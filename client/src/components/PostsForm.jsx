import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"
import "./PostingForms.css"

const PostsForm = (props) => {

    let { id } = useParams()
    const userId = localStorage.getItem("userId")
    const navigate = useNavigate()



    const initialState = {
        title: "",
        content: "",
        book: id,
        user: userId
    }

    const [formState, setFormState] = useState(initialState)

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.id]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post(`http://localhost:3001/api/books/${id}/new`, formState)
        setFormState(initialState)
        navigate(`/books/${id}`)
    }

  return (
    <div className="form-container">
        <form onSubmit={handleSubmit} className="form-post">
            <label htmlFor="title">title</label>
            <input 
            type="title" 
            name="title" 
            id="title" 
            onChange={handleChange} 
            value={formState.title}
            />
            <label htmlFor="review">Review/Post</label>
            <textarea 
            name="review" 
            id="content" 
            cols="30" 
            rows="10" 
            onChange={handleChange} 
            value={formState.content}
            ></textarea>
            <button type="submit">Add post</button>
        </form>
    </div>
  )
}

export default PostsForm