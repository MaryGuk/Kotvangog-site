import {MainSlideImageWrapper, MainSlideImageCarouselWrapper} from "./styled";
import {mainSlideFramesGallery} from "../../../constants/galeries/mainPageImages";
import Carousel from "react-material-ui-carousel";
import {Box} from "@mui/system";
import {NextArrow, PrevArrow} from "../../MobileCarousel";

const MainSlideImages = () => {
    return <MainSlideImageCarouselWrapper>
      <Box height="120vw" width="140vw" position="absolute">
        <Carousel
          autoPlay
          indicators={false}
          swipe
          cycleNavigation
          navButtonsAlwaysVisible
          fullHeightHover
          animation="slide"
          NextIcon={<NextArrow/>}
          PrevIcon={<PrevArrow/>}
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

export default MainSlideImages;