import ProductPageItemInfo from "./portrait-page-item";
import "./portrait-page.css";
import BeforeAfterImage from "../../../components/BeforeAfterImage";
import { ProductPageItemMainInfoWrapper } from "./styled";
import ImageCorousel from "../../../components/ImageCarousel";

const ProductPageItem = ({
  portraitTitle,
  portraitPrice,
  portraitDescription,
  srcAfter,
  srcBefore,
  galleryImages,
  reverse,
  imageId,
  setFullImage,
}) => {
  return (
    <div className="beauty-art__page">
      <div className="beauty-art__general">
        <ProductPageItemMainInfoWrapper id={imageId} reverse={reverse}>
          <div>
            <BeforeAfterImage
              height="500px"
              srcAfter={srcAfter}
              srcBefore={srcBefore}
            />
          </div>
          <ProductPageItemInfo
            portraitTitle={portraitTitle}
            portraitPrice={portraitPrice}
            portraitDescription={portraitDescription}
            reverse={reverse}
          />
        </ProductPageItemMainInfoWrapper>
        <ImageCorousel
          setFullImage={setFullImage}
          galleryImages={galleryImages}
          reverse={reverse}
        />
      </div>
    </div>
  );
};

export default ProductPageItem;
