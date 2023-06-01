import { useTranslation } from "react-i18next";
import { ProductPageItemInfoBlock, ArtButtonWrapper } from "./styled";
import ArtButton from "../../../components/Button/ArtButton";
import { isMobile } from "react-device-detect";
import "./portrait-page.css";

const PortraitPageItem = ({
  portraitTitle,
  portraitPrice,
  portraitDescription,
  reverse,
}) => {
  const { t } = useTranslation();

  return (
    <ProductPageItemInfoBlock reverse={reverse}>
      <div className="beauty-art__information">
        <div>
          <div className="beauty__title-background">
            <img
              className="beauty__title-background-image"
              src="/images/background/арт стили волна.png"
            />
          </div>
        </div>
        <div className="beauty-art__title">{portraitTitle}</div>
        <div className="beauty-art__price">{` ${portraitPrice} `}</div>
        {!isMobile && (
          <div className="beauty-art__description">{portraitDescription}</div>
        )}
      </div>

      {!isMobile && (
        <ArtButtonWrapper>
          <ArtButton />
        </ArtButtonWrapper>
      )}
    </ProductPageItemInfoBlock>
  );
};

export default PortraitPageItem;
