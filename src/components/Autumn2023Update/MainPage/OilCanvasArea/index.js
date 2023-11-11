import {Typography} from "@mui/material";
import {
  OilCanvasAreaTitleWrapper,
  OilCanvasAreaWrapper,
  OilTitleBrashWrapper,
  OilTitleTextWrapper,
  OilTitleWrapper
} from "./styled";
import Brash from '../../../../images/brashes/brash4.svg';

const OilCanvasArea = () => {
  return (
    <OilCanvasAreaWrapper>
      <OilCanvasAreaTitleWrapper>
        <Typography variant="h4">
          Мы создаем портреты маслом или печатаем на холсте
        </Typography>
      </OilCanvasAreaTitleWrapper>

      <OilTitleWrapper>
        <OilTitleBrashWrapper>
          <img src={Brash} alt="background-brash" />
        </OilTitleBrashWrapper>

        <OilTitleTextWrapper>
          <Typography variant="subtitle1">Портрет маслом</Typography>
        </OilTitleTextWrapper>
      </OilTitleWrapper>
    </OilCanvasAreaWrapper>
  );
}

export default OilCanvasArea;