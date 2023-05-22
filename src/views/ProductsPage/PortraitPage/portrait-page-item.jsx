import { useTranslation } from "react-i18next";
import { ProductPageItemInfoBlock } from "./styled";
import ArtButton from "../../../components/Button/ArtButton";

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
        <div className="beauty-art__description">{portraitDescription}</div>
      </div>
      <ArtButton />
    </ProductPageItemInfoBlock>
  );
};

export default PortraitPageItem;
