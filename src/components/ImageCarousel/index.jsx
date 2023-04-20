import {
  ImageCarouselWrapper,
  ArrowIconWrapper,
  ImageGalleryWrapper,
  ScrollHiddener,
  ImageItemWrapper,
  ImageGalleryInnerWrapper,
} from "./styled";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import { IconButton } from "@mui/material";
import { useRef } from "react";

const ImageCorousel = ({ galleryImages, setFullImage, reverse }) => {
  const carouselRef = useRef(null);

  const handleClick = (positive) => {
    carouselRef.current.scrollBy(positive ? 100 : -100, 0);
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
            {galleryImages.map(({ previewSrc, fullSrc }, idx) => (
              <ImageItemWrapper onClick={() => setFullImage(fullSrc)} key={idx}>
                <img className="beauty-art__image" src={previewSrc} alt="123" />
              </ImageItemWrapper>
            ))}
          </ImageGalleryInnerWrapper>
        </ImageGalleryWrapper>
      </ScrollHiddener>
    </ImageCarouselWrapper>
  );
};

export default ImageCorousel;
