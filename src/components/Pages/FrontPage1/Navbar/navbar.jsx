import { NavLink } from "react-router-dom";
import "./navbar.css";
import {NavbarWrapper} from "./styled";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo"> kotvangog</div>
      <NavbarWrapper>
        {[
          { path: "/home", title: "Главная" },
          { path: "/products", title: "Продукция" },
          { path: "/reviews", title: "Отзывы" },
        ].map(({ path, title }) => (
          <div className="navbar-item">
            <NavLink to={path}>{title}</NavLink>
          </div>
        ))}
      </NavbarWrapper>
    </nav>
  );
};

export default Navbar;
