import './footer.css';
import { NavLink } from 'react-router-dom';
import { MainPageItemWrapper } from '../../../views/MainPage/styled';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="footer-wrapper">
      <MainPageItemWrapper>
        <div className="footer-container">
          <div className="footer-content">
            <h1 className="footer-logo"> kotvangog</h1>
            <div className="footer-contacts">
              <div className="address">
                <Typography variant="body2" textAlign="start">
                  {t('footer.address')}
                </Typography>
              </div>

              <div className="address-city">
                <Typography variant="body2" textAlign="start">
                  {t('footer.address_city')}
                </Typography>
              </div>

              <div className="address-metro">
                <Typography variant="body2" textAlign="start">
                  {t('footer.address_metro')}
                </Typography>
              </div>

              <div className="address-street">
                <Typography variant="body2" textAlign="start">
                  {t('footer.address_street')}
                </Typography>
              </div>

              <div className="address-street__more">
                <Typography variant="body2" textAlign="start">
                  {t('footer.address-street__more')}
                </Typography>
              </div>
              {/* <div className="phone-number"> +7 (993) 360-07-10 </div> */}
              <div className="location-container">
                <a
                  href="https://yandex.by/maps/-/CCUzJVxNXC"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="address-location">
                    <img
                      className="location-image"
                      src="/images/location-icon.png"
                      alt=""
                    />

                    <Typography variant="body2" textAlign="start">
                      {t('footer.location_image')}
                    </Typography>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="footer-content__navbar">
            <div className="footer-navbar">
              <NavLink to="/home">
                <Typography variant="body2" textAlign="start">
                  {t('footer.footer_navbar1')}
                </Typography>
              </NavLink>
            </div>

            <div className="footer-navbar">
              <NavLink to="/products">
                {' '}
                <Typography variant="body2" textAlign="start">
                  {t('footer.footer_navbar2')}
                </Typography>
              </NavLink>
            </div>

            <div className="footer-navbar">
              <NavLink to="/reviews">
                {' '}
                <Typography variant="body2" textAlign="start">
                  {t('footer.footer_navbar3')}
                </Typography>
              </NavLink>
            </div>
          </div>

          <div className="footer-content">
            <div className="footer-messenger">
              <Typography variant="body2" textAlign="start">
                {t('footer.footer-messenger')}
              </Typography>
            </div>
            <div className="footer-icons">
              <a
                href="https://t.me/kot_vangog"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="icons-messenger"
                  src="/images/messenger/telegram.svg"
                  alt=""
                />
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=79933600710&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="icons-messenger"
                  src="/images/messenger/whatsapp.svg"
                  alt=""
                />
              </a>
              <a
                href="https://www.instagram.com/nen_nenad/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="icons-messenger"
                  src="/images/messenger/instagram.svg"
                  alt=""
                />
              </a>
              <a
                href="https://vk.com/lubov0011"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="icons-messenger"
                  src="/images/messenger/vk.svg"
                  alt=""
                />
              </a>
              <a
                href="mailto:mail@kotvangog777com"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="icons-messenger"
                  src="/images/messenger/email.svg"
                  alt=""
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
