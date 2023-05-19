import { Box } from "@mui/material";

import {
  LikenessPortraitWrapper2,
  LikenessPortraitGeneral2,
  LikenessContent2,
  LikenessContent22,
  LikenessContentDescription2,
  EllipseСontainer2,
  EllipseLikeness2,
  FirstTextLikeness2,
  SecondTextLikeness2,
  ThirdTextLikeness2,
  FourthTextLikeness2,
  LikenessContentPhoto2,
  ButtonContainer2,
  FirstButtonLikeness2,
  SecondButtonLikeness2,
  ModalMessenger,
  ModalMessengerContent,
  ModalIcons,
  ModalTitle,
} from "./styled";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../../../../components/Modal/modal";
import { Link } from "react-router-dom";

import "./likeness-portrait2.css";
import "./LikenessTitle2/likeness-title2.jsx";
import LikenessTitle2 from "./LikenessTitle2/likeness-title2.jsx";
import Modal from "../../../../components/Modal/modal";

const LikenessPortrait2 = () => {
  const { t } = useTranslation();
  const [modalActive, setModalActive] = useState(false);
  return (
    <LikenessPortraitWrapper2>
      <LikenessPortraitGeneral2>
        <LikenessTitle2 />
        <LikenessContent2>
          <LikenessContent22>
            <LikenessContentDescription2>
              <EllipseСontainer2>
                <EllipseLikeness2 />
                <FirstTextLikeness2>
                  Хотите иметь в своей коллекции настоящее произведение
                  искусства,которое будет украшением вашего дома или офиса и
                  привлекать восхищённые взгляды гостей? Тогда портрет в образе
                  - это то,что вам нужно!
                </FirstTextLikeness2>
              </EllipseСontainer2>
              <SecondTextLikeness2>
                Мы предлагаем уникальную возможность заказать портрет в образе,
                созданный нашей командой талантливых художников.
              </SecondTextLikeness2>
              <ThirdTextLikeness2>
                Мы не просто вставляем ваше лицо в картину, мы создаём
                уникальный дизайн, сочетающий несколько фотографий в одну
                красивую композицию и затем отрисовываем в единую картину. Мы
                умеем передавать индивидуальность и характер каждого человека на
                портрете, что делает его по-настоящему уникальным и
                запоминающимся.
              </ThirdTextLikeness2>
              <FourthTextLikeness2>
                Не упустите свой шанс стать обладетелем уникального произведения
                искусства! Свяжитесь с нами прямо сейчас, чтобы заказать свой
                собственный портрет в образе и превратить его в настоящую
                гордость своего дома.
              </FourthTextLikeness2>
              <ButtonContainer2>
                <Box>
                  <FirstButtonLikeness2 onClick={() => setModalActive(true)}>
                    {t("mainPage.button")}
                  </FirstButtonLikeness2>
                </Box>

                <Box>
                  <Link to="/likeness-portrait" className="link-likeness">
                    <SecondButtonLikeness2>
                      Смотреть все работы
                    </SecondButtonLikeness2>
                  </Link>
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
            </LikenessContentDescription2>
            <LikenessContentPhoto2>
              <img
                src="/images/Портрет в образе22.png"
                width="100%"
                height="100%"
              />
            </LikenessContentPhoto2>
          </LikenessContent22>
        </LikenessContent2>
      </LikenessPortraitGeneral2>
    </LikenessPortraitWrapper2>
  );
};

export default LikenessPortrait2;
