import {
  AdvantagesListWrapper,
  OilAreaWrapper,
  OilTitleBrashWrapper,
  OilTitleTextWrapper,
  OilTitleWrapper,
  OilSlideCarouselWrapper,
} from '../styled';
import Brash from '../../../../../images/brashes/brash4.svg';
import { Typography } from '@mui/material';
import MobileCarousel from '../../../../MobileCarousel';
import { oilSlideFramesGallery } from '../../../../../constants/galleries/mainPageImages';
import AdvantagesList from '../../../../AdvantagesList';
import { oilAdvantages } from '../../../../../constants/advantages';

const OilSlide = ({ customTitle }) => {
  return (
    <OilAreaWrapper>
      {customTitle ?? (
        <OilTitleWrapper>
          <OilTitleBrashWrapper>
            <img src={Brash} alt="background-brash" />
          </OilTitleBrashWrapper>

          <OilTitleTextWrapper>
            <Typography variant="subtitle1">Портрет маслом</Typography>
          </OilTitleTextWrapper>
        </OilTitleWrapper>
      )}

      <OilSlideCarouselWrapper>
        <MobileCarousel
          imageList={oilSlideFramesGallery}
          columnCount={1}
          rowCount={1}
          onImageClick={() => true}
          mt="15px"
        />
      </OilSlideCarouselWrapper>

      <AdvantagesListWrapper>
        <AdvantagesList advantages={oilAdvantages} />
      </AdvantagesListWrapper>
    </OilAreaWrapper>
  );
};

export default OilSlide;
