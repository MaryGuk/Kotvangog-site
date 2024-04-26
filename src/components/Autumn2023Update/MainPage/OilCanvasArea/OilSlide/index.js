import {
  AdvantagesListWrapper,
  OilAreaWrapper,
  OilTitleBrushWrapper,
  OilTitleTextWrapper,
  OilTitleWrapper,
  OilSlideCarouselWrapper,
} from '../styled';
import Brush from '../../../../../images/brushes/brush4.svg';
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
          <OilTitleBrushWrapper>
            <img src={Brush} alt="background-brush" />
          </OilTitleBrushWrapper>

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
