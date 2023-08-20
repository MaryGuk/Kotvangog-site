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

const ArtStylesSize = ({ title, printPricePrefix, oilPricePrefix, children, alternateOilPrices, alternatePrintPrices }) => {
  return (
    <ArtStylesSizeWrapper>
      <ArtStylesSizeGeneral>
        <PortraitSizesTitle />
        {children ?? <ArtStylesSizeDescription>
          <ArtSizeTextOneContainer>
            <ArtSizeTextOne>{title}</ArtSizeTextOne>
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
        </ArtStylesSizeDescription>}

        <ArtSizeContainer>
          {[
            {
              imageSrc:
                "https://www.dropbox.com/scl/fi/jsdbj9x2epkkw8mnfgkg9/g1.jpg?rlkey=le0m3lq4z422lup99vpf41cig&dl=0&raw=1",
              imageSize: "30×40",
              printPrice: 1190,
              oilPrice: 5600,
            },
            {
              imageSrc:
                "https://www.dropbox.com/scl/fi/acbrb26b7l31gf8emb8lr/g2.jpg?rlkey=eiyplclufbidbzuyus6nkwa09&dl=0&raw=1",
              imageSize: "40×60",
              printPrice: 1950,
              oilPrice: 8800,
            },
            {
              imageSrc:
                "https://www.dropbox.com/scl/fi/jpvozs7xwfxu3lvcz6tgi/g3-1.jpg?rlkey=a0znwxizwsv0pe3w5kowmfc4b&dl=0&raw=1",
              imageSize: "50×70",
              printPrice: 2700,
              oilPrice: 11900,
            },
            {
              imageSrc:
                "https://www.dropbox.com/scl/fi/n8zekpiy5239nduwlw5dh/g4.jpg?rlkey=yfk7ygmo1zotzifgwqwwbtsc7&dl=0&raw=1",
              imageSize: "60×80",
              printPrice: 3450,
              oilPrice: 13700,
            },
            {
              imageSrc:
                "https://www.dropbox.com/scl/fi/v3igod6v7cctg2idj0ssn/g5.jpg?rlkey=9ffub48amhjfanhwb0cexb4nz&dl=0&raw=1",
              imageSize: "70×90",
              printPrice: 5200,
              oilPrice: 19500,
            },
          ].map(
            (
              { imageSrc, imageSize, printPrice, oilPrice },
              idx,
              arr
            ) =>
              isMobile ? (
                <ArtStylesSizeMobileItem
                  key={idx}
                  imageSrc={imageSrc}
                  imageSize={imageSize}
                  printDescription={alternatePrintPrices?.[idx] ?? printPrice}
                  oilDescription={alternateOilPrices?.[idx] ?? oilPrice}
                  idx={idx}
                  lastItem={idx === arr.length - 1}
                  columnCount={2}
                  printPricePrefix={printPricePrefix}
                  oilPricePrefix={oilPricePrefix}
                />
              ) : (
                <ArtStylesSizeDesktopItem
                  key={idx}
                  imageSrc={imageSrc}
                  imageSize={imageSize}
                  printDescription={alternatePrintPrices?.[idx] ?? printPrice}
                  oilDescription={alternateOilPrices?.[idx] ?? oilPrice}
                  printPricePrefix={printPricePrefix}
                  oilPricePrefix={oilPricePrefix}
                />
              )
          )}
        </ArtSizeContainer>
      </ArtStylesSizeGeneral>
    </ArtStylesSizeWrapper>
  );
};

export default ArtStylesSize;
