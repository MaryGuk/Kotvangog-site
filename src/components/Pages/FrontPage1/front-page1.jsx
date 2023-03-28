import "./front-page1.css";
import { experimentalStyled as styled } from "@mui/material";
import { Box } from "@mui/system";
import {
  FrontPage1ImageWrapper,
  FrontPage1InfoWrapper,
  MainPageItemWrapper,
} from "../../../views/MainPage/styled";
import Modal from "../../Modal/modal";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const TitleWrapper = styled(Box)`
  background-repeat: no-repeat;
  background-image: url("/images/background/singleTitleBackground.png");
  background-size: cover;
  padding: 0 10px;
  font-size: 22px;
  font-family: "Palatino Linotype";
  font-weight: 700;
  position: relative;
  top: 30px;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;

  @media (max-width: 1000px) {
    width: min-content;
    flex-direction: column;
    background-image: url("/images/background/doubleTitleBackground.png");
  }
`;

const FrontPage1 = () => {
  const [modalActive, setModalActive] = useState(false);

  const { t } = useTranslation();

  return (
    <MainPageItemWrapper>
      <div className="front-page1">
        <div className="front-page1__general">
          <FrontPage1InfoWrapper className="front-page1__information">
            <div>
              <TitleWrapper>
                <div className="front-page1__title-part">
                  {t("mainPage.title1")}
                </div>

                <div className="front-page1__title-part">
                  {t("mainPage.title2")}
                </div>
              </TitleWrapper>
            </div>

            <div className="main-subtitle">
              <div className="front-page1__subtitle">
                {t("mainPage.subtitle")}
              </div>
            </div>

            <div className="main-text">
              <div className="front-page1__text">
                {t("mainPage.message_text")}
              </div>
            </div>

            <div className="main-message">
              <div className="front-page1__message">
                {t("mainPage.message")}
              </div>
            </div>
            <div className="main-button">
              <button
                className="front-page1__button"
                onClick={() => setModalActive(true)}
              >
                {t("mainPage.button")}
              </button>
            </div>
            <Modal active={modalActive} setActive={setModalActive}>
              <div className="modal__title">
                Выберите мессенджер, в котором вам будет удобно вести диалог
              </div>
              <div className="modal__messenger">
                <div className="modal-messenger__content">
                  <a
                    href="https://api.whatsapp.com/send/?phone=79933600710&text&type=phone_number&app_absent=0"
                    target="blank"
                  >
                    <img
                      className="modal-icons"
                      src="/images/modal-icons/whatsapp.svg"
                    />
                  </a>
                  <a href="https://t.me/kot_vangog" target="blank">
                    <img
                      className="modal-icons"
                      src="/images/modal-icons/telegram.svg"
                    />
                  </a>
                  <a href="https://vk.com/lubov0011" target="blank">
                    <img
                      className="modal-icons"
                      src="/images/modal-icons/vk.svg"
                    />
                  </a>
                </div>
              </div>
            </Modal>
          </FrontPage1InfoWrapper>

          <FrontPage1ImageWrapper>
            <img
              className="main-image1"
              src="/images/Главное фото.jpg"
              alt=""
            />
          </FrontPage1ImageWrapper>
        </div>
      </div>
    </MainPageItemWrapper>
  );
};

export default FrontPage1;
