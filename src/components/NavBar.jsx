import { Link, NavLink } from "react-router";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Handy Hardware!!!</Link>
      <div>

        <NavLink to="/oldItems" >
        Old Tools</NavLink>
        <NavLink to="/newItem">
            New Tools
        </NavLink>
      </div>
    </nav>
  );
};
export default NavBar;
