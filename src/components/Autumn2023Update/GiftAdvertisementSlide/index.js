import {BestGiftFooter, FortuneWheelDescriptionWrapper, GiftAdvertisementSlideWrapper} from "../styled";
import BestGiftHeader from "./BestGiftHeader";
import {Box, Typography} from "@mui/material";
import {productPageData} from "../../../constants/mainConstants";
import MobileCarousel from "../../MobileCarousel";

const mockImageSrcs = productPageData[0].galleryImages.map(({ fullSrc }) => fullSrc);

const GiftAdvertisementSlide = () => {
  return <GiftAdvertisementSlideWrapper>
    <FortuneWheelDescriptionWrapper>
      <Typography variant="body2">
        Ищете подарок, который не оставит равнодушных?
      </Typography>
      <Typography variant="body2">
        Хотите услышать «ВАУ» вместо банального «Спасибо»?
      </Typography>
    </FortuneWheelDescriptionWrapper>

    <BestGiftHeader />

    <Box height="150vw" width="95vw">
      <MobileCarousel
        imageList={mockImageSrcs}
        columnCount={1}
        rowCount={1}
        onImageClick={() => true}
      />
    </Box>

    <BestGiftFooter>
      <Typography variant="h4">
        Мы создаем портреты маслом или печатаем на холсте
      </Typography>
    </BestGiftFooter>
  </GiftAdvertisementSlideWrapper>
}

export default GiftAdvertisementSlide;