import { NavLink } from "react-router-dom";

const NavBar = () => {
	return (
		<nav>
			<NavLink to="/">
                HOME
            </NavLink>
            <NavLink to="/books">
                Books
            </NavLink>
		</nav>
	);
};
export default NavBar;
