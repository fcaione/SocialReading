const BookCard = (props) => {
  return (
    <div className="book-container">
        <img src={props.img} alt="" className="book-img"/>
        <h4>{props.title}</h4>
    </div>
  )
}
export default BookCard