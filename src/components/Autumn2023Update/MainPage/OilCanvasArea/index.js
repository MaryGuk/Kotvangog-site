import {Typography} from "@mui/material";
import {
  OilCanvasAreaTitleWrapper,
  OilCanvasAreaWrapper,
} from "./styled";
import OilSlide from "./OilSlide";
import PresentBoxingSlide from "./PresentBoxingSlide";
import CanvasSlide from "./CanvasSlide";

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

      <CanvasSlide />
    </OilCanvasAreaWrapper>
  );
}

export default OilCanvasArea;