import {
    MainSlideTitleDescriptionWrapper,
    MainSlideTitleTextWrapper,
    MainSlideTitleWrapper,
    MainSlideWrapper
} from "./styled";
import Advantages from "./Advantages";
import Offer from "./offer";
import MainSlideImage from "./MainSlideImage";


const MainSlide = () => {
    return (
        <MainSlideWrapper>
            <MainSlideImage />
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
        </MainSlideWrapper>
    );
};

export default MainSlide;