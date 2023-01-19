import "./footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-container">
        <div className="footer-content">
          <h1 className="footer-logo"> kotvangog</h1>
          <div className="footer-contacts">
            <span className="address"> Адрес</span>
            <span className="address-metro">М. Волоколамская</span>
            <span className="address-street">
              Пятницкое шоссе, дом 8 ( 400 м от метро Волоколамская)
            </span>
            <span className="phone-number"> +7 (993) 360-07-10 </span>{" "}
          </div>
        </div>

        <div className="footer-content">
          <span className="footer-navbar">
            <NavLink to="/home"> Главная </NavLink>
          </span>

          <span className="footer-navbar">
            <NavLink to="/products"> Продукция </NavLink>
          </span>

          <span className="footer-navbar">
            <NavLink to="/reviews"> Отзывы </NavLink>
          </span>
        </div>

        <div className="footer-content">
          <span> Мы в соц сетях </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
