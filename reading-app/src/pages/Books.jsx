import axios from "axios"
import { useState, useEffect } from "react"
import BookCard from "../components/BookCard"
import AddBook from "../components/AddBook"

const Books = () => {

    const [books, setBooks] = useState([])

    const getBooks = async () => {
        const response = await axios.get("http://localhost:3001/api/books/")
        setBooks(response.data)
    }
 
    useEffect(() => {
        getBooks()
    }, [])

    const listOfBooks = books.map(book => (
        <BookCard
        key = {book._id} 
        {...book}
        />
    ))
    
  return (
    <div className="books-container">
        {listOfBooks}
        <AddBook />
    </div>
  )
}
export default Books