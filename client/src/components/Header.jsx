import "./Header.css"

const Header = (props) => {

  const text = [
    "For that book you can't put down, tell us about it",
    "Favorites for our favorite user"
  ]

	return (
		<>
			<div className="header-books-container" style={{backgroundImage: `url(${props.image})`}}></div>
			<div className="header--text">
        <h2>{text[props.text]}</h2>
      </div>
		</>
	)
}
export default Header
