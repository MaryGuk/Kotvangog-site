import { Box } from "@mui/material";
import {
  LikenessPortraitWrapper2,
  LikenessPortraitGeneral2,
  LikenessContent2,
  LikenessContentPhoto2,
  LikenessContentDescription2,
  LikenessContent22,
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
  LikenessButton2,
  LikenessMobileContent2,
  LikenessMobileText2,
  LikenessMobileInfoItems,
  LikenessMobileInfoItemsIcon,
  LikenessMobileInfoItemsOne,
  LikenessMobileInfoItemsText,
  LikenessMobileInfoItemsThree,
  LikenessMobileInfoItemsTwo,
} from "./styled";

import Modal from "../../../../../components/Modal/modal";
import LikenessButtonMobile from "../../../../../components/Button/LikenessButton";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";
import LikenessTitle2 from "../LikenessTitle2/likeness-title2";

const LikenessMobile = () => {
  const { t } = useTranslation();
  const [modalActive, setModalActive] = useState(false);
  return (
    <LikenessPortraitWrapper2 id="/Likeness-portrait">
      <LikenessPortraitGeneral2>
        <LikenessTitle2 />
        <LikenessMobileContent2>
          {isMobile ? (
            <LikenessMobileInfoItems>
              <LikenessMobileInfoItemsOne>
                <LikenessMobileInfoItemsIcon>
                  <img
                    width="20px"
                    height="20px"
                    src="/images/background/ellipse2.png"
                  />
                </LikenessMobileInfoItemsIcon>
                <LikenessMobileInfoItemsText>
                  Бесплатно подберем 7-8 грубых макетов.
                </LikenessMobileInfoItemsText>
              </LikenessMobileInfoItemsOne>

              <LikenessMobileInfoItemsTwo>
                <LikenessMobileInfoItemsIcon>
                  <img
                    width="20px"
                    height="20px"
                    src="/images/background/ellipse2.png"
                  />
                </LikenessMobileInfoItemsIcon>
                <LikenessMobileInfoItemsText>
                  Более 600 тематических образов
                </LikenessMobileInfoItemsText>
              </LikenessMobileInfoItemsTwo>

              <LikenessMobileInfoItemsThree>
                <LikenessMobileInfoItemsIcon>
                  <img
                    width="20px"
                    height="20px"
                    src="/images/background/ellipse2.png"
                  />
                </LikenessMobileInfoItemsIcon>
                <LikenessMobileInfoItemsText>
                  Портретное сходство сохраняем на 100%
                </LikenessMobileInfoItemsText>
              </LikenessMobileInfoItemsThree>
            </LikenessMobileInfoItems>
          ) : null}
        </LikenessMobileContent2>
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
            {isMobile ? (
              <LikenessButton2>
                <LikenessButtonMobile />
              </LikenessButton2>
            ) : null}
            <LikenessContentDescription2>
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
                  <Link to="/Likeness-portrait" className="link-Likeness">
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
            </LikenessContentDescription2>
          </LikenessContent22>
        </LikenessContent2>
      </LikenessPortraitGeneral2>
    </LikenessPortraitWrapper2>
  );
};

export default LikenessMobile;
