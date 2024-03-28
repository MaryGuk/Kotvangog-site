import { OilCanvasDesktopGridWrapper } from '../styled';
import PrimaryBlock from './PrimaryBlock';
import SecondaryBlock from './SecondaryBlock';
import YellowBrashSrc from '../../../../../images/brashes/brash6.svg';
import PurpleBrashSrc from '../../../../../images/brashes/brash7.svg';
import {
  newCanvasSlideGallery,
  oilSlideFramesGallery,
} from '../../../../../constants/galleries/mainPageImages';
import {
  canvasAdvantages,
  oilAdvantages,
} from '../../../../../constants/advantages';
import ButtonBlock from './ButtonBlock';
import BrashTitle from '../../../BrashTitle';
import { Box, Typography } from '@mui/material';

const OilCanvasDesktopGrid = () => {
  return (
    <OilCanvasDesktopGridWrapper>
      <Box
        gridRow="1"
        gridColumn="1"
        margin="0 0 10px"
      >
        <BrashTitle
          brashSrc={PurpleBrashSrc}
          brashWidth="17rem"
          translateY={15}
        >
          <Typography variant="subtitle1">портрет на холсте</Typography>
        </BrashTitle>
      </Box>
      <PrimaryBlock
        gridRow="2 / 5"
        gridColumn="1"
        imagesGallery={newCanvasSlideGallery}
      />
      <ButtonBlock gridRow="5" gridColumn="1" />
      <SecondaryBlock
        gridRow="2"
        gridColumn="2 / 4"
        advantages={canvasAdvantages}
        maxWidth="28rem"
      />
      <Box
        gridRow="3"
        gridColumn="3"
        margin="0 0 10px"
      >
        <BrashTitle
          brashSrc={YellowBrashSrc}
          brashWidth="23rem"
          translateY={15}
          translateX={10}
        >
          <Typography variant="subtitle1">портрет на холсте</Typography>
        </BrashTitle>
      </Box>
      <PrimaryBlock
        gridRow="4 / 7"
        gridColumn="3"
        title="портрет маслом"
        imagesGallery={oilSlideFramesGallery}
        justifyContent="flex-end"
      />
      <SecondaryBlock
        gridRow="6"
        gridColumn="1 / 3"
        advantages={oilAdvantages}
        maxWidth="25rem"
        reverseAdvantages
      />
      <ButtonBlock gridRow="7" gridColumn="3" />
    </OilCanvasDesktopGridWrapper>
  );
};

export default OilCanvasDesktopGrid;
