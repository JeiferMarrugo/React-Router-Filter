import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar navbar-expand-lg navbar-light bg-light ">
      <NavLink className="btn btn-outline-primary" to="/">
        Inicio
      </NavLink>
      <NavLink className="btn btn-outline-secondary" to="/contacto">
        Contactanos
      </NavLink>
      <NavLink className="btn btn-outline-danger" to="/blog">
        Blog
      </NavLink>
    </div>
  );
};
export default NavBar;
