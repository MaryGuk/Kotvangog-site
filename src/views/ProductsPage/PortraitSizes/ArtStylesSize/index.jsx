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
                "https://www.dropbox.com/scl/fi/66emeo7tqa3w78afqqgyj/g1.jpg?rlkey=57ovsy7x3l09pegdizqej5uxi&raw=1",
              imageSize: "30×40",
              printDescription: "Печать от 1190 руб.",
              oilDescription: "Маслом от 5600 руб.",
            },
            {
              imageSrc:
                "https://www.dropbox.com/scl/fi/rg2fhz21m8rnv2cu45esy/g2.jpg?rlkey=fs4vdqj4rjb0oan8yqjl88ynt&raw=1",
              imageSize: "40×60",
              printDescription: "Печать от 1950 руб.",
              oilDescription: "Маслом от 8800 руб.",
            },
            {
              imageSrc:
                "https://www.dropbox.com/scl/fi/hqqv1wyux6tqd87y7z6ab/g3-1.jpg?rlkey=4i7prdgtqlt9aq9qhtmj6yfvi&raw=1",
              imageSize: "50×70",
              printDescription: "Печать от 2700 руб.",
              oilDescription: "Маслом от 11900 руб.",
            },
            {
              imageSrc:
                "https://www.dropbox.com/scl/fi/175cgekuvoog3oxe5jov6/g4.jpg?rlkey=6wj8yjmwg5y839wmh0xv3mwwl&raw=1",
              imageSize: "60×80",
              printDescription: "Печать от 3450 руб.",
              oilDescription: "Маслом от 13700 руб.",
            },
            {
              imageSrc:
                "https://www.dropbox.com/scl/fi/wpwuzaj8hvdnoy0m6wbpp/g5.jpg?rlkey=tef9ai99q9yv5kjkjejs849jl&raw=1",
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
