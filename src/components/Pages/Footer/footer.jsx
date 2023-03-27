import "./footer.css";
import { NavLink } from "react-router-dom";
import { MainPageItemWrapper } from "../../../views/MainPage/styled";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="footer-wrapper">
      <MainPageItemWrapper>
        <div className="footer-container">
          <div className="footer-content">
            <h1 className="footer-logo"> kotvangog</h1>
            <div className="footer-contacts">
              <span className="address">{t("footer.address")}</span>
              <span className="address-city">{t("footer.address_city")} </span>
              <span className="address-metro">{t("footer.address_metro")}</span>
              <span className="address-street">
                {t("footer.address_street")}
              </span>
              <span className="address-street__more">
                {t("footer.address-street__more")}
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
                    {t("footer.location_image")}
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="footer-content">
            <span className="footer-navbar">
              <NavLink to="/home">{t("footer.footer_navbar1")} </NavLink>
            </span>

            <span className="footer-navbar">
              <NavLink to="/products">{t("footer.footer_navbar2")}</NavLink>
            </span>

            <span className="footer-navbar">
              <NavLink to="/reviews">{t("footer.footer_navbar3")}</NavLink>
            </span>
          </div>

          <div className="footer-content">
            <span className="footer-messenger">
              {t("footer.footer_messenger")}
            </span>
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
