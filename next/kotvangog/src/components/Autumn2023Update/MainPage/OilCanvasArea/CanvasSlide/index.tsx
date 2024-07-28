import { CanvasAdvantagesListWrapper, CanvasAreaWrapper } from '../styled';
import { Box, Typography } from '@mui/material';
import { newCanvasSlideGallery } from '../../../../../constants/galleries/mainPageImages';
import { canvasAdvantages } from '../../../../../constants/advantages';
import BrushTitle from '../../../BrushTitle';
import brushSrc from '../../../../../images/brushes/brush7.svg';
import AdvantagesList from '../../../../AdvantagesList';
import NewCarousel from '../../../NewCarousel';

const CanvasSlide = () => {
  return (
    <CanvasAreaWrapper>
      <BrushTitle brushSrc={brushSrc} brushWidth="20rem" translateY={-5}>
        <Typography variant="h4">Портрет на холсте</Typography>
      </BrushTitle>

      <Box width="100vw" display="block" pt="15px">
        <NewCarousel gallery={newCanvasSlideGallery} width={620} height={760} />
      </Box>

      <CanvasAdvantagesListWrapper>
        <AdvantagesList advantages={canvasAdvantages} />
      </CanvasAdvantagesListWrapper>
    </CanvasAreaWrapper>
  );
};

export default CanvasSlide;
