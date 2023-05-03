import OilSizeItem from "./OilSizeItem";
import OilSizeTitle from "./OilSizeTitle/OilSizeTitle";

import {
  OilSizeWrapper,
  OilSizeGeneral,
  OilSizeDescription,
  OilSizeTextOneContainer,
  OilSizeTextOne,
  OilSizeTextTwoContainer,
  OilSizeTextTwo,
  OilSizeContainer,
} from "./styled";

const OilSize = () => {
  return (
    <OilSizeWrapper>
      <OilSizeGeneral>
        <OilSizeTitle />
        <OilSizeDescription>
          <OilSizeTextOneContainer>
            <OilSizeTextOne>
              Портрет или картина маслом
              <span style={{ fontWeight: "700", color: "#606060" }}>
                {" "}
                (100% ручная работа){" "}
              </span>
            </OilSizeTextOne>
          </OilSizeTextOneContainer>
          <OilSizeTextTwoContainer>
            <OilSizeTextTwo>
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
            </OilSizeTextTwo>
          </OilSizeTextTwoContainer>
        </OilSizeDescription>

        <OilSizeContainer>
          {[
            {
              imageSrc: "/images/Sizes/size 1.jpg",
              imageSize: "30×40",
              oilDescription: "От 5600 руб.",
            },
            {
              imageSrc: "/images/Sizes/size 2.jpg",
              imageSize: "40×60",
              oilDescription: "От 8800 руб.",
            },
            {
              imageSrc: "/images/Sizes/size 3.jpg",
              imageSize: "50×70",
              oilDescription: "От 11900 руб.",
            },
            {
              imageSrc: "/images/Sizes/size 4.jpg",
              imageSize: "60×80",
              oilDescription: "От 13700 руб.",
            },
            {
              imageSrc: "/images/Sizes/size 5(1).jpg",
              imageSize: "70×90",
              oilDescription: "От 19500 руб.",
            },
          ].map(({ imageSrc, imageSize, oilDescription }, idx) => (
            <OilSizeItem
              key={idx}
              imageSrc={imageSrc}
              imageSize={imageSize}
              oilDescription={oilDescription}
            />
          ))}
        </OilSizeContainer>
      </OilSizeGeneral>
    </OilSizeWrapper>
  );
};

export default OilSize;
