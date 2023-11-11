import {Typography} from "@mui/material";
import {
  OilCanvasAreaTitleWrapper,
  OilCanvasAreaWrapper,
} from "./styled";
import OilSlide from "./OilSlide";

const OilCanvasArea = () => {
  return (
    <OilCanvasAreaWrapper>
      <OilCanvasAreaTitleWrapper>
        <Typography variant="h4">
          Мы создаем портреты маслом или печатаем на холсте
        </Typography>
      </OilCanvasAreaTitleWrapper>

      <OilSlide />
    </OilCanvasAreaWrapper>
  );
}

export default OilCanvasArea;