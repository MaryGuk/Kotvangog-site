import {
  NewCarouselItemDescriptionWrapper,
  NewCarouselItemWrapper,
  NewCarouselWrapper,
} from '../styled';
import Slider from 'react-slick';
import { NextArrow, PrevArrow } from '../../MobileCarousel';
import { isMobile } from 'react-device-detect';
import { Typography } from '@mui/material';

const NewCarousel = ({ slidesToShow = 1, gallery }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <NewCarouselWrapper>
      <Slider {...settings}>
        {gallery.map(({ imageSrc, imageSrc_500, description }, idx) => (
          <NewCarouselItemWrapper key={idx}>
            <img
              src={(!isMobile && imageSrc_500) || imageSrc}
              alt=""
              width="100%"
              loading="lazy"
            />
            {description && (
              <NewCarouselItemDescriptionWrapper>
                <Typography variant="subtitle1">{description}</Typography>
              </NewCarouselItemDescriptionWrapper>
            )}
          </NewCarouselItemWrapper>
        ))}
      </Slider>
    </NewCarouselWrapper>
  );
};

export default NewCarousel;
