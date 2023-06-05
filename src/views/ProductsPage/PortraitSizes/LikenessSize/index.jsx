import {
  LikenessSizeWrapper,
  LikenessSizeGeneral,
  LikenessSizeDescription,
  LikenessSizeTextOneContainer,
  LikenessSizeTextOne,
  LikenessSizeTextTwoContainer,
  LikenessSizeTextTwo,
  LikenessSizeContainer,
  LikenessSizeTextOneMore,
  LikenessSizeTextOneMoreContainer,
  LikenessSizeTextTwoMoreContainer,
  LikenessSizeTextTwoMore,
} from "./styled";

import PortraitSizesTitle from "../ArtStylesSize/PortraitSizesTitle/PortraitSizesTitle";
import LikenessStylesSizeMobileItem from "./LikenessStylesSizeMobileItem";
import LikenessStylesSizeDesktopItem from "./LikenessStylesSizeDesktopItem";
import { isMobile } from "react-device-detect";

const LikenessSize = () => {
  return (
    <LikenessSizeWrapper>
      <LikenessSizeGeneral>
        <PortraitSizesTitle />
        <LikenessSizeDescription>
          <LikenessSizeTextOneContainer>
            <LikenessSizeTextOne>
              Стоимость дизайн-услуги фотоколлаж — 1090 руб./одно лицо
            </LikenessSizeTextOne>
          </LikenessSizeTextOneContainer>

          <LikenessSizeTextOneMoreContainer>
            <LikenessSizeTextOneMore>
              + 540 руб. каждое дополнительное лицо на картине.
            </LikenessSizeTextOneMore>
          </LikenessSizeTextOneMoreContainer>

          <LikenessSizeTextTwoContainer>
            <LikenessSizeTextTwo>
              Добавим самых важных для вас людей и домашних животных, любые
              детали, другой фон.
            </LikenessSizeTextTwo>
          </LikenessSizeTextTwoContainer>

          <LikenessSizeTextTwoMoreContainer>
            <LikenessSizeTextTwoMore>
              Дополнительная сложность в дизайн-макете от 540 руб.
            </LikenessSizeTextTwoMore>
          </LikenessSizeTextTwoMoreContainer>
        </LikenessSizeDescription>

        <LikenessSizeContainer>
          {[
            {
              imageSrc:
                "https://www.dropbox.com/s/fb75hkuo00qqzll/g1.jpg?raw=1",
              imageSize: "30×40",
              printDescription: "Печать от 2280 руб.",
              oilDescription: "Маслом от 5600 руб.",
            },
            {
              imageSrc:
                "https://www.dropbox.com/s/myrndkdgjj9ikrl/g2.jpg?raw=1",
              imageSize: "40×60",
              printDescription: "Печать от 3040 руб.",
              oilDescription: "Маслом от 8800 руб.",
            },
            {
              imageSrc:
                "https://www.dropbox.com/s/wvhvu9upq8frshe/g3%281%29.jpg?raw=1",
              imageSize: "50×70",
              printDescription: "Печать от 3790 руб.",
              oilDescription: "Маслом от 11900 руб.",
            },
            {
              imageSrc:
                "https://www.dropbox.com/s/kh57btnnek6vz34/g4.jpg?raw=1",
              imageSize: "60×80",
              printDescription: "Печать от 4540 руб.",
              oilDescription: "Маслом от 13700 руб.",
            },
            {
              imageSrc:
                "https://www.dropbox.com/s/vt3qy5yqyzv1a09/g5.jpg?raw=1",
              imageSize: "70×90",
              printDescription: "Печать от 6290 руб.",
              oilDescription: "Маслом от 19500 руб.",
            },
          ].map(
            (
              { imageSrc, imageSize, printDescription, oilDescription },
              idx,
              arr
            ) =>
              isMobile ? (
                <LikenessStylesSizeMobileItem
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
                <LikenessStylesSizeDesktopItem
                  key={idx}
                  imageSrc={imageSrc}
                  imageSize={imageSize}
                  printDescription={printDescription}
                  oilDescription={oilDescription}
                />
              )
          )}
        </LikenessSizeContainer>
      </LikenessSizeGeneral>
    </LikenessSizeWrapper>
  );
};

export default LikenessSize;
