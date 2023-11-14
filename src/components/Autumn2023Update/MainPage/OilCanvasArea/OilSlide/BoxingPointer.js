import {BoxingPointerWrapper} from "../styled";
import pointerSrc from '../../../../../images/MainPage/OilCanvasArea/pointer.svg'

const BoxingPointer = () => {
  return (
    <BoxingPointerWrapper>
      <img src={pointerSrc} alt="pointer"/>
    </BoxingPointerWrapper>
  );
}

export default BoxingPointer;