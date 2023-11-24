import {
  NewCarouselItemDescriptionWrapper,
  NewCarouselItemWrapper,
  NewCarouselWrapper,
} from '../styled';
import { eventsSlideGallery } from '../../../constants/galeries/mainPageImages';
import Slider from 'react-slick';
import { NextArrow, PrevArrow } from '../../MobileCarousel';
import { isMobile } from 'react-device-detect';
import { Typography } from '@mui/material';

const NewCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <NewCarouselWrapper>
      <Slider {...settings}>
        {eventsSlideGallery.map(
          ({ imageSrc, imageSrc_500, description }, idx) => (
            <NewCarouselItemWrapper key={idx}>
              <img
                src={(!isMobile && imageSrc_500) || imageSrc}
                alt="example image"
                width="100%"
              />
              {description && (
                <NewCarouselItemDescriptionWrapper>
                  <Typography variant="body2">{description}</Typography>
                </NewCarouselItemDescriptionWrapper>
              )}
            </NewCarouselItemWrapper>
          )
        )}
      </Slider>
    </NewCarouselWrapper>
  );
};

export default NewCarousel;
