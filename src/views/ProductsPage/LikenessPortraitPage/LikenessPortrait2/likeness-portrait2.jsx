import { Box } from "@mui/material";
import {
  LikenessPortraitWrapper2,
  LikenessPortraitGeneral2,
  LikenessContent2,
  LikenessContent22,
  LikenessContentDescription2,
  LikenessContentPhoto2,
  ButtonContainer,
  FirstButtonLikeness,
  SecondButtonLikeness,
  ModalMessenger,
  ModalMessengerContent,
  ModalIcons,
  ModalTitle,
  LikenessMobileContent22,
  LikenessMobileTextPart12,
  LikenessMobileTextPart22,
  LikenessMobileTextPart32,
  LikenessButton,
  LikenessDesktopInfo2,
  LikenessDesktopInfoIcon2,
  LikenessDesktopInfoOne2,
  LikenessDesktopInfoText2,
  LikenessDesktopInfoTwo2,
  LikenessDesktopInfoThree2,
  LikenessDesktopDescription12,
  LikenessDesktopDescription22,
  LikenessDesktopDescription32,
} from "./styled";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import Modal from "../../../../components/Modal/modal";
import { Link } from "react-router-dom";
import "./likeness-portrait2.css";
import { isMobile } from "react-device-detect";
import LikenessButtonMobile from "../../../../components/Button/LikenessButton";
import LikenessTitle2 from "./LikenessTitle2/likeness-title2";

const LikenessPortrait = () => {
  const { t } = useTranslation();
  const [modalActive, setModalActive] = useState(false);
  return (
    <LikenessPortraitWrapper2>
      <LikenessPortraitGeneral2>
        <LikenessTitle2 />
        <LikenessMobileContent22>
          <LikenessMobileTextPart12>
            Не знаете какой образ подойдет?
          </LikenessMobileTextPart12>
          <LikenessMobileTextPart22>
            Мы бесплатно подберем 7-8 грубых макетов под ваше фото.
          </LikenessMobileTextPart22>
          <LikenessMobileTextPart32>
            Вы сами выберите образ который вам понравится.
          </LikenessMobileTextPart32>
        </LikenessMobileContent22>
        <LikenessContent2>
          <LikenessContent22>
            <LikenessContentPhoto2>
              <img
                src={
                  isMobile
                    ? "/images/в образе моб.png"
                    : "https://www.dropbox.com/s/cho3zbrorta4r0b/%D0%9F%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82%20%D0%B2%20%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%B522.png?raw=1"
                }
                width="100%"
                height="100%"
              />
            </LikenessContentPhoto2>
            <LikenessContentDescription2>
              <LikenessDesktopInfo2>
                <LikenessDesktopInfoOne2>
                  <LikenessDesktopInfoIcon2>
                    <img
                      width="20px"
                      height="20px"
                      src="/images/background/ellipse2.png"
                    />
                  </LikenessDesktopInfoIcon2>
                  <LikenessDesktopInfoText2>
                    Бесплатно подберем 7-8 грубых макетов.
                  </LikenessDesktopInfoText2>
                </LikenessDesktopInfoOne2>

                <LikenessDesktopInfoTwo2>
                  <LikenessDesktopInfoIcon2>
                    <img
                      width="20px"
                      height="20px"
                      src="/images/background/ellipse2.png"
                    />
                  </LikenessDesktopInfoIcon2>
                  <LikenessDesktopInfoText2>
                    Более 600 тематических образов.
                  </LikenessDesktopInfoText2>
                </LikenessDesktopInfoTwo2>

                <LikenessDesktopInfoThree2>
                  <LikenessDesktopInfoIcon2>
                    <img
                      width="20px"
                      height="20px"
                      src="/images/background/ellipse2.png"
                    />
                  </LikenessDesktopInfoIcon2>
                  <LikenessDesktopInfoText2>
                    Портретное сходство сохраняем на 100%
                  </LikenessDesktopInfoText2>
                </LikenessDesktopInfoThree2>
              </LikenessDesktopInfo2>

              <LikenessDesktopDescription12>
                Лучший способ удивить!
              </LikenessDesktopDescription12>
              <LikenessDesktopDescription22>
                Картина - это уже эффектный подарок, а картина в образе - это
                ещё и море улыбок, и добрая, долгая память.
              </LikenessDesktopDescription22>
              <LikenessDesktopDescription32>
                Если вам хочется большего, нежели перенос фото на холст —
                обратите внимание на эти работы.
              </LikenessDesktopDescription32>

              <ButtonContainer>
                <Box>
                  <Link to="/likeness-portrait" className="link-likeness">
                    <SecondButtonLikeness>
                      Смотреть все работы
                    </SecondButtonLikeness>
                  </Link>
                </Box>

                <Box>
                  <FirstButtonLikeness onClick={() => setModalActive(true)}>
                    {t("mainPage.button")}
                  </FirstButtonLikeness>
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
            </LikenessContentDescription2>
            <LikenessButton>
              <LikenessButtonMobile />
            </LikenessButton>
          </LikenessContent22>
        </LikenessContent2>
      </LikenessPortraitGeneral2>
    </LikenessPortraitWrapper2>
  );
};

export default LikenessPortrait;
