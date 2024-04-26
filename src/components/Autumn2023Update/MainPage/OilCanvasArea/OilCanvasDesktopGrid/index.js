import { OilCanvasDesktopGridWrapper } from '../styled';
import PrimaryBlock from './PrimaryBlock';
import SecondaryBlock from './SecondaryBlock';
import YellowBrushSrc from '../../../../../images/brushes/brush6.svg';
import {
  newCanvasSlideGallery,
  oilSlideFramesGallery,
} from '../../../../../constants/galleries/mainPageImages';
import {
  canvasAdvantages,
  oilAdvantages,
} from '../../../../../constants/advantages';
import PurpleBrushSrc from '../../../../../images/brushes/brush7.svg';

const OilCanvasDesktopGrid = () => {
  return (
    <OilCanvasDesktopGridWrapper>
      <PrimaryBlock
        gridRow="1 / 3"
        gridColumn="1"
        imagesGallery={newCanvasSlideGallery}
        brushProps={{
          brushSrc: PurpleBrushSrc,
          brushWidth: '17rem',
          translateY: 15,
        }}
        brushTitle="портрет на холсте"
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
        brushProps={{
          brushSrc: YellowBrushSrc,
          brushWidth: '23rem',
          translateY: 15,
          translateX: 10,
        }}
        brushTitle="портрет на маслом"
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
