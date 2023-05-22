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
                src="https://www.dropbox.com/s/53qq4dm1ltqkk9s/1%20%D1%84%D0%BE%D1%82%D0%BE.jpg?raw=1"
                loading="lazy"
                decoding="async"
              />
            </OilPortraitSecondContentImages>
            <OilPortraitSecondContentImages>
              <img
                width="auto"
                height="325px"
                src="https://www.dropbox.com/s/9hczbr3fxia72g0/2%20%D1%84%D0%BE%D1%82%D0%BE.jpg?raw=1"
                loading="lazy"
                decoding="async"
              />
            </OilPortraitSecondContentImages>
            <OilPortraitSecondContentImages>
              <img
                width="auto"
                height="326px"
                src="https://www.dropbox.com/s/45jazoryhehrv7c/3%20%D1%84%D0%BE%D1%82%D0%BE.jpg?raw=1"
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
