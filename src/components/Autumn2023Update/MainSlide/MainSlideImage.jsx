import {MainSlideImageWrapper, MainSlideImageCarouselWrapper} from "./styled";
import {mainSlideFramesGallery} from "../../../constants/galeries/mainPageImages";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Box} from "@mui/system";

const MainSlideImages = () => {
    return <MainSlideImageCarouselWrapper>
      <Box height="120vw" width="100vw" position="absolute">
        <Carousel
          autoPlay
          showIndicators={false}
          showThumbs={false}
          showArrows={false}
          showStatus={false}
          infiniteLoop
        >
          {
            mainSlideFramesGallery.map((src, idx) =>
              (<MainSlideImageWrapper key={idx}>
                  <img src={src} alt={"frame"} height="100%" />
              </MainSlideImageWrapper>)
            )
          }
        </Carousel>
        </Box>
    </MainSlideImageCarouselWrapper>
}

export default MainSlideImages;