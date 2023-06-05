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
import ArtStylesSizeItem from "./ArtStylesSizeItem";
import PortraitSizesTitle from "./PortraitSizesTitle/PortraitSizesTitle";

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
                "https://www.dropbox.com/s/fb75hkuo00qqzll/g1.jpg?raw=1",
              imageSize: "30×40",
              printDescription: "Печать от 1190 руб.",
              oilDescription: "Маслом от 5600 руб.",
            },
            {
              imageSrc:
                "https://www.dropbox.com/s/myrndkdgjj9ikrl/g2.jpg?raw=1",
              imageSize: "40×60",
              printDescription: "Печать от 1950 руб.",
              oilDescription: "Маслом от 8800 руб.",
            },
            {
              imageSrc:
                "https://www.dropbox.com/s/wvhvu9upq8frshe/g3%281%29.jpg?raw=1",
              imageSize: "50×70",
              printDescription: "Печать от 2700 руб.",
              oilDescription: "Маслом от 11900 руб.",
            },
            {
              imageSrc:
                "https://www.dropbox.com/s/kh57btnnek6vz34/g4.jpg?raw=1",
              imageSize: "60×80",
              printDescription: "Печать от 3450 руб.",
              oilDescription: "Маслом от 13700 руб.",
            },
            {
              imageSrc:
                "https://www.dropbox.com/s/vt3qy5yqyzv1a09/g5.jpg?raw=1",
              imageSize: "70×90",
              printDescription: "Печать от 5200 руб.",
              oilDescription: "Маслом от 19500 руб.",
            },
          ].map(
            (
              { imageSrc, imageSize, printDescription, oilDescription },
              idx,
              arr
            ) => (
              <ArtStylesSizeItem
                key={idx}
                imageSrc={imageSrc}
                imageSize={imageSize}
                printDescription={printDescription}
                oilDescription={oilDescription}
                idx={idx}
                lastItem={idx === arr.length - 1}
                columnCount={2}
              />
            )
          )}
        </ArtSizeContainer>
      </ArtStylesSizeGeneral>
    </ArtStylesSizeWrapper>
  );
};

export default ArtStylesSize;
