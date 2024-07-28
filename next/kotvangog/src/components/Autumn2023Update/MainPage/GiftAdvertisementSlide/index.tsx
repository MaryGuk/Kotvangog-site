import {
  FortuneWheelDescriptionWrapper,
  GiftAdvertisementSlideWrapper,
} from '../../styled';
import BestGiftHeader from './BestGiftHeader';
import { Typography } from '@mui/material';
import NewCarousel from '../../NewCarousel';
import PageContentWrapper from '../../../PageContentWrapper';
import { HoverScalableContent } from '../../../MobileCarousel/styled';
import { eventsSlideGallery } from '@/constants/galleries/mainPageImages';
import { useDevice } from '@/providers/DeviceProvider';

const GiftAdvertisementSlide = () => {
  const isMobile = useDevice();

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
          <NewCarousel gallery={eventsSlideGallery} width={500} height={700} />
        </HoverScalableContent>
      ) : (
        <PageContentWrapper>
          <NewCarousel
            slidesToShow={3}
            gallery={eventsSlideGallery}
            width={500}
            height={700}
          />
        </PageContentWrapper>
      )}
    </GiftAdvertisementSlideWrapper>
  );
};

export default GiftAdvertisementSlide;
