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
              <img
                width="350px"
                height="auto"
                src="https://www.dropbox.com/s/j9f38of6c7b0kta/%D0%BC%D0%B0%D1%81%D0%BB%D0%BE%201.jpg?raw=1"
                loading="lazy"
                decoding="async"
              />
            </OilPortraitSecondContentImages>
            <OilPortraitSecondContentImages>
              <img
                width="260px"
                height="auto"
                src="https://www.dropbox.com/s/op4t2f2dbjirivz/%D0%BC%D0%B0%D1%81%D0%BB%D0%BE%202.jpg?raw=1"
                loading="lazy"
                decoding="async"
              />
            </OilPortraitSecondContentImages>
            <OilPortraitSecondContentImages>
              <img
                width="260px"
                height="auto"
                src="https://www.dropbox.com/s/u6hbcynxb56s89r/%D0%BC%D0%B0%D1%81%D0%BB%D0%BE%203.jpg?raw=1"
                loading="lazy"
                decoding="async"
              />
            </OilPortraitSecondContentImages>
          </OilPortraitSecondContent>
        </OilPortraitSecondContentMain>
      </OilPortraitSecondGeneral>
    </OilPortraitSecondWrapper>
  );
};

export default OilPortraitSecond;
