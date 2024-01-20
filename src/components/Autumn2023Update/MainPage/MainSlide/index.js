import {
  MainSlideTitleDescriptionWrapper,
  MainSlideTitleTextWrapper,
  MainSlideTitleWrapper,
  MainSlideWrapper,
  MainSlideContentWrapper,
  OfferButtonWrapper,
  MainSlideDesktopWrapper,
} from './styled';
import Advantages from './Advantages';
import Offer from './offer';
import MainSlideImages from './MainSlideImage';
import { useConsultationDialog } from '../../ConsultationDialogProvider';
import { Button, Typography, Box } from '@mui/material';
import { isMobile } from 'react-device-detect';

const MainSlide = ({ advantages, title, description, detailsColor }) => {
  const { onOpen } = useConsultationDialog();

  return (
    <MainSlideWrapper>
      <MainSlideImages />

      <MainSlideContentWrapper>
        <MainSlideDesktopWrapper>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <MainSlideTitleWrapper>
              <MainSlideTitleTextWrapper>
                <Typography variant={isMobile ? 'h4' : 'h2'} textAlign="start">
                  {title}
                </Typography>
              </MainSlideTitleTextWrapper>
              <MainSlideTitleDescriptionWrapper>
                <Typography variant="body2">{description}</Typography>
              </MainSlideTitleDescriptionWrapper>
            </MainSlideTitleWrapper>
            <Advantages advantages={advantages} iconsColor={detailsColor} />
            <Offer />
          </Box>
        </MainSlideDesktopWrapper>
      </MainSlideContentWrapper>
      <OfferButtonWrapper buttonColor={detailsColor}>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Box display="flex">
            <Button variant="contained" onClick={onOpen}>
              Получить подарок
            </Button>
          </Box>
        </Box>
      </OfferButtonWrapper>
    </MainSlideWrapper>
  );
};

export default MainSlide;
