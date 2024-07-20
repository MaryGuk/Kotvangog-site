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
import { oilSlideFramesGallery } from '../../../../../constants/galleries/mainPageImages';
import AdvantagesList from '../../../../AdvantagesList';
import { oilAdvantages } from '../../../../../constants/advantages';
import NewCarousel from '../../../NewCarousel';

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
        <NewCarousel gallery={oilSlideFramesGallery} width={600} height={760} />
      </OilSlideCarouselWrapper>

      <AdvantagesListWrapper>
        <AdvantagesList advantages={oilAdvantages} />
      </AdvantagesListWrapper>
    </OilAreaWrapper>
  );
};

export default OilSlide;
