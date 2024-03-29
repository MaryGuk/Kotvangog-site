import { CanvasAdvantagesListWrapper, CanvasAreaWrapper } from '../styled';
import { Box, Typography } from '@mui/material';
import MobileCarousel from '../../../../MobileCarousel';
import { newCanvasSlideGallery } from '../../../../../constants/galleries/mainPageImages';
import { canvasAdvantages } from '../../../../../constants/advantages';
import BrashTitle from '../../../BrashTitle';
import brashSrc from '../../../../../images/brashes/brash7.svg';
import AdvantagesList from '../../../../AdvantagesList';

const CanvasSlide = () => {
  return (
    <CanvasAreaWrapper>
      <BrashTitle brashSrc={brashSrc} brashWidth="20rem" translateY={-5}>
        <Typography variant="h4">Портрет на холсте</Typography>
      </BrashTitle>

      <Box width="100vw" display="block">
        <MobileCarousel
          imageList={newCanvasSlideGallery}
          columnCount={1}
          rowCount={1}
          onImageClick={() => true}
        />
      </Box>

      <CanvasAdvantagesListWrapper>
        <AdvantagesList advantages={canvasAdvantages} />
      </CanvasAdvantagesListWrapper>
    </CanvasAreaWrapper>
  );
};

export default CanvasSlide;
