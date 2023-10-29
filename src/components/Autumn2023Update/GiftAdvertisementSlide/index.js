import {BestGiftFooter, FortuneWheelDescriptionWrapper, GiftAdvertisementSlideWrapper} from "../styled";
import BestGiftHeader from "./BestGiftHeader";
import {Typography} from "@mui/material";
// import MobileCarousel from "../../MobileCarousel";

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

    {/*<MobileCarousel*/}
    {/*  imageList={adaptivePhotosData.map(({ previewSrc}) => previewSrc)}*/}
    {/*  columnCount={2}*/}
    {/*  rowCount={2}*/}
    {/*  onImageClick={(idx) => setFullImageSrcData({ gallery: adaptivePhotosData, idx })}*/}
    {/*/>*/}

    <BestGiftFooter>
      <Typography variant="h4">
        Мы создаем портреты маслом или печатаем на холсте
      </Typography>
    </BestGiftFooter>
  </GiftAdvertisementSlideWrapper>
}

export default GiftAdvertisementSlide;