import {
  CanvasAdvantagesListWrapper, CanvasAreaWrapper,
} from "../styled";
import {Box, Typography} from "@mui/material";
import MobileCarousel from "../../../../MobileCarousel";
import {oilSlideFramesGallery} from "../../../../../constants/galeries/mainPageImages";
import AdvantagesList from "../../../../AdvantagesList";
import {canvasAdvantages} from "../../../../../constants/advantages";
import BrashTitle from "../../../BrashTitle";
import brashSrc from "../../../../../images/brashes/brash7.svg";

const CanvasSlide = () => {
  return (
    <CanvasAreaWrapper>
      <BrashTitle brashSrc={brashSrc}>
        <Typography variant="h4">Портрет на холсте</Typography>
      </BrashTitle>

      <Box width="100vw" display="block">
        <MobileCarousel
          imageList={oilSlideFramesGallery}
          columnCount={1}
          rowCount={1}
          onImageClick={() => true}
        />
      </Box>

      <CanvasAdvantagesListWrapper>
        <AdvantagesList advantages={canvasAdvantages} />
      </CanvasAdvantagesListWrapper>
    </CanvasAreaWrapper>
  );
}

export default CanvasSlide;