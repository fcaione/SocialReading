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
        await axios.post(`/api/books/${id}/new`, formState)
        setFormState(initialState)
        navigate(`/books/${id}`)
    }

  return (
    <div className="form-container">
        <form onSubmit={handleSubmit} className="form-post">
            <label htmlFor="Post Title">Post Title</label>
            <input className="post-input" 
            type="title" 
            name="title" 
            id="title" 
            onChange={handleChange} 
            value={formState.title}
            />
            <label htmlFor="content">Content</label>
            <textarea className="post-textarea"
            name="review" 
            id="content" 
            cols="30" 
            rows="10" 
            onChange={handleChange} 
            value={formState.content}
            ></textarea>
            <button className="post-btn"type="submit">Add post</button>
        </form>
    </div>
  )
}

export default PostsForm