import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import favorite from "../images/favorite.png"
import notFavorite from "../images/notFavorite.png"

const AddFavorite = ({ user }) => {

    const [isFavorite, setIsFavorite] = useState(false)

    let { id } = useParams()

    useEffect(() => {
        checkIfFavorite()
    },[isFavorite])

    const checkIfFavorite = async () => {
        const userObject = await axios.get("/api/users",{
            params: {
              product: user
            }
          }) 
        const favorites = userObject.data.favorites
        setIsFavorite(favorites.some(favorite => favorite._id === id))
    }

    const makeFavorite = async () => {
        await axios.put(`/api/users`, {user, id})
        setIsFavorite(true)
    }

    const unFavorite = async () => {
        await axios.delete(`/api/users`,{
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