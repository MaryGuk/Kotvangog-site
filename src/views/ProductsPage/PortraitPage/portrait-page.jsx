import ProductPageItemInfo from "./portrait-page-item";
import "./portrait-page.css";
import BeforeAfterImage from "../../../components/BeforeAfterImage";
import {ProductPageImageWrapper, ProductPageItemMainInfoWrapper} from "./styled";
import ImageCorousel from "../../../components/ImageCarousel";
import { isMobile } from "react-device-detect";
import ArtButton from "../../../components/Button/ArtButton";

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
          {/* {isMobile && <ArtButton />} */}
          <ProductPageImageWrapper reverse={reverse}>
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
          </ProductPageImageWrapper>
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
        {isMobile && <ArtButton />}
      </div>
    </div>
  );
};

export default ProductPageItem;
