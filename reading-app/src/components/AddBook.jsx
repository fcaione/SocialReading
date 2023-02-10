import addLogo from "../images/add.png"
import { Link } from "react-router-dom"

const AddBook = () => {
  return (
    <div className="add-book">
        <Link to={`/books/add`}>
				<div className="bookimg-container">
					<img src={addLogo} alt="" className="add-img" />
				</div>
				<h4>Add a book</h4>
			</Link>
    </div>
  )
}
export default AddBook