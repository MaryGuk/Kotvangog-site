import { OilCanvasDesktopGridWrapper } from '../styled';
import PrimaryBlock from './PrimaryBlock';
import SecondaryBlock from './SecondaryBlock';
import YellowBrashSrc from '../../../../../images/brashes/brash6.svg';
import {
  newCanvasSlideGallery,
  oilSlideFramesGallery,
} from '../../../../../constants/galleries/mainPageImages';
import {
  canvasAdvantages,
  oilAdvantages,
} from '../../../../../constants/advantages';
import PurpleBrashSrc from '../../../../../images/brashes/brash7.svg';

const OilCanvasDesktopGrid = () => {
  return (
    <OilCanvasDesktopGridWrapper>
      <PrimaryBlock
        gridRow="1 / 3"
        gridColumn="1"
        imagesGallery={newCanvasSlideGallery}
        brashProps={{
          brashSrc: PurpleBrashSrc,
          brashWidth: '17rem',
          translateY: 15,
        }}
        brashTitle="портрет на холсте"
      />
      <SecondaryBlock
        gridRow="1"
        gridColumn="2 / 4"
        advantages={canvasAdvantages}
        maxWidth="28rem"
        padding="40px 0 0"
      />
      <PrimaryBlock
        gridRow="2 / 4"
        gridColumn="3"
        title="портрет маслом"
        imagesGallery={oilSlideFramesGallery}
        justifyContent="flex-end"
        brashProps={{
          brashSrc: YellowBrashSrc,
          brashWidth: '23rem',
          translateY: 15,
          translateX: 10,
        }}
        brashTitle="портрет на маслом"
      />
      <SecondaryBlock
        padding="0 0 40px"
        gridRow="3"
        gridColumn="1 / 3"
        advantages={oilAdvantages}
        maxWidth="25rem"
        reverseAdvantages
      />
    </OilCanvasDesktopGridWrapper>
  );
};

export default OilCanvasDesktopGrid;
