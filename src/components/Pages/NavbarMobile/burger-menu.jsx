import { useState } from "react";
import "./burger-menu.css";
import { NavLink } from "react-router-dom";

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseNavbar = () => {
    setIsOpen(false);
  };

  return (
    <div className="burger-menu">
      <div
        className={`burger-menu__icon ${isOpen ? "open" : ""}`}
        onClick={handleMenuClick}
      >
        <span/>
        <span/>
        <span/>
      </div>

      <div className="burger-menu__logo">
        <div className="burger-menu__text"> KOTVANGOG </div>
      </div>
      {isOpen && (
        <div className="burger-menu__content">
          <ul>
            <li>
              <NavLink
                style={{ textDecoration: "none", color: "white" }}
                to="/home"
                onClick={handleCloseNavbar}
              >
                Главная
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={handleCloseNavbar}
                style={{ textDecoration: "none", color: "white" }}
                to="/oil-portrait"
              >
                Портрет маслом
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={handleCloseNavbar}
                style={{ textDecoration: "none", color: "white" }}
                to="/products"
              >
                Арт стили
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={handleCloseNavbar}
                style={{ textDecoration: "none", color: "white" }}
                to="/likeness-portrait"
              >
                Портрет в образе
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={handleCloseNavbar}
                style={{ textDecoration: "none", color: "white" }}
                to="/reviews"
              >
                Отзывы
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default BurgerMenu;
