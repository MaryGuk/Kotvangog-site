import {
  MainSlideImageWrapper,
  MainSlideImageCarouselWrapper,
  MainSlideCarouselItemWrapper,
} from './styled';
import {
  // mainSlideFramesGallery,
  mainSlideFramesGalleryCloudinary,
} from '../../../../constants/galleries/mainPageImages';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Box } from '@mui/system';
import { useState } from 'react';
import CloudinaryImage from '../../../CloudinaryImage';

const MainSlideImages = () => {
  const [autoPlay, setAutoPlay] = useState(true);

  return (
    <MainSlideImageCarouselWrapper>
      <Box
        width="100vw"
        position="absolute"
        onTouchStart={() => setAutoPlay(false)}
        onTouchEnd={() => setAutoPlay(true)}
      >
        <Carousel
          autoPlay={autoPlay}
          showIndicators={false}
          showThumbs={false}
          showArrows={false}
          showStatus={false}
          infiniteLoop
          stopOnHover
          width="120vw"
        >
          {/*{mainSlideFramesGallery.map((src, idx) => (*/}
          {/*  <MainSlideCarouselItemWrapper key={idx}>*/}
          {/*    <Box>*/}
          {/*      <MainSlideImageWrapper>*/}
          {/*        <img src={src} alt={'frame'} height="100%" />*/}
          {/*      </MainSlideImageWrapper>*/}
          {/*    </Box>*/}
          {/*  </MainSlideCarouselItemWrapper>*/}
          {/*))}*/}
          {mainSlideFramesGalleryCloudinary.map((id, idx) => (
            <MainSlideCarouselItemWrapper key={idx}>
              <Box>
                <MainSlideImageWrapper>
                  <CloudinaryImage cloudinaryId={id} scaleWidth={1000} />
                </MainSlideImageWrapper>
              </Box>
            </MainSlideCarouselItemWrapper>
          ))}
        </Carousel>
      </Box>
    </MainSlideImageCarouselWrapper>
  );
};

export default MainSlideImages;
