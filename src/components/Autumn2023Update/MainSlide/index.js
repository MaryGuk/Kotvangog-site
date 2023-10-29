import {
    MainSlideTitleDescriptionWrapper,
    MainSlideTitleTextWrapper,
    MainSlideTitleWrapper,
    MainSlideWrapper,
    MainSlideContentWrapper
} from "./styled";
import Advantages from "./Advantages";
import Offer from "./offer";
import MainSlideImages from "./MainSlideImage";
import {Typography} from "@mui/material";


const MainSlide = () => {
    return (
        <MainSlideWrapper>
          <MainSlideImages />
          <MainSlideContentWrapper>
            <MainSlideTitleWrapper>
              <MainSlideTitleTextWrapper>
                Портреты маслом по фото на заказ
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
        </MainSlideWrapper>
    );
};

export default MainSlide;