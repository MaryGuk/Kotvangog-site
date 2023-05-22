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
  setFullImageIdx,
}) => {
  return (
    <div className="beauty-art__page">
      <div className="beauty-art__general">
        <ProductPageItemMainInfoWrapper id={imageId} reverse={reverse}>
          <div>
            {srcBefore ? (
              <BeforeAfterImage
                height="500px"
                loading="lazy"
                decoding="async"
                srcAfter={srcAfter}
                srcBefore={srcBefore}
              />
            ) : (
              <img
                height="500px"
                loading="lazy"
                decoding="async"
                src={srcAfter}
              />
            )}
          </div>
          <ProductPageItemInfo
            portraitTitle={portraitTitle}
            portraitPrice={portraitPrice}
            portraitDescription={portraitDescription}
            reverse={reverse}
          />
        </ProductPageItemMainInfoWrapper>
        <ImageCorousel
          loading="lazy"
          decoding="async"
          setFullImageIdx={setFullImageIdx}
          galleryImages={galleryImages}
          reverse={reverse}
        />
      </div>
    </div>
  );
};

export default ProductPageItem;
