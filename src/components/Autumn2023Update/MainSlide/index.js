import {
    MainSlideTitleDescriptionWrapper,
    MainSlideTitleTextWrapper,
    MainSlideTitleWrapper,
    MainSlideWrapper
} from "./styled";
import Advantages from "./Advantages";

const MainSlide = () => {
    return (
        <MainSlideWrapper>
            <MainSlideTitleWrapper>
                <MainSlideTitleTextWrapper>
                    Портреты маслом по фото на заказ
                </MainSlideTitleTextWrapper>
                <MainSlideTitleDescriptionWrapper>
                    За 1 день от 1350 руб
                </MainSlideTitleDescriptionWrapper>
            </MainSlideTitleWrapper>
            <Advantages />
        </MainSlideWrapper>
    );
};

export default MainSlide;