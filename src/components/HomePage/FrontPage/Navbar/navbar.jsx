import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo"> kotvangog</h1>
      <div className="navbar-item">
        <NavLink to="/home"> Главная </NavLink>
      </div>

      <div className="navbar-item">
        <NavLink to="/products"> Продукция </NavLink>
      </div>

      <div className="navbar-item">
        <NavLink to="/reviews"> Отзывы </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
