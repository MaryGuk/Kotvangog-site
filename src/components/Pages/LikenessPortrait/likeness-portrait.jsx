import { Box } from "@mui/material";
import LikenessTitle from "./LikenessTitle/LikenessTitle";
import {
  LikenessPortraitWrapper,
  LikenessPortraitGeneral,
  LikenessContent,
  LikenessContent2,
  LikenessContentDescription,
  LikenessContentPhoto,
  ButtonContainer,
  FirstButtonLikeness,
  SecondButtonLikeness,
  ModalMessenger,
  ModalMessengerContent,
  ModalIcons,
  ModalTitle,
  LikenessMobileContent,
  LikenessMobileTextPart1,
  LikenessMobileTextPart2,
  LikenessMobileTextPart3,
  LikenessButton,
  LikenessDesktopInfo,
  LikenessDesktopInfoIcon,
  LikenessDesktopInfoOne,
  LikenessDesktopInfoText,
  LikenessDesktopInfoTwo,
  LikenessDesktopInfoThree,
  LikenessDesktopDescription1,
  LikenessDesktopDescription2,
  LikenessDesktopDescription3,
} from "./styled";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import Modal from "../../../components/Modal/modal";
import { Link } from "react-router-dom";
import "./likeness-portrait.css";
import { isMobile } from "react-device-detect";
import LikenessButtonMobile from "../../Button/LikenessButton";

const LikenessPortrait = () => {
  const { t } = useTranslation();
  const [modalActive, setModalActive] = useState(false);
  return (
    <LikenessPortraitWrapper>
      <LikenessPortraitGeneral>
        <LikenessTitle />
        <LikenessMobileContent>
          <LikenessMobileTextPart1>
            Не знаете какой образ подойдет?
          </LikenessMobileTextPart1>
          <LikenessMobileTextPart2>
            Мы бесплатно подберем 7-8 грубых макетов под ваше фото.
          </LikenessMobileTextPart2>
          <LikenessMobileTextPart3>
            Вы сами выберите образ который вам понравится.
          </LikenessMobileTextPart3>
        </LikenessMobileContent>
        <LikenessContent>
          <LikenessContent2>
            <LikenessContentPhoto>
              <img
                src={
                  isMobile
                    ? "/images/в образе моб.png"
                    : "https://www.dropbox.com/scl/fi/5ms2icxzh7gkbbw1n0kf2/1400_likeness-portrait.png?rlkey=5vvmwjjk1kbos4fjdd3g0dh6g&dl=0&raw=1"
                }
                width="100%"
              />
            </LikenessContentPhoto>
            <LikenessContentDescription>
              <LikenessDesktopInfo>
                <LikenessDesktopInfoOne>
                  <LikenessDesktopInfoIcon>
                    <img
                      width="20px"
                      height="20px"
                      src="/images/background/ellipse2.png"
                    />
                  </LikenessDesktopInfoIcon>
                  <LikenessDesktopInfoText>
                    Бесплатно подберем 7-8 грубых макетов.
                  </LikenessDesktopInfoText>
                </LikenessDesktopInfoOne>

                <LikenessDesktopInfoTwo>
                  <LikenessDesktopInfoIcon>
                    <img
                      width="20px"
                      height="20px"
                      src="/images/background/ellipse2.png"
                    />
                  </LikenessDesktopInfoIcon>
                  <LikenessDesktopInfoText>
                    Более 600 тематических образов.
                  </LikenessDesktopInfoText>
                </LikenessDesktopInfoTwo>

                <LikenessDesktopInfoThree>
                  <LikenessDesktopInfoIcon>
                    <img
                      width="20px"
                      height="20px"
                      src="/images/background/ellipse2.png"
                    />
                  </LikenessDesktopInfoIcon>
                  <LikenessDesktopInfoText>
                    Портретное сходство сохраняем на 100%
                  </LikenessDesktopInfoText>
                </LikenessDesktopInfoThree>
              </LikenessDesktopInfo>

              <LikenessDesktopDescription1>
                Лучший способ удивить!
              </LikenessDesktopDescription1>
              <LikenessDesktopDescription2>
                Картина - это уже эффектный подарок, а картина в образе - это
                ещё и море улыбок, и добрая, долгая память.
              </LikenessDesktopDescription2>
              <LikenessDesktopDescription3>
                Если вам хочется большего, нежели перенос фото на холст —
                обратите внимание на эти работы.
              </LikenessDesktopDescription3>

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
            </LikenessContentDescription>
            <LikenessButton>
              <LikenessButtonMobile />
            </LikenessButton>
          </LikenessContent2>
        </LikenessContent>
      </LikenessPortraitGeneral>
    </LikenessPortraitWrapper>
  );
};

export default LikenessPortrait;
