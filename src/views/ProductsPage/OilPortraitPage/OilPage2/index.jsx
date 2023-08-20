import { Box } from "@mui/material";
import {
  OilPortraitWrapper2,
  OilPortraitGeneral2,
  OilContent2,
  OilContentPhoto2,
  OilContentDescription2,
  OilContent22,
  ButtonContainer2,
  FirstButton2,
  SecondButton2,
  ModalMessenger,
  ModalMessengerContent,
  ModalIcons,
  ModalTitle,
  OilButton2,
  OilMobileContent2,
  OilMobileInfoItems,
  OilMobileInfoItemsIcon,
  OilMobileInfoItemsOne,
  OilMobileInfoItemsText,
  OilMobileInfoItemsThree,
  OilMobileInfoItemsTwo,
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

import Modal from "../../../../components/Modal/modal";
import LikenessButtonMobile from "../../../../components/Button/LikenessButton/index.jsx";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";
import OilTitle2 from "../OilTitle2/oil-title2";

const OilPage = () => {
  const { t } = useTranslation();
  const [modalActive, setModalActive] = useState(false);
  return (
    <OilPortraitWrapper2 id="/oil-portrait">
      <OilPortraitGeneral2>
        <OilTitle2 />
        <OilMobileContent2>
          {isMobile ? (
            <OilMobileInfoItems>
              <OilMobileInfoItemsOne>
                <OilMobileInfoItemsIcon>
                  <img
                    width="20px"
                    height="20px"
                    src="/images/background/ellipse2.png"
                  />
                </OilMobileInfoItemsIcon>
                <OilMobileInfoItemsText>
                  Полностью ручная роспись маслом
                </OilMobileInfoItemsText>
              </OilMobileInfoItemsOne>

              <OilMobileInfoItemsTwo>
                <OilMobileInfoItemsIcon>
                  <img
                    width="20px"
                    height="20px"
                    src="/images/background/ellipse2.png"
                  />
                </OilMobileInfoItemsIcon>
                <OilMobileInfoItemsText>
                  Художники с опытом рисования более 10 лет
                </OilMobileInfoItemsText>
              </OilMobileInfoItemsTwo>

              <OilMobileInfoItemsThree>
                <OilMobileInfoItemsIcon>
                  <img
                    width="20px"
                    height="20px"
                    src="/images/background/ellipse2.png"
                  />
                </OilMobileInfoItemsIcon>
                <OilMobileInfoItemsText>
                  Портретное сходство сохраняем на 100%
                </OilMobileInfoItemsText>
              </OilMobileInfoItemsThree>
            </OilMobileInfoItems>
          ) : null}
        </OilMobileContent2>
        <OilContent2>
          <OilContent22>
            <OilContentPhoto2>
              <img
                src={
                  isMobile
                    ? "https://www.dropbox.com/s/6lkuknbtufgnex2/oil%20mobile2.png?raw=1"
                    : "https://www.dropbox.com/scl/fi/iq5j40wn1qfxabp89ma0o/1400_oil-classic.png?rlkey=gafvctnfhn3w6e1t6tzg2ydzc&dl=0&raw=1"
                }
                height={isMobile ? undefined : "100%"}
                width={isMobile ? "100%" :  undefined}
              />
            </OilContentPhoto2>
            {isMobile ? (
              <OilButton2>
                <LikenessButtonMobile />
              </OilButton2>
            ) : null}
            <OilContentDescription2>
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

              <ButtonContainer2>
                <Box>
                  <Link to="/oil-portrait" className="link-oil">
                    <FirstButton2>Смотреть все работы</FirstButton2>
                  </Link>
                </Box>
                <Box>
                  <SecondButton2 onClick={() => setModalActive(true)}>
                    {t("mainPage.button")}
                  </SecondButton2>
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
              </ButtonContainer2>
            </OilContentDescription2>
          </OilContent22>
        </OilContent2>
      </OilPortraitGeneral2>
    </OilPortraitWrapper2>
  );
};

export default OilPage;
