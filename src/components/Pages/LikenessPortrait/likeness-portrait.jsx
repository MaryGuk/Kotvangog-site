import { Box } from "@mui/material";
import LikenessTitle from "./LikenessTitle/LikenessTitle";
import {
  LikenessPortraitWrapper,
  LikenessPortraitGeneral,
  LikenessContent,
  LikenessContent2,
  LikenessContentDescription,
  EllipseСontainer,
  EllipseLikeness,
  FirstTextLikeness,
  SecondTextLikeness,
  ThirdTextLikeness,
  FourthTextLikeness,
  LikenessContentPhoto,
  ButtonContainer,
  FirstButtonLikeness,
  SecondButtonLikeness,
  ModalMessenger,
  ModalMessengerContent,
  ModalIcons,
  ModalTitle,
} from "./styled";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import Modal from "../../../components/Modal/modal";
import { Link } from "react-router-dom";

import "./likeness-portrait.css";

const LikenessPortrait = () => {
  const { t } = useTranslation();
  const [modalActive, setModalActive] = useState(false);
  return (
    <LikenessPortraitWrapper>
      <LikenessPortraitGeneral>
        <LikenessTitle />
        <LikenessContent>
          <LikenessContent2>
            <LikenessContentDescription>
              <EllipseСontainer>
                <EllipseLikeness />
                <FirstTextLikeness>
                  Хотите иметь в своей коллекции настоящее произведение
                  искусства,которое будет украшением вашего дома или офиса и
                  привлекать восхищённые взгляды гостей? Тогда портрет в образе
                  - это то,что вам нужно!
                </FirstTextLikeness>
              </EllipseСontainer>
              <SecondTextLikeness>
                Мы предлагаем уникальную возможность заказать портрет в образе,
                созданный нашей командой талантливых художников.
              </SecondTextLikeness>
              <ThirdTextLikeness>
                Мы не просто вставляем ваше лицо в картину, мы создаём
                уникальный дизайн, сочетающий несколько фотографий в одну
                красивую композицию и затем отрисовываем в единую картину. Мы
                умеем передавать индивидуальность и характер каждого человека на
                портрете, что делает его по-настоящему уникальным и
                запоминающимся.
              </ThirdTextLikeness>
              <FourthTextLikeness>
                Не упустите свой шанс стать обладетелем уникального произведения
                искусства! Свяжитесь с нами прямо сейчас, чтобы заказать свой
                собственный портрет в образе и превратить его в настоящую
                гордость своего дома.
              </FourthTextLikeness>
              <ButtonContainer>
                <Box>
                  <FirstButtonLikeness onClick={() => setModalActive(true)}>
                    {t("mainPage.button")}
                  </FirstButtonLikeness>
                </Box>

                <Box>
                  <Link to="/likeness-portrait" className="link-likeness">
                    <SecondButtonLikeness>
                      Смотреть все работы
                    </SecondButtonLikeness>
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
              </ButtonContainer>
            </LikenessContentDescription>
            <LikenessContentPhoto>
              <img src="/images/образ2.png" width="100%" height="100%" />
            </LikenessContentPhoto>
          </LikenessContent2>
        </LikenessContent>
      </LikenessPortraitGeneral>
    </LikenessPortraitWrapper>
  );
};

export default LikenessPortrait;
