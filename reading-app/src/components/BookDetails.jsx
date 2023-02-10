import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const BookDetails = () => {

let { id } = useParams()

    const [selectedBook, setSelectedBook] = useState({})

    const getBook = async () => {
        const response = await axios.get(`http://localhost:3001/api/books/${id}`)
        setSelectedBook(response.data)
        console.log(response.data)
    }

    useEffect(() => {
        getBook()
    },[id])

  return (
    <div>
        <img src={selectedBook.img} alt="" />
        <h3>{selectedBook.title}</h3>
        <h3>{selectedBook.author}</h3>
        <h3>{selectedBook.publisher}</h3>
        <h3>{selectedBook.datePublished}</h3>
    </div>
  )
}
export default BookDetails