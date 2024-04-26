import { CanvasAdvantagesListWrapper, CanvasAreaWrapper } from '../styled';
import { Box, Typography } from '@mui/material';
import MobileCarousel from '../../../../MobileCarousel';
import { newCanvasSlideGallery } from '../../../../../constants/galleries/mainPageImages';
import { canvasAdvantages } from '../../../../../constants/advantages';
import BrushTitle from '../../../BrushTitle';
import brushSrc from '../../../../../images/brushes/brush7.svg';
import AdvantagesList from '../../../../AdvantagesList';

const CanvasSlide = () => {
  return (
    <CanvasAreaWrapper>
      <BrushTitle brushSrc={brushSrc} brushWidth="20rem" translateY={-5}>
        <Typography variant="h4">Портрет на холсте</Typography>
      </BrushTitle>

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
