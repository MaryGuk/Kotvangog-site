import { Box } from "@mui/material";
import {
  OilPortraitWrapper,
  OilPortraitGeneral,
  OilContent,
  OilContentPhoto,
  OilContentDescription,
  OilContent2,
  FirstText,
  SecondTextPart1,
  SecondTextPart2,
  EllipseСontainer,
  Ellipse,
  ThirdText,
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
              <EllipseСontainer>
                <Ellipse />
                <FirstText>
                  Вы хотите сохранить воспоминания о важных моментах жизни в
                  виде уникальных произведений искусства? Мы поможем вам с этим!
                  Наша команда опытных художников специализируется на создании
                  портретов, написанных маслом по фотографии.
                </FirstText>
              </EllipseСontainer>
              <SecondTextPart1>
                Мы используем только высококачественные материалы! Умеем
                захватывать эмоции и индивидуальность каждого человека.
              </SecondTextPart1>
              <SecondTextPart2>
                Результатом нашей работы являются неповторимые произведения
                искусства, которые будут радовать вас и ваших близких на
                протяжении многих лет.
              </SecondTextPart2>

              <ThirdText>
                Мы работаем с фотографиями любого формата и стиля, и готовы
                предоставить вам консультацию и рекомендации по созданию
                наиболее удачного портрета.
                <span style={{ fontWeight: "700" }}>
                  {" "}
                  Не упустите возможность сохранить важные моменты вашей жизни в
                  искусстве.
                </span>{" "}
                Обратитесь к нам сегодня, и мы с радостью поможем вам создать
                портреты, которые вы будете любить и ценить навсегда!
              </ThirdText>

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
