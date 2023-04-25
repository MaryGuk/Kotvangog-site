import "./title-styled.js";
import {
  OilTitleBackground,
  OilTitleWrapper,
  OilPortraitTitle,
  OilTitleBackgroundImage,
} from "./title-styled.js";

const OilTitle = () => {
  return (
    <OilTitleWrapper>
      <div className="oil__title-first">
        <OilPortraitTitle>
          <OilTitleBackground>
            <OilTitleBackgroundImage src="/images/background/Фон заголовок2 — копия.png"></OilTitleBackgroundImage>
          </OilTitleBackground>
        </OilPortraitTitle>
      </div>
    </OilTitleWrapper>
  );
};

export default OilTitle;
