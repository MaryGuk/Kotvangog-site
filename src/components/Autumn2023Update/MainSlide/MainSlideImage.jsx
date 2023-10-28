import {MainSlideImageWrapper, MainSlideImageCarouselWrapper, PrevArrowWrapper} from "./styled";
import {mainSlideFramesGallery} from "../../../constants/galeries/mainPageImages";
import Carousel from "react-material-ui-carousel";
import {Box} from "@mui/system";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const MainSlideImages = () => {
    return <MainSlideImageCarouselWrapper>
      <Box height="120vw" width="100vw" position="absolute">
        <Carousel
          autoPlay
          indicators={false}
          swipe
          cycleNavigation
          navButtonsAlwaysVisible
          fullHeightHover
          animation="slide"
          NextIcon={<ArrowForwardIosIcon />}
          PrevIcon={<PrevArrowWrapper><ArrowBackIosIcon /></PrevArrowWrapper>}
          navButtonsWrapperProps={{style: { zIndex: 200 }}}
          navButtonsProps={{style: { background: '#49494944' }}}
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