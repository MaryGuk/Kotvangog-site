import {Typography} from "@mui/material";
import {
  OilCanvasAreaTitleWrapper,
  OilCanvasAreaWrapper,
} from "./styled";
import OilSlide from "./OilSlide";
import PresentBoxingSlide from "./PresentBoxingSlide";

const OilCanvasArea = () => {
  return (
    <OilCanvasAreaWrapper>
      <OilCanvasAreaTitleWrapper>
        <Typography variant="h4">
          Мы создаем портреты маслом или печатаем на холсте
        </Typography>
      </OilCanvasAreaTitleWrapper>

      <OilSlide />

      <PresentBoxingSlide />
    </OilCanvasAreaWrapper>
  );
}

export default OilCanvasArea;