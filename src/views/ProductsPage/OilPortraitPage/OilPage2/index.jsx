import { Box } from "@mui/material";
import {
  OilPortraitWrapper2,
  OilPortraitGeneral2,
  OilContent2,
  OilContentPhoto2,
  OilContentDescription2,
  OilContent22,
  FirstText2,
  SecondTextPart12,
  SecondTextPart22,
  EllipseСontainer2,
  Ellipse2,
  ThirdText2,
  ButtonContainer2,
  FirstButton2,
  SecondButton2,
  ModalMessenger,
  ModalMessengerContent,
  ModalIcons,
  ModalTitle,
  OilButton2,
  OilMobileContent2,
  OilMobileText2,
  OilMobileInfoItems,
  OilMobileInfoItemsIcon,
  OilMobileInfoItemsOne,
  OilMobileInfoItemsText,
  OilMobileInfoItemsThree,
  OilMobileInfoItemsTwo,
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
                    : "https://www.dropbox.com/s/xmq4neuni1sqm62/oil-classic%20%282%29.png?raw=1"
                }
                width="100%"
                height="100%"
              />
            </OilContentPhoto2>
            {isMobile ? (
              <OilButton2>
                <LikenessButtonMobile />
              </OilButton2>
            ) : null}
            <OilContentDescription2>
              <EllipseСontainer2>
                <Ellipse2 />
                <FirstText2>
                  Вы хотите сохранить воспоминания о важных моментах жизни в
                  виде уникальных произведений искусства? Мы поможем вам с этим!
                  Наша команда опытных художников специализируется на создании
                  портретов, написанных маслом по фотографии.
                </FirstText2>
              </EllipseСontainer2>
              <SecondTextPart12>
                Мы используем только высококачественные материалы! Умеем
                захватывать эмоции и индивидуальность каждого человека.
              </SecondTextPart12>
              <SecondTextPart22>
                Результатом нашей работы являются неповторимые произведения
                искусства, которые будут радовать вас и ваших близких на
                протяжении многих лет.
              </SecondTextPart22>

              <ThirdText2>
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
              </ThirdText2>

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
