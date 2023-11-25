import {
  FortuneWheelDescriptionWrapper,
  GiftAdvertisementSlideWrapper,
} from '../../styled';
import BestGiftHeader from './BestGiftHeader';
import { Typography } from '@mui/material';
import { isMobile } from 'react-device-detect';
import NewCarousel from '../../NewCarousel';
import PageContentWrapper from '../../../PageContentWrapper';
import { HoverScalableContent } from '../../../MobileCarousel/styled';

const GiftAdvertisementSlide = () => {
  return (
    <GiftAdvertisementSlideWrapper>
      <FortuneWheelDescriptionWrapper>
        <Typography variant="body2">
          Ищете подарок, который не оставит равнодушных? Хотите услышать «ВАУ»
          вместо банального «Спасибо»?
        </Typography>
      </FortuneWheelDescriptionWrapper>

      <BestGiftHeader />

      {isMobile ? (
        <HoverScalableContent>
          <NewCarousel />
        </HoverScalableContent>
      ) : (
        <PageContentWrapper>
          <NewCarousel slidesToShow={3} />
        </PageContentWrapper>
      )}
    </GiftAdvertisementSlideWrapper>
  );
};

export default GiftAdvertisementSlide;
