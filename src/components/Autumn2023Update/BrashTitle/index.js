import {
  BrashTitleTextWrapper,
  BrashTitleWrapper,
  BrashTitleBrashWrapper,
} from './styled';

const BrashTitle = ({
  children,
  brashSrc,
  translateX,
  translateY,
  brashWidth,
  reverseImage,
}) => {
  return (
    <BrashTitleWrapper>
      <BrashTitleBrashWrapper
        translateX={translateX ?? 0}
        translateY={translateY ?? 0}
        brashWidth={brashWidth}
        reverseImage={reverseImage}
      >
        <img src={brashSrc} alt="background-brash" />
      </BrashTitleBrashWrapper>

      <BrashTitleTextWrapper>{children}</BrashTitleTextWrapper>
    </BrashTitleWrapper>
  );
};

export default BrashTitle;
