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

const MainSlide = ({ advantages }) => {
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
                <Typography variant="h4" textAlign="start">
                  Портреты по фото маслом и на холсте
                </Typography>
              </MainSlideTitleTextWrapper>
              <MainSlideTitleDescriptionWrapper>
                <Typography variant="body2">За 1 день от 1350 руб</Typography>
              </MainSlideTitleDescriptionWrapper>
            </MainSlideTitleWrapper>
            <Advantages advantages={advantages} />
            <Offer />
          </Box>
        </MainSlideDesktopWrapper>
      </MainSlideContentWrapper>
      <OfferButtonWrapper>
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
