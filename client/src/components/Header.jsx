import "./Header.css"

const Header = (props) => {

  const text = [
    `For that book you can't put down, \n tell us about it!`,
    "Favorites for our favorite user"
  ]

	return (
		<>
			<div className="header-books-container" style={{backgroundImage: `url(${props.image})`}}>
			<div className="blur">
        <h2 className="header--text">{text[props.text]}</h2>
      </div>
      </div>

		</>
	)
}
export default Header
