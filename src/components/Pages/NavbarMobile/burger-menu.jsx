import { useState } from "react";
import "./burger-menu.css";
import { NavLink } from "react-router-dom";
import { ClickAwayHandler, NavbarParent } from "./styled";

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
        <span />
        <span />
        <span />
      </div>

      <div className="burger-menu__logo">
          <NavLink
              style={{ textDecoration: "none"}}
              to="/home"
          >
              <div className="burger-menu__text"> KOTVANGOG </div>
          </NavLink>
      </div>
      {isOpen && (
        <NavbarParent>
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
                  style={{ textDecoration: "none", color: "white" }}
                  to="/oil-portrait"
                  onClick={handleCloseNavbar}
                >
                  Портрет маслом
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={{ textDecoration: "none", color: "white" }}
                  to="/products"
                  onClick={handleCloseNavbar}
                >
                  Арт стили
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={{ textDecoration: "none", color: "white" }}
                  to="/likeness-portrait"
                  onClick={handleCloseNavbar}
                >
                  Портрет в образе
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={{ textDecoration: "none", color: "white" }}
                  to="/reviews"
                  onClick={handleCloseNavbar}
                >
                  Отзывы
                </NavLink>
              </li>
            </ul>
          </div>
          <ClickAwayHandler
            onClick={handleCloseNavbar}
            onTouchStart={handleCloseNavbar}
          />
        </NavbarParent>
      )}
    </div>
  );
}

export default BurgerMenu;
