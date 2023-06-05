import {
  OilStylesSizeWrapper,
  OilStylesSizeDescription,
  OilStylesSizeGeneral,
  OilSizeTextOneContainer,
  OilSizeTextOne,
  OilSizeTextOneOil2,
  OilSizeTextTwoContainer,
  OilSizeTextTwo,
  OilSizeContainer,
} from "./styled";
import { isMobile } from "react-device-detect";

import OilStylesSizeDesktopItem from "./OilStylesSizeDesktopItem";
import OilStylesSizeMobileItem from "./OilStylesSizeMobileItem";
import PortraitSizesTitle from "../ArtStylesSize/PortraitSizesTitle/PortraitSizesTitle";

const OilSize = () => {
  return (
    <OilStylesSizeWrapper>
      <OilStylesSizeGeneral>
        <PortraitSizesTitle />
        <OilStylesSizeDescription>
          <OilSizeTextOneContainer>
            <OilSizeTextOne>Портрет или картина маслом</OilSizeTextOne>
            <OilSizeTextOneOil2>(100% ручная работа) </OilSizeTextOneOil2>
          </OilSizeTextOneContainer>
          <OilSizeTextTwoContainer>
            <OilSizeTextTwo>
              Возможно изготовление любых размеров.{" "}
              <span
                style={{
                  fontSize: "12px",
                  color: "#414141",
                  fontFamily: "Century Gothic",
                }}
              >
                Цены указаны без работы дизайнера
              </span>
            </OilSizeTextTwo>
          </OilSizeTextTwoContainer>
        </OilStylesSizeDescription>

        <OilSizeContainer>
          {[
            {
              imageSrc:
                "https://www.dropbox.com/s/fb75hkuo00qqzll/g1.jpg?raw=1",
              imageSize: "30×40",
              oilDescription: "От 5600 руб.",
            },
            {
              imageSrc:
                "https://www.dropbox.com/s/myrndkdgjj9ikrl/g2.jpg?raw=1",
              imageSize: "40×60",
              oilDescription: "От 8800 руб.",
            },
            {
              imageSrc:
                "https://www.dropbox.com/s/wvhvu9upq8frshe/g3%281%29.jpg?raw=1",
              imageSize: "50×70",
              oilDescription: "От 11900 руб.",
            },
            {
              imageSrc:
                "https://www.dropbox.com/s/kh57btnnek6vz34/g4.jpg?raw=1",
              imageSize: "60×80",
              oilDescription: "От 13700 руб.",
            },
            {
              imageSrc:
                "https://www.dropbox.com/s/vt3qy5yqyzv1a09/g5.jpg?raw=1",
              imageSize: "70×90",
              oilDescription: "От 19500 руб.",
            },
          ].map(({ imageSrc, imageSize, oilDescription }, idx, arr) =>
            isMobile ? (
              <OilStylesSizeMobileItem
                key={idx}
                imageSrc={imageSrc}
                imageSize={imageSize}
                oilDescription={oilDescription}
                idx={idx}
                lastItem={idx === arr.length - 1}
                columnCount={2}
              />
            ) : (
              <OilStylesSizeDesktopItem
                key={idx}
                imageSrc={imageSrc}
                imageSize={imageSize}
                oilDescription={oilDescription}
              />
            )
          )}
        </OilSizeContainer>
      </OilStylesSizeGeneral>
    </OilStylesSizeWrapper>
  );
};

export default OilSize;
