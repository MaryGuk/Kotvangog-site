import { Box } from "@mui/material";
import {
  OilPortraitSecondGeneral,
  OilPortraitSecondWrapper,
  OilPortraitSecondContent,
  OilPortraitSecondContentImages,
  OilPortraitSecondContentMain,
  OilMobileSecondContent,
  OilMobileSecondText1,
  OilMobileSecondText2,
  OilMobileSecondText3,
} from "./styled";
import TitleWaveOil from "./title-wave-oil";
import { isMobile } from "react-device-detect";

const OilPortraitSecond = () => {
  return (
    <OilPortraitSecondWrapper>
      <OilPortraitSecondGeneral>
        <TitleWaveOil />
        <OilMobileSecondContent>
          <OilMobileSecondText1>
            Мы уделяем особое внимание деталям в портрете, чтобы
          </OilMobileSecondText1>
          <OilMobileSecondText2>
            каждая черта и особенность была
          </OilMobileSecondText2>
          <OilMobileSecondText3>передана в точности.</OilMobileSecondText3>
        </OilMobileSecondContent>
        <OilPortraitSecondContentMain>
          <OilPortraitSecondContent>
            <OilPortraitSecondContentImages>
              <img
                width="${isMobile.any() ? '176px' : '350px'}"
                height="auto"
                src={
                  isMobile
                    ? "https://www.dropbox.com/s/iwenr9p620ukemo/%D0%BF%D0%B5%D1%80%D0%B2%D0%B0%D1%8F%20%D0%BC%D0%BE%D0%B1.jpg?raw=1"
                    : "https://www.dropbox.com/s/53qq4dm1ltqkk9s/1%20%D1%84%D0%BE%D1%82%D0%BE.jpg?raw=1"
                }
                loading="lazy"
                decoding="async"
              />
            </OilPortraitSecondContentImages>
            <OilPortraitSecondContentImages>
              <img
                width="auto"
                height="${isMobile.any() ? '169px' : '325px'}"
                src={
                  isMobile
                    ? "https://www.dropbox.com/s/4qs2pjkrk76qq75/%D0%B2%D1%82%D0%BE%D1%80%D0%B0%D1%8F%20%D0%BC%D0%BE%D0%B1.jpg?raw=1"
                    : "https://www.dropbox.com/s/9hczbr3fxia72g0/2%20%D1%84%D0%BE%D1%82%D0%BE.jpg?raw=1"
                }
                loading="lazy"
                decoding="async"
              />
            </OilPortraitSecondContentImages>

            {!isMobile && (
              <OilPortraitSecondContentImages>
                <img
                  width="auto"
                  height="326px"
                  src="https://www.dropbox.com/s/45jazoryhehrv7c/3%20%D1%84%D0%BE%D1%82%D0%BE.jpg?raw=1"
                  loading="lazy"
                  decoding="async"
                />
              </OilPortraitSecondContentImages>
            )}
          </OilPortraitSecondContent>
        </OilPortraitSecondContentMain>
      </OilPortraitSecondGeneral>
    </OilPortraitSecondWrapper>
  );
};

export default OilPortraitSecond;
