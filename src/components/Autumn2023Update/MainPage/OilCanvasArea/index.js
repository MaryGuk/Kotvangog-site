import {Typography} from "@mui/material";
import {OilCanvasAreaTitleWrapper, OilCanvasAreaWrapper} from "./styled";

const OilCanvasArea = () => {
  return (
    <OilCanvasAreaWrapper>
      <OilCanvasAreaTitleWrapper>
        <Typography variant="h4">
          Мы создаем портреты маслом или печатаем на холсте
        </Typography>
      </OilCanvasAreaTitleWrapper>
    </OilCanvasAreaWrapper>
  );
}

export default OilCanvasArea;