import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"
import { useState, useEffect } from "react"
import "./PostingForms.css"


const PostsUpdateForm = () => {
    let { id } = useParams()

    const navigate = useNavigate()

    const [post, setPost] = useState({})
    const [formState, setFormState] = useState({})

    const getPost = async () => {
        const response = await axios.get(`/api/post/${id}`)
        setPost(response.data)
    }

    useEffect(() => {
        getPost()
    }, [])

    useEffect(() => {
        setFormState({
            title: post.title,
            content: post.content,
            book: post.book,
            user: post._id
        })
    }, [post])

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.id]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.put(`/api/post/${id}`, formState)
        navigate(`/books/${post.book}`)
    }

  return (
    <div className="form-container">
        <form onSubmit={handleSubmit} className="form-post" >
            <label htmlFor="title">title</label>
            <input className="post-input"
            type="title" 
            name="title" 
            id="title" 
            onChange={handleChange} 
            value={formState.title}
            />
            <label htmlFor="review">Review/Post</label>
            <textarea className="post-textarea"
            name="review" 
            id="content" 
            cols="30" 
            rows="10" 
            onChange={handleChange} 
            value={formState.content}
            ></textarea>
            <button className="post-btn"type="submit">Update Post</button>
        </form>
    </div>
  )
}
export default PostsUpdateForm