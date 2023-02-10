import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const BookCard = (props) => {
	return (
		<div className="book-container">
			<Link to={`/books/${props._id}`}>
				<div className="bookimg-container">
					<img src={props.img} alt="" className="book-img" />
				</div>
				<h4>{props.title}</h4>
			</Link>
		</div>
	);
};
export default BookCard