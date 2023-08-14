import { Box } from "@mui/material";
import {
  OilPortraitWrapper,
  OilPortraitGeneral,
  OilContent,
  OilContentPhoto,
  OilContentDescription,
  OilContent2,
  ButtonContainer,
  FirstButton,
  SecondButton,
  ModalMessenger,
  ModalMessengerContent,
  ModalIcons,
  ModalTitle,
  OilButton,
  OilMobileContent,
  OilMobileText,
  OilDesktopInfo,
  OilDesktopInfoIcon,
  OilDesktopInfoOne,
  OilDesktopInfoText,
  OilDesktopInfoTwo,
  OilDesktopInfoThree,
  OilDesktopDescription1,
  OilDesktopDescription2,
  OilDesktopDescription3,
} from "./styled";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import OilTitle from "./OilTitle/OilTitle";
import Modal from "../../../components/Modal/modal";
import { Link } from "react-router-dom";
import "./oil-portarait.css";
import { isMobile } from "react-device-detect";
import LikenessButtonMobile from "../../Button/LikenessButton";

const OilPortrait = () => {
  const { t } = useTranslation();
  const [modalActive, setModalActive] = useState(false);
  return (
    <OilPortraitWrapper id="/oil-portrait">
      <OilPortraitGeneral>
        <OilTitle />
        <OilMobileContent>
          <OilMobileText>
            Роспись опытным художником - это неповторимые произведения
            искусства, которые будут радовать вас и ваших близких на протяжении
            многих лет.
          </OilMobileText>
        </OilMobileContent>
        <OilContent>
          <OilContent2>
            <OilContentPhoto>
              <img
                src={
                  isMobile
                    ? "https://www.dropbox.com/s/6lkuknbtufgnex2/oil%20mobile2.png?raw=1"
                    : "https://www.dropbox.com/s/xmq4neuni1sqm62/oil-classic%20%282%29.png?raw=1"
                }
                width="100%"
                height="100%"
              />
            </OilContentPhoto>
            <OilButton>
              <LikenessButtonMobile />
            </OilButton>
            <OilContentDescription>
              <OilDesktopInfo>
                <OilDesktopInfoOne>
                  <OilDesktopInfoIcon>
                    <img
                      width="20px"
                      height="20px"
                      src="/images/background/ellipse2.png"
                    />
                  </OilDesktopInfoIcon>
                  <OilDesktopInfoText>
                    Полностью ручная роспись маслом
                  </OilDesktopInfoText>
                </OilDesktopInfoOne>

                <OilDesktopInfoTwo>
                  <OilDesktopInfoIcon>
                    <img
                      width="20px"
                      height="20px"
                      src="/images/background/ellipse2.png"
                    />
                  </OilDesktopInfoIcon>
                  <OilDesktopInfoText>
                    Художники с опытом рисования более 10 лет
                  </OilDesktopInfoText>
                </OilDesktopInfoTwo>

                <OilDesktopInfoThree>
                  <OilDesktopInfoIcon>
                    <img
                      width="20px"
                      height="20px"
                      src="/images/background/ellipse2.png"
                    />
                  </OilDesktopInfoIcon>
                  <OilDesktopInfoText>
                    Портретное сходство сохраняем на 100%
                  </OilDesktopInfoText>
                </OilDesktopInfoThree>
              </OilDesktopInfo>
              <OilDesktopDescription1>
                Мы работаем с фотографиями любого формата и стиля, и готовы
                предоставить вам консультацию по созданию лучшего портрета.
              </OilDesktopDescription1>
              <OilDesktopDescription2>
                Не упустите возможность сохранить важные моменты вашей жизни в
                искусстве.
              </OilDesktopDescription2>
              <OilDesktopDescription3>
                Обратитесь к нам сегодня, и мы с радостью поможем вам создать
                портреты, которые вы будете любить и ценить навсегда!
              </OilDesktopDescription3>

              <ButtonContainer>
                <Box>
                  <Link to="/oil-portrait" className="link-oil">
                    <FirstButton>Смотреть все работы</FirstButton>
                  </Link>
                </Box>
                <Box>
                  <SecondButton onClick={() => setModalActive(true)}>
                    {t("mainPage.button")}
                  </SecondButton>
                </Box>

                <Modal active={modalActive} setActive={setModalActive}>
                  <ModalTitle>
                    Выберите мессенджер, в котором вам будет удобно вести диалог
                  </ModalTitle>
                  <ModalMessenger>
                    <ModalMessengerContent>
                      <a
                        href="https://api.whatsapp.com/send/?phone=79933600710&text&type=phone_number&app_absent=0"
                        target="blank"
                      >
                        <ModalIcons>
                          <img
                            width="40px"
                            height="40px"
                            src="/images/modal-icons/whatsapp.svg"
                          />
                        </ModalIcons>
                      </a>
                      <a href="https://t.me/kot_vangog" target="blank">
                        <ModalIcons>
                          <img
                            width="40px"
                            height="40px"
                            src="/images/modal-icons/telegram.svg"
                          />
                        </ModalIcons>
                      </a>
                      <a href="https://vk.com/lubov0011" target="blank">
                        <ModalIcons>
                          <img
                            width="40px"
                            height="40px"
                            src="/images/modal-icons/vk.svg"
                          />
                        </ModalIcons>
                      </a>
                    </ModalMessengerContent>
                  </ModalMessenger>
                </Modal>
              </ButtonContainer>
            </OilContentDescription>
          </OilContent2>
        </OilContent>
      </OilPortraitGeneral>
    </OilPortraitWrapper>
  );
};

export default OilPortrait;
