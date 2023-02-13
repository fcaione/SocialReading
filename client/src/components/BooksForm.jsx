import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"

const BooksForm = () => {

    let { id } = useParams()
    const navigate = useNavigate()


    const initialState = {
        title: "",
        author: "",
        img: "",
        publisher: "",
        datePublished: ""
    }

    const [formState, setFormState] = useState(initialState)

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.id]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post(`http://localhost:3001/api/books/add`, formState)
        setFormState(initialState)
        navigate(`/books/`)
    }

  return (
    <div className="form-books">
        <form onSubmit={handleSubmit} className="form-books">
            <label htmlFor="title">title</label>
            <input 
            type="title" 
            name="title" 
            id="title" 
            onChange={handleChange} 
            value={formState.title}
            />
            <label htmlFor="author">author</label>
            <input 
            type="author" 
            name="author" 
            id="author" 
            onChange={handleChange} 
            value={formState.author}
            />
            <label htmlFor="img">img</label>
            <input 
            type="img" 
            name="img" 
            id="img" 
            onChange={handleChange} 
            value={formState.img}
            />
            <label htmlFor="publisher">publisher</label>
            <input 
            type="publisher" 
            name="publisher" 
            id="publisher" 
            onChange={handleChange} 
            value={formState.publisher}
            />
            <label htmlFor="date Published">date Published</label>
            <input 
            type="datePublished" 
            name="datePublished" 
            id="datePublished" 
            onChange={handleChange} 
            value={formState.datePublished}
            />
            <label htmlFor="author">author</label>
            <button type="submit">Add Book</button>
        </form>
    </div>
  )
}

export default BooksForm