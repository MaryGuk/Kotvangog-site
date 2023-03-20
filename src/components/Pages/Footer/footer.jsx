import "./footer.css";
import { NavLink } from "react-router-dom";
import { MainPageItemWrapper } from "../../../views/MainPage/styled";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <MainPageItemWrapper>
        <div className="footer-container">
          <div className="footer-content">
            <h1 className="footer-logo"> kotvangog</h1>
            <div className="footer-contacts">
              <span className="address">Адрес</span>
              <span className="address-city"> Город Москва </span>
              <span className="address-metro">М. Волоколамская</span>
              <span className="address-street">Пятницкое шоссе, дом 8</span>
              <span className="address-street__more">
                (400 м от метро Волоколамская)
              </span>
              <span className="phone-number"> +7 (993) 360-07-10 </span>
              <div className="location-container">
                <a href="https://yandex.by/maps/-/CCUzJVxNXC" target="_blank">
                  <span className="address-location">
                    <img
                      className="location-image"
                      src="/images/location-icon.png"
                      alt=""
                    />
                    Открыть в Яндекс Картах
                  </span>
                </a>
              </div>
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
            <span className="footer-messenger"> Мы в соц сетях </span>
            <div className="footer-icons">
              <a href="https://t.me/kot_vangog" target="_blank">
                <img
                  className="icons-messenger"
                  src="/images/messenger/telegram.svg"
                />
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=79933600710&text&type=phone_number&app_absent=0"
                target="_blank"
              >
                <img
                  className="icons-messenger"
                  src="/images/messenger/whatsapp.svg"
                />
              </a>
              <a href="https://www.instagram.com/nen_nenad/" target="_blank">
                <img
                  className="icons-messenger"
                  src="/images/messenger/instagram.svg"
                />
              </a>
              <a href="https://vk.com/lubov0011" target="_blank">
                <img
                  className="icons-messenger"
                  src="/images/messenger/vk.svg"
                />
              </a>
              <a href="mailto:mail@kotvangog777com" target="_blank">
                <img
                  className="icons-messenger"
                  src="/images/messenger/email.svg"
                />
              </a>
            </div>
          </div>
        </div>
      </MainPageItemWrapper>
    </div>
  );
};

export default Footer;
