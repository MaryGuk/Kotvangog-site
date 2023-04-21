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
} from "./styled";

const OilPortrait = () => {
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
              {/* <SecondText>
                Мы используем только высококачественные материалы! Умеем
                захватывать эмоции и индивидуальность каждого человека.
                Результатом нашей работы являются неповторимые произведения
                искусства, которые будут радовать вас и ваших близких на
                протяжении многих лет.
              </SecondText> */}
            </OilContentDescription>
          </OilContent2>
        </OilContent>
      </OilPortraitGeneral>
    </OilPortraitWrapper>
  );
};

export default OilPortrait;
