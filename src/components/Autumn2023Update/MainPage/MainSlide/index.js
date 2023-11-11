import {
    MainSlideTitleDescriptionWrapper,
    MainSlideTitleTextWrapper,
    MainSlideTitleWrapper,
    MainSlideWrapper,
    MainSlideContentWrapper,
    OfferButtonWrapper
} from "./styled";
import Advantages from "./Advantages";
import Offer from "./offer";
import MainSlideImages from "./MainSlideImage";
import {useConsultationDialog} from "../../ConsultationDialogProvider";
import {Button, Typography} from "@mui/material";


const MainSlide = () => {
  const { onOpen } = useConsultationDialog();

    return (
        <MainSlideWrapper>
          <MainSlideImages />
          <MainSlideContentWrapper>
            <MainSlideTitleWrapper>
              <MainSlideTitleTextWrapper>
                <Typography variant="h4" textAlign="start">
                  Портреты по фото маслом и на холсте
                </Typography>
              </MainSlideTitleTextWrapper>
              <MainSlideTitleDescriptionWrapper>
                <Typography variant="body2">
                  За 1 день от 1350 руб
                </Typography>
              </MainSlideTitleDescriptionWrapper>
            </MainSlideTitleWrapper>
            <Advantages />
            <Offer />
          </MainSlideContentWrapper>
          <OfferButtonWrapper>
            <Button variant="contained" onClick={onOpen}>Получить подарок</Button>
          </OfferButtonWrapper>
        </MainSlideWrapper>
    );
};

export default MainSlide;