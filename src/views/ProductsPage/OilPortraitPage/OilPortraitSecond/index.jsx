import { Box } from "@mui/material";
import {
  OilPortraitSecondGeneral,
  OilPortraitSecondWrapper,
  OilPortraitSecondContent,
  OilPortraitSecondContentImages,
  OilPortraitSecondContentMain,
} from "./styled";
import TitleWaveOil from "./title-wave-oil";

const OilPortraitSecond = () => {
  return (
    <OilPortraitSecondWrapper>
      <OilPortraitSecondGeneral>
        <TitleWaveOil />
        <OilPortraitSecondContentMain>
          <OilPortraitSecondContent>
            <OilPortraitSecondContentImages>
              <img width="350px" height="465px" src="/images/IMG_1.png" />
            </OilPortraitSecondContentImages>
            <OilPortraitSecondContentImages>
              <img width="260px" height="335px" src="/images/IMG_2.png" />
            </OilPortraitSecondContentImages>
            <OilPortraitSecondContentImages>
              <img width="270px" height="335px" src="/images/IMG_3.png" />
            </OilPortraitSecondContentImages>
          </OilPortraitSecondContent>
        </OilPortraitSecondContentMain>
      </OilPortraitSecondGeneral>
    </OilPortraitSecondWrapper>
  );
};

export default OilPortraitSecond;
