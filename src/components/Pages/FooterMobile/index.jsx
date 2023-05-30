import Footer from "../Footer/footer";
import {
  FooterMobileWrapper,
  FooterMobileGeneral,
  FooterMobileTitleWrapper,
  FooterMobileTitle,
  FooterMobileInformation,
  FooterMobileLinkContainer,
  FooterMobileLink,
  FooterMobileWorkSchedule,
  FooterSchedule,
  FooterWorkDays,
  FooterWorkTime,
  FooterMobileMessenger,
  FooterMobileContacts,
  FooterEmail,
  FooterEmailName,
  FooterPhone,
  FooterPhoneNumber,
} from "./styled";
import { Box } from "@mui/material";
import "./footer-mobile.css";
import { NavLink } from "react-router-dom";

const FooterMobile = () => {
  return (
    <FooterMobileWrapper>
      <FooterMobileGeneral>
        <FooterMobileTitleWrapper>
          <FooterMobileTitle>
            Портреты и картины маслом на заказ
          </FooterMobileTitle>
        </FooterMobileTitleWrapper>

        <FooterMobileInformation>
          <FooterMobileLinkContainer>
            <FooterMobileLink>
              <NavLink
                style={{ textDecoration: "none", color: "white" }}
                to="/oil-portrait"
              >
                Портрет маслом
              </NavLink>
            </FooterMobileLink>
            <FooterMobileLink>
              <NavLink
                style={{ textDecoration: "none", color: "white" }}
                to="/products"
              >
                Арт стили
              </NavLink>
            </FooterMobileLink>
            <FooterMobileLink>
              <NavLink
                style={{ textDecoration: "none", color: "white" }}
                to="/likeness-portrait"
              >
                Портрет в образе
              </NavLink>
            </FooterMobileLink>
            <FooterMobileLink>
              <NavLink
                style={{ textDecoration: "none", color: "white" }}
                to="/reviews"
              >
                Отзывы
              </NavLink>
            </FooterMobileLink>
          </FooterMobileLinkContainer>

          <FooterMobileMessenger>
            <Box>
              <a href="https://t.me/kot_vangog" target="_blank">
                <img
                  className="icons-footer__mobile"
                  src="/images/messenger/telegram.svg"
                />
              </a>
            </Box>

            <Box>
              <a
                href="https://api.whatsapp.com/send/?phone=79933600710&text&type=phone_number&app_absent=0"
                target="_blank"
              >
                <img
                  className="icons-footer__mobile"
                  src="/images/messenger/whatsapp.svg"
                />
              </a>
            </Box>

            <Box>
              <a href="https://vk.com/lubov0011" target="_blank">
                <img
                  className="icons-footer__mobile"
                  src="/images/messenger/vk.svg"
                />
              </a>
            </Box>

            <Box>
              <a href="https://www.instagram.com/nen_nenad/" target="_blank">
                <img
                  className="icons-footer__mobile"
                  src="/images/messenger/instagram.svg"
                />
              </a>
            </Box>

            <Box>
              <a href="mailto:mail@kotvangog777com" target="_blank">
                <img
                  className="icons-footer__mobile"
                  src="/images/messenger/email.svg"
                />
              </a>
            </Box>
          </FooterMobileMessenger>

          <FooterMobileWorkSchedule>
            <FooterSchedule> График работы:</FooterSchedule>
            <FooterWorkDays> Пн — Пт:</FooterWorkDays>
            <FooterWorkTime> с 09:00 до 20:00</FooterWorkTime>
            <FooterWorkDays> Сб: с 11;00 до 18:00</FooterWorkDays>
          </FooterMobileWorkSchedule>

          <FooterMobileContacts>
            <FooterEmail>Email:</FooterEmail>
            <FooterEmailName>Kotvangog@gmail.ru</FooterEmailName>
            <FooterPhone>Телефон:</FooterPhone>
            <FooterPhoneNumber>+79933600710</FooterPhoneNumber>
          </FooterMobileContacts>
        </FooterMobileInformation>
      </FooterMobileGeneral>
    </FooterMobileWrapper>
  );
};

export default FooterMobile;
