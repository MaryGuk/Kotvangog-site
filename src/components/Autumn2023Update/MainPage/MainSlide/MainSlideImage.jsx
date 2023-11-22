import {MainSlideImageWrapper, MainSlideImageCarouselWrapper} from "./styled";
import {mainSlideFramesGallery} from "../../../../constants/galeries/mainPageImages";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Box} from "@mui/system";
import {useState} from "react";

const MainSlideImages = () => {
    const [autoPlay, setAutoPlay] = useState(true);

    return <MainSlideImageCarouselWrapper>
      <Box width="100vw" position="absolute" onTouchStart={() => setAutoPlay(false)} onTouchEnd={() => setAutoPlay(true)}>
        <Carousel
          autoPlay={autoPlay}
          showIndicators={false}
          showThumbs={false}
          showArrows={false}
          showStatus={false}
          infiniteLoop
          stopOnHover
          width="120vw"
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