import {
  ArtStylesSizeGeneral,
  ArtStylesSizeWrapper,
  ArtStylesSizeDescription,
  ArtSizeTextOne,
  ArtSizeTextTwo,
  ArtSizeTextOneContainer,
  ArtSizeTextTwoContainer,
  ArtSizeContainer,
  ArtSizeTextOnePart2,
} from "./styled";
import ArtStylesSizeMobileItem from "./ArtStylesSizeMobileItem";
import ArtStylesSizeDesktopItem from "./ArtStylesSizeDesktopItem";
import PortraitSizesTitle from "./PortraitSizesTitle/PortraitSizesTitle";
import { isMobile } from "react-device-detect";

const ArtStylesSize = () => {
  return (
    <ArtStylesSizeWrapper>
      <ArtStylesSizeGeneral>
        <PortraitSizesTitle />
        <ArtStylesSizeDescription>
          <ArtSizeTextOneContainer>
            <ArtSizeTextOne>Печать на холсте и картина маслом</ArtSizeTextOne>
            <ArtSizeTextOnePart2> (100% ручная работа) </ArtSizeTextOnePart2>
          </ArtSizeTextOneContainer>
          <ArtSizeTextTwoContainer>
            <ArtSizeTextTwo>
              Возможно изготовление любых размеров.
              <span
                style={{
                  fontSize: "12px",
                  color: "#414141",
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
              imageSrc:
                "https://www.dropbox.com/scl/fi/jsdbj9x2epkkw8mnfgkg9/g1.jpg?rlkey=le0m3lq4z422lup99vpf41cig&dl=0&raw=1",
              imageSize: "30×40",
              printDescription: "Печать от 1190 руб.",
              oilDescription: "Маслом от 5600 руб.",
            },
            {
              imageSrc:
                "https://www.dropbox.com/scl/fi/acbrb26b7l31gf8emb8lr/g2.jpg?rlkey=eiyplclufbidbzuyus6nkwa09&dl=0&raw=1",
              imageSize: "40×60",
              printDescription: "Печать от 1950 руб.",
              oilDescription: "Маслом от 8800 руб.",
            },
            {
              imageSrc:
                "https://www.dropbox.com/scl/fi/jpvozs7xwfxu3lvcz6tgi/g3-1.jpg?rlkey=a0znwxizwsv0pe3w5kowmfc4b&dl=0&raw=1",
              imageSize: "50×70",
              printDescription: "Печать от 2700 руб.",
              oilDescription: "Маслом от 11900 руб.",
            },
            {
              imageSrc:
                "https://www.dropbox.com/scl/fi/n8zekpiy5239nduwlw5dh/g4.jpg?rlkey=yfk7ygmo1zotzifgwqwwbtsc7&dl=0&raw=1",
              imageSize: "60×80",
              printDescription: "Печать от 3450 руб.",
              oilDescription: "Маслом от 13700 руб.",
            },
            {
              imageSrc:
                "https://www.dropbox.com/scl/fi/v3igod6v7cctg2idj0ssn/g5.jpg?rlkey=9ffub48amhjfanhwb0cexb4nz&dl=0&raw=1",
              imageSize: "70×90",
              printDescription: "Печать от 5200 руб.",
              oilDescription: "Маслом от 19500 руб.",
            },
          ].map(
            (
              { imageSrc, imageSize, printDescription, oilDescription },
              idx,
              arr
            ) =>
              isMobile ? (
                <ArtStylesSizeMobileItem
                  key={idx}
                  imageSrc={imageSrc}
                  imageSize={imageSize}
                  printDescription={printDescription}
                  oilDescription={oilDescription}
                  idx={idx}
                  lastItem={idx === arr.length - 1}
                  columnCount={2}
                />
              ) : (
                <ArtStylesSizeDesktopItem
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
