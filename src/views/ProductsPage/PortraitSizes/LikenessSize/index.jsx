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
                "https://www.dropbox.com/scl/fi/66emeo7tqa3w78afqqgyj/g1.jpg?rlkey=57ovsy7x3l09pegdizqej5uxi&raw=1",
              imageSize: "30×40",
              printDescription: "Печать от 2280 руб.",
              oilDescription: "Маслом от 5600 руб.",
            },
            {
              imageSrc:
                "https://www.dropbox.com/scl/fi/rg2fhz21m8rnv2cu45esy/g2.jpg?rlkey=fs4vdqj4rjb0oan8yqjl88ynt&raw=1",
              imageSize: "40×60",
              printDescription: "Печать от 3040 руб.",
              oilDescription: "Маслом от 8800 руб.",
            },
            {
              imageSrc:
                "https://www.dropbox.com/scl/fi/hqqv1wyux6tqd87y7z6ab/g3-1.jpg?rlkey=4i7prdgtqlt9aq9qhtmj6yfvi&raw=1",
              imageSize: "50×70",
              printDescription: "Печать от 3790 руб.",
              oilDescription: "Маслом от 11900 руб.",
            },
            {
              imageSrc:
                "https://www.dropbox.com/scl/fi/175cgekuvoog3oxe5jov6/g4.jpg?rlkey=6wj8yjmwg5y839wmh0xv3mwwl&raw=1",
              imageSize: "60×80",
              printDescription: "Печать от 4540 руб.",
              oilDescription: "Маслом от 13700 руб.",
            },
            {
              imageSrc:
                "https://www.dropbox.com/scl/fi/wpwuzaj8hvdnoy0m6wbpp/g5.jpg?rlkey=tef9ai99q9yv5kjkjejs849jl&raw=1",
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
