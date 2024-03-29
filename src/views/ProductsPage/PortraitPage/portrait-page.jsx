import ProductPageItemInfo from './portrait-page-item';
import './portrait-page.css';
import BeforeAfterImage from '../../../components/BeforeAfterImage';
import {
  ProductPageImageWrapper,
  ProductPageItemMainInfoWrapper,
  SimpleImageWrapper,
} from './styled';
import ImageCarousel from '../../../components/ImageCarousel';
import { isMobile } from 'react-device-detect';
import ArtButton from '../../../components/Button/ArtButton';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

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
              <SimpleImageWrapper>
                <img
                  height="500px"
                  loading="lazy"
                  decoding="async"
                  src={srcAfter}
                />
              </SimpleImageWrapper>
            )}
          </ProductPageImageWrapper>
          <ProductPageItemInfo
            portraitTitle={t(portraitTitle)}
            portraitPrice={portraitPrice}
            portraitDescription={t(portraitDescription)}
            reverse={reverse}
          />
        </ProductPageItemMainInfoWrapper>
        <ImageCarousel
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
