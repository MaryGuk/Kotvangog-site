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

const OilCanvasDesktopGrid = () => {
  return (
    <OilCanvasDesktopGridWrapper>
      <PrimaryBlock
        gridRow="1 / 3"
        gridColumn="1"
        brashSrc={PurpleBrashSrc}
        brashWidth="12.5rem"
        translateY={25}
        title="портрет на холсте"
        imagesGallery={newCanvasSlideGallery}
      />
      <ButtonBlock gridRow="3" gridColumn="1" />
      <SecondaryBlock
        gridRow="1"
        gridColumn="2 / 4"
        advantages={canvasAdvantages}
        maxWidth="24rem"
      />
      <PrimaryBlock
        gridRow="2 / 5"
        gridColumn="3"
        brashSrc={YellowBrashSrc}
        brashWidth="18rem"
        translateY={25}
        translateX={10}
        title="портрет маслом"
        imagesGallery={oilSlideFramesGallery}
        justifyContent="flex-end"
      />
      <SecondaryBlock
        gridRow="4"
        gridColumn="1 / 3"
        advantages={oilAdvantages}
        maxWidth="17rem"
        reverseAdvantages
      />
      <ButtonBlock gridRow="5" gridColumn="3" />
    </OilCanvasDesktopGridWrapper>
  );
};

export default OilCanvasDesktopGrid;
