import {MainSlideImageWrapper, MainSlideImageCarouselWrapper} from "./styled";
import {mainSlideFramesGallery} from "../../../constants/galeries/mainPageImages";
import Carousel from "react-material-ui-carousel";
import {Box} from "@mui/system";

const MainSlideImage = () => {
    return <MainSlideImageCarouselWrapper>
      <Box height="120vw" width="100vw">
        <Carousel
          autoPlay
          indicators={false}
          swipe
          cycleNavigation
          navButtonsAlwaysVisible
          fullHeightHover
          animation="slide"
        >
          {
            mainSlideFramesGallery.map((src, idx) =>
              (<MainSlideImageWrapper key={idx}>
                <img src={src} alt={"frame"}/>
              </MainSlideImageWrapper>)
            )
          }
        </Carousel>
        </Box>
    </MainSlideImageCarouselWrapper>
}

export default MainSlideImage;