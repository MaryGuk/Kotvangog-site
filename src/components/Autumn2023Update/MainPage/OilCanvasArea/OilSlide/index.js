import {
  AdvantagesListWrapper,
  OilAreaWrapper,
  OilTitleBrashWrapper,
  OilTitleTextWrapper,
  OilTitleWrapper,
} from '../styled';
import Brash from '../../../../../images/brashes/brash4.svg';
import { Box, Typography } from '@mui/material';
import MobileCarousel from '../../../../MobileCarousel';
import { oilSlideFramesGallery } from '../../../../../constants/galleries/mainPageImages';
import AdvantagesList from '../../../../AdvantagesList';
import { oilAdvantages } from '../../../../../constants/advantages';

const OilSlide = () => {
  return (
    <OilAreaWrapper>
      <OilTitleWrapper>
        <OilTitleBrashWrapper>
          <img src={Brash} alt="background-brash" />
        </OilTitleBrashWrapper>

        <OilTitleTextWrapper>
          <Typography variant="subtitle1">Портрет маслом</Typography>
        </OilTitleTextWrapper>
      </OilTitleWrapper>

      <Box width="100vw" display="block">
        <MobileCarousel
          imageList={oilSlideFramesGallery}
          columnCount={1}
          rowCount={1}
          onImageClick={() => true}
        />
      </Box>

      <AdvantagesListWrapper>
        <AdvantagesList advantages={oilAdvantages} />
      </AdvantagesListWrapper>
    </OilAreaWrapper>
  );
};

export default OilSlide;
