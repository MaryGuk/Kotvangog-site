import { useState } from 'react';
import ProductPageItem from './PortraitPage/portrait-page';
import Footer from '../../components/Pages/Footer/footer';
import ArtStylesSize from './PortraitSizes/ArtStylesSize';
import { useMemo } from 'react';
import FooterMobile from '../../components/Pages/FooterMobile';
import { isMobile } from 'react-device-detect';
import ContactsSticky from '../../components/Pages/ContactsSticky';
import PreviewPhotoDialog from '../../components/PreviewPhotoDialog';
import { productPageData } from '../../constants/mainConstants';
import { ProductPageWrapper } from './styled';

const ProductsPage = () => {
  const productPageDataArray = Object.values(productPageData);

  const [fullImageSrc, setFullImageSrc] = useState(null);

  const currentGallery = useMemo(
    () =>
      fullImageSrc && productPageDataArray[fullImageSrc.pageIdx]?.galleryImages,
    [fullImageSrc, productPageDataArray]
  );
  const isLastPhoto = useMemo(
    () =>
      currentGallery &&
      fullImageSrc &&
      currentGallery.length <= fullImageSrc.imageIdx + 1,
    [currentGallery, fullImageSrc]
  );
  const isFirstPhoto = useMemo(
    () => currentGallery && fullImageSrc && fullImageSrc.imageIdx === 0,
    [currentGallery, fullImageSrc]
  );

  const handleNextPhoto = () => {
    if (!isLastPhoto && fullImageSrc) {
      setFullImageSrc((prev) =>
        currentGallery.length > prev.imageIdx + 1
          ? { ...prev, imageIdx: prev.imageIdx + 1 }
          : prev
      );
    }
  };

  const handlePrevPhoto = () => {
    if (!isFirstPhoto && fullImageSrc) {
      setFullImageSrc((prev) =>
        prev.imageIdx > 0 ? { ...prev, imageIdx: prev.imageIdx - 1 } : prev
      );
    }
  };

  return (
    <ProductPageWrapper>
      {productPageDataArray.map((props, idx) => (
        <ProductPageItem
          {...props}
          setFullImageIdx={(imageIdx) =>
            setFullImageSrc({ pageIdx: idx, imageIdx })
          }
          key={idx}
        />
      ))}
      {/* <BeautyArt /> */}
      <ArtStylesSize
        title="Печать на холсте и картина маслом"
        printPricePrefix="Печать от"
        oilPricePrefix="Маслом от"
      />
      {isMobile ? <FooterMobile /> : <Footer />}

      <PreviewPhotoDialog
        open={!!fullImageSrc}
        onClose={() => setFullImageSrc(null)}
        showPrevArrow={isFirstPhoto}
        showNextArrow={isLastPhoto}
        handlePrevPhoto={handlePrevPhoto}
        handleNextPhoto={handleNextPhoto}
        src={currentGallery?.[fullImageSrc?.imageIdx]?.fullSrc}
      />

      {isMobile ? <ContactsSticky /> : null}
    </ProductPageWrapper>
  );
};

export default ProductsPage;
