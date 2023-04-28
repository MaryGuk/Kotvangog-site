import { Box } from "@mui/material";
import {
  OilPortraitWrapper,
  OilPortraitGeneral,
  OilPortraitTitle,
  OilContent,
  OilContentPhoto,
  OilContentDescription,
  OilContent2,
  FirstText,
  SecondText,
  EllipseСontainer,
  Ellipse,
  ThirdText,
  ButtonContainer,
  FirstButton,
  SecondButton,
} from "./styled";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import OilTitle from "./OilTitle/OilTitle";
import Modal from "../../../components/Modal/modal";

const OilPortrait = () => {
  const { t } = useTranslation();
  const [modalActive, setModalActive] = useState(false);
  return (
    <OilPortraitWrapper>
      <OilPortraitGeneral>
        <OilTitle />
        <OilContent>
          <OilContent2>
            <OilContentPhoto>
              <img src="/images/oil-classic.png" width="400px" height="600px" />
            </OilContentPhoto>
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
              <SecondText>
                <b>
                  Мы используем только высококачественные материалы! Умеем
                  захватывать эмоции и индивидуальность каждого человека.
                </b>
                Результатом нашей работы являются неповторимые произведения
                искусства, которые будут радовать вас и ваших близких на
                протяжении многих лет.
              </SecondText>
              <ThirdText>
                Мы работаем с фотографиями любого формата и стиля, и готовы
                предоставить вам консультацию и рекомендации по созданию
                наиболее удачного портрета.
                <b>
                  Не упустите возможность сохранить важные моменты вашей жизни в
                  искусстве.
                </b>
                Обратитесь к нам сегодня, и мы с радостью поможем вам создать
                портреты, которые вы будете любить и ценить навсегда!
              </ThirdText>

              <ButtonContainer>
                <Box>
                  <FirstButton>Смотреть все работы</FirstButton>
                </Box>
                <Box>
                  <SecondButton onClick={() => setModalActive(true)}>
                    {t("mainPage.button")}
                  </SecondButton>
                </Box>

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
              </ButtonContainer>
            </OilContentDescription>
          </OilContent2>
        </OilContent>
      </OilPortraitGeneral>
    </OilPortraitWrapper>
  );
};

export default OilPortrait;
