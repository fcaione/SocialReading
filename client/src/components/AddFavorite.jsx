import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import favorite from "../images/favorite.png"
import notFavorite from "../images/notFavorite.png"

const AddFavorite = () => {

    const [isFavorite, setIsFavorite] = useState(false)
    const [user, setUser] = useState(localStorage.getItem("userId"))

    let { id } = useParams()

    useEffect(() => {
        checkIfFavorite()
    },[isFavorite])

    const checkIfFavorite = async () => {
        const userObject = await axios.get("http://localhost:3001/api/users",{
            params: {
              product: user
            }
          }) 
        const favorites = userObject.data.favorites
        console.log(favorites)
        setIsFavorite(favorites.some(favorite => favorite._id === id))
    }

    const makeFavorite = async () => {
        await axios.put(`http://localhost:3001/api/users`, {user, id})
        setIsFavorite(true)
    }

    const unFavorite = async () => {
        await axios.delete(`http://localhost:3001/api/users`,{
            params: {
              user: user,
              id: id
            }
        }) 
        setIsFavorite(false)
    }
        
  return (
    <div>
        {isFavorite ?
            <button onClick={unFavorite} className="favorite-btn">
            <img 
            src={favorite} alt="bookmark button" 
            className="favorite-img"
            />
        </button>
        :
        <button onClick={makeFavorite} className="favorite-btn">
            <img 
            src={notFavorite} alt="bookmark button" 
            className="favorite-img"
            />
        </button>
        }
    </div>
  )
}
export default AddFavorite