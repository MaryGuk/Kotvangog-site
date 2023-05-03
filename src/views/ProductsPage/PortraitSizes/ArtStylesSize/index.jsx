import { Box } from "@mui/material";
import {
  ArtStylesSizeTitle,
  ArtStylesSizeGeneral,
  ArtStylesSizeWrapper,
  ArtStylesSizeDescription,
  ArtSizeTextOne,
  ArtSizeTextTwo,
  ArtSizeTextOneContainer,
  ArtSizeTextTwoContainer,
  ArtSizeContainer,
} from "./styled";
import ArtStylesSizeItem from "./ArtStylesSizeItem";
import PortraitSizesTitle from "./PortraitSizesTitle/PortraitSizesTitle";

const ArtStylesSize = () => {
  return (
    <ArtStylesSizeWrapper>
      <ArtStylesSizeGeneral>
        <PortraitSizesTitle />

        <ArtStylesSizeDescription>
          <ArtSizeTextOneContainer>
            <ArtSizeTextOne>
              Печать на холсте и картина маслом
              <span style={{ fontWeight: "700", color: "#606060" }}>
                {" "}
                (100% ручная работа){" "}
              </span>
            </ArtSizeTextOne>
          </ArtSizeTextOneContainer>
          <ArtSizeTextTwoContainer>
            <ArtSizeTextTwo>
              Возможно изготовление любых размеров.{" "}
              <span
                style={{
                  fontStyle: "italic",
                  fontSize: "18px",
                  color: "#3f3f3f",
                }}
              >
                Цены указаны без работы дизайнера
              </span>
            </ArtSizeTextTwo>
          </ArtSizeTextTwoContainer>
        </ArtStylesSizeDescription>

        <ArtSizeContainer>
          {[
            {
              imageSrc: "/images/Sizes/size 1.jpg",
              imageSize: "30×40",
              printDescription: "Печать от 1190 руб.",
              oilDescription: "Маслом от 5600 руб.",
            },
            {
              imageSrc: "/images/Sizes/size 2.jpg",
              imageSize: "40×60",
              printDescription: "Печать от 1950 руб.",
              oilDescription: "Маслом от 8800 руб.",
            },
            {
              imageSrc: "/images/Sizes/size 3.jpg",
              imageSize: "50×70",
              printDescription: "Печать от 2700 руб.",
              oilDescription: "Маслом от 11900 руб.",
            },
            {
              imageSrc: "/images/Sizes/size 4.jpg",
              imageSize: "60×80",
              printDescription: "Печать от 3450 руб.",
              oilDescription: "Маслом от 13700 руб.",
            },
            {
              imageSrc: "/images/Sizes/size 5(1).jpg",
              imageSize: "70×90",
              printDescription: "Печать от 5200 руб.",
              oilDescription: "Маслом от 19500 руб.",
            },
          ].map(
            (
              { imageSrc, imageSize, printDescription, oilDescription },
              idx
            ) => (
              <ArtStylesSizeItem
                key={idx}
                imageSrc={imageSrc}
                imageSize={imageSize}
                printDescription={printDescription}
                oilDescription={oilDescription}
              />
            )
          )}
        </ArtSizeContainer>
      </ArtStylesSizeGeneral>
    </ArtStylesSizeWrapper>
  );
};

export default ArtStylesSize;
