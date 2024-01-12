import { Typography } from '@mui/material';
import { OilCanvasAreaTitleWrapper, OilCanvasAreaWrapper } from './styled';
import OilSlide from './OilSlide';
import PresentBoxingSlide from './PresentBoxingSlide';
import PageContentWrapper from '../../../PageContentWrapper';
import { isMobile } from 'react-device-detect';
import CanvasSlide from './CanvasSlide';
import OilCanvasDesktopGrid from './OilCanvasDesktopGrid';

const OilCanvasArea = () => {
  return (
    <OilCanvasAreaWrapper>
      <PageContentWrapper
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <OilCanvasAreaTitleWrapper>
          <Typography variant="h4" letterSpacing="-0.024rem" fontSize="1.45rem">
            Мы создаем портреты маслом или печатаем на холсте
          </Typography>
        </OilCanvasAreaTitleWrapper>

        {isMobile ? <OilSlide /> : <OilCanvasDesktopGrid />}

        <PresentBoxingSlide />

        {isMobile && <CanvasSlide />}
      </PageContentWrapper>
    </OilCanvasAreaWrapper>
  );
};

export default OilCanvasArea;
