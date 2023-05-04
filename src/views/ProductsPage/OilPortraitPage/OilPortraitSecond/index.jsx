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
                height="465px"
                src="https://www.dropbox.com/s/55t80h5989b8ho8/%D0%A4%D0%BE%D1%82%D0%BE%201%20%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B5%D1%81%D1%81%D0%B8%D0%B2.jpg?raw=1"
                loading="lazy"
                decoding="async"
              />
            </OilPortraitSecondContentImages>
            <OilPortraitSecondContentImages>
              <img
                width="260px"
                height="335px"
                src="https://www.dropbox.com/s/b8ejez6qjwromob/%D0%A4%D0%BE%D1%82%D0%BE%202%20%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B5%D1%81%D1%81%D0%B8%D0%B2.jpg?raw=1"
                loading="lazy"
                decoding="async"
              />
            </OilPortraitSecondContentImages>
            <OilPortraitSecondContentImages>
              <img
                width="270px"
                height="335px"
                src="https://www.dropbox.com/s/ouprrt6c5gboywl/%D0%A4%D0%BE%D1%82%D0%BE%203%20%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B5%D1%81%D1%81%D0%B8%D0%B2%20.jpg?raw=1"
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
