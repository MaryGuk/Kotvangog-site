import {ProductPageItemInfoBlock, ArtButtonWrapper, BeautyArtInformation } from "./styled";
import ArtButton from "../../../components/Button/ArtButton";
import { isMobile } from "react-device-detect";
import "./portrait-page.css";

const PortraitPageItem = ({
  portraitTitle,
  portraitPrice,
  portraitDescription,
  reverse,
}) => {
  return (
    <ProductPageItemInfoBlock reverse={reverse}>
      <BeautyArtInformation reverse={reverse}>
        <div>
          <div className="beauty__title-background">
            <img
              className="beauty__title-background-image"
              src="/images/background/арт стили волна.png"
              alt=""
            />
          </div>
        </div>
        <div className="beauty-art__title">{portraitTitle}</div>
        <div className="beauty-art__price">{` ${portraitPrice} `}</div>
        {!isMobile && (
          <div className="beauty-art__description">{portraitDescription}</div>
        )}
      </BeautyArtInformation>

      {!isMobile && (
        <ArtButtonWrapper>
          <ArtButton />
        </ArtButtonWrapper>
      )}
    </ProductPageItemInfoBlock>
  );
};

export default PortraitPageItem;
