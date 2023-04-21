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
import { useTranslation } from "react-i18next";

const OilPortrait = () => {
  const { t } = useTranslation();
  return (
    <OilPortraitWrapper>
      <OilPortraitGeneral>
        <OilPortraitTitle>Классический портрет маслом</OilPortraitTitle>
        <OilContent>
          <OilContent2>
            <OilContentPhoto>
              <img src="/images/oil-classic.png" width="300px" height="500px" />
            </OilContentPhoto>
            <OilContentDescription>
              <EllipseСontainer>
                <Ellipse> </Ellipse>
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
                  <SecondButton>{t("mainPage.button")}</SecondButton>
                </Box>

                {/* <div className="main-button">
                  <button
                    className="front-page1__button"
                    onClick={() => setModalActive(true)}
                  >
                    {t("mainPage.button")}
                  </button>
                </div> */}
              </ButtonContainer>
            </OilContentDescription>
          </OilContent2>
        </OilContent>
      </OilPortraitGeneral>
    </OilPortraitWrapper>
  );
};

export default OilPortrait;
