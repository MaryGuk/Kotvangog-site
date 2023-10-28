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
                За 1 день от 1350 руб
              </MainSlideTitleDescriptionWrapper>
            </MainSlideTitleWrapper>
            <Advantages />
            <Offer />
          </MainSlideContentWrapper>
        </MainSlideWrapper>
    );
};

export default MainSlide;