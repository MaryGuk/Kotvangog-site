import {
  ImageCarouselWrapper,
  ArrowIconWrapper,
  ImageGalleryWrapper,
  ScrollHiddener,
  ImageItemWrapper,
  ImageGalleryInnerWrapper,
} from './styled';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import { IconButton } from '@mui/material';
import { useRef } from 'react';

const ImageCarousel = ({ galleryImages, setFullImageIdx, reverse }) => {
  const carouselRef = useRef(null);

  const handleClick = (positive) => {
    carouselRef.current.scrollBy(positive ? 300 : -300, 0);
  };

  return (
    <ImageCarouselWrapper>
      <ArrowIconWrapper left="10px">
        <IconButton size="large" onClick={() => handleClick(false)}>
          <ArrowBackIosNewIcon />
        </IconButton>
      </ArrowIconWrapper>

      <ArrowIconWrapper right="10px">
        <IconButton size="large" onClick={() => handleClick(true)}>
          <ArrowForwardIosIcon />
        </IconButton>
      </ArrowIconWrapper>

      <ScrollHiddener>
        <ImageGalleryWrapper ref={carouselRef}>
          <ImageGalleryInnerWrapper reverse={reverse}>
            {galleryImages.map(({ previewSrc }, idx) => (
              <ImageItemWrapper onClick={() => setFullImageIdx(idx)} key={idx}>
                <img
                  className="beauty-art__image"
                  src={previewSrc}
                  alt=""
                />
              </ImageItemWrapper>
            ))}
          </ImageGalleryInnerWrapper>
        </ImageGalleryWrapper>
      </ScrollHiddener>
    </ImageCarouselWrapper>
  );
};

export default ImageCarousel;
