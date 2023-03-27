import "./portrait-page-item.css";
import { ProductPageItemInfoBlock } from "./styled";

const PortraitPageItem = ({
  portraitTitle,
  portraitPrice,
  portraitDescription,
  reverse,
}) => {
  return (
    <ProductPageItemInfoBlock reverse={reverse}>
      <div className="beauty-art__information">
        <div className="beauty-art__title">{portraitTitle}</div>
        <div className="beauty-art__price">{` ${portraitPrice} `}</div>
        <div className="beauty-art__description">{portraitDescription}</div>
      </div>
      <div>
        <a href="#">
          <button className="beauty-art__button" type="submit">
            Получить консультацию
          </button>
        </a>
      </div>
    </ProductPageItemInfoBlock>
  );
};

export default PortraitPageItem;
