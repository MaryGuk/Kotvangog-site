import {
  BrushTitleTextWrapper,
  BrushTitleWrapper,
  BrushTitleBrushWrapper,
} from './styled';

const BrushTitle = ({
  children,
  brushSrc,
  translateX,
  translateY,
  brushWidth,
  reverseImage,
}) => {
  return (
    <BrushTitleWrapper>
      <BrushTitleBrushWrapper
        translateX={translateX ?? 0}
        translateY={translateY ?? 0}
        brushWidth={brushWidth}
        reverseImage={reverseImage}
      >
        <img src={brushSrc} alt="background-brush" />
      </BrushTitleBrushWrapper>

      <BrushTitleTextWrapper>{children}</BrushTitleTextWrapper>
    </BrushTitleWrapper>
  );
};

export default BrushTitle;
