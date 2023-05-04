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
                "https://www.dropbox.com/s/c3sdtn4pvmsbshz/g5.jpg?raw=1",
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
