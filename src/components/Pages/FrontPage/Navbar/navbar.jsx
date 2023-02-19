import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo"> kotvangog</div>
      <div className="navbar-container">
        {[
          { path: "/home", title: "Главная" },
          { path: "/products", title: "Продукция" },
          { path: "/reviews", title: "Отзывы" },
        ].map(({ path, title }) => (
          <div className="navbar-item">
            <NavLink to={path}>{title}</NavLink>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
