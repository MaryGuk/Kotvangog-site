import { ReverseBoxingPointerWrapper } from '../styled';
import pointerSrc from '../../../../../images/MainPage/OilCanvasArea/pointer.svg';

const ReverseBoxingPointer = () => {
  return (
    <ReverseBoxingPointerWrapper>
      <img src={pointerSrc} alt="pointer" />
    </ReverseBoxingPointerWrapper>
  );
};

export default ReverseBoxingPointer;
