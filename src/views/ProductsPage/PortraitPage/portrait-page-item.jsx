import { useTranslation } from "react-i18next";
import { ProductPageItemInfoBlock, ArtButtonGapper } from "./styled";
import ArtButton from "../../../components/Button/ArtButton";
import { isMobile } from "react-device-detect";

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
        <div className="beauty-art__title">{portraitTitle}</div>
        <div className="beauty-art__price">{` ${portraitPrice} `}</div>
        {!isMobile && (
          <div className="beauty-art__description">{portraitDescription}</div>
        )}
      </div>

      {!isMobile && (
        <ArtButtonGapper>
          <ArtButton />
        </ArtButtonGapper>
      )}
    </ProductPageItemInfoBlock>
  );
};

export default PortraitPageItem;
