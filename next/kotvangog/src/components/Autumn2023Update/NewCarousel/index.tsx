import {
  NewCarouselItemDescriptionWrapper,
  NewCarouselItemWrapper,
  NewCarouselWrapper,
} from '../styled';
import Slider from 'react-slick';
import { NextArrow, PrevArrow } from '../../MobileCarousel';
import { Typography } from '@mui/material';
import CloudinaryImage from '../../CloudinaryImage';
import { useDevice } from '@/providers/DeviceProvider';


const NewCarousel = ({ slidesToShow = 1, gallery, width, height }) => {
  const isMobile = useDevice();

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
        {gallery.map(
          ({ description, cloudinaryId, imageSrc_500, imageSrc }, idx) => (
            <NewCarouselItemWrapper key={idx}>
              {cloudinaryId ? (
                <CloudinaryImage
                  cloudinaryId={cloudinaryId}
                  width={width}
                  height={height}
                />
              ) : (
                <img
                  src={(!isMobile && imageSrc_500) || imageSrc}
                  alt=""
                  width="100%"
                  loading="lazy"
                />
              )}
              {description && (
                <NewCarouselItemDescriptionWrapper>
                  <Typography lineHeight={1} variant="subtitle1">
                    {description}
                  </Typography>
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
