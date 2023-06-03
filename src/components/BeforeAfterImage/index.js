import { useEffect, useMemo, useState } from "react";
import {
  ImageWrapper,
  SecondImageWrapper,
  BeforeAfterImageWrapper,
  SliderWrapper,
  DividingLine,
  DividingLineSliderWrapper,
  ExampleDividingSlider,
  HoverListener,
} from "./styled";

const BeforeAfterImage = ({
  srcBefore,
  srcAfter,
  height,
  dividingLineWidth,
  dividingLineColor,
  dividingSlider,
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [lastTouchedPosition, setLastTouchedPosition] = useState(null);

  const [mousePressed, setMousePressed] = useState(false);

  const handleMouseMove = (event) => {
    if (!mousePressed) {
      return;
    }

    let movementX = event.movementX;

    if (!movementX && event.touches[0]) {
      const touchedClientX = event.touches[0].clientX;
      movementX = lastTouchedPosition ? touchedClientX - lastTouchedPosition : 0;
      setLastTouchedPosition(touchedClientX);
    }

    const { width } = event.currentTarget.getBoundingClientRect();

    setSliderPosition((prev) => prev + (movementX * 100) / width);
  };

  useEffect(() => {
    const handleMouseUp = () => setMousePressed(false);

    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchend", handleMouseUp);

    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchend", handleMouseUp);
    }
  }, []);

  const normalizedSliderPosition = useMemo(
    () => Math.min(100, Math.max(0, sliderPosition)),
    [sliderPosition]
  );

  return (
    <BeforeAfterImageWrapper
      height={height ?? "100%"}
      onMouseMove={handleMouseMove}
      onTouchMove={handleMouseMove}
      changeCursor={mousePressed}
    >
      <ImageWrapper>
        <img draggable={false} src={srcAfter} alt="after" height="100%" />
      </ImageWrapper>
      <SecondImageWrapper width={`${normalizedSliderPosition}%`}>
        <img draggable={false} src={srcBefore} alt="before" height="100%" />
      </SecondImageWrapper>
      <SliderWrapper left={`${normalizedSliderPosition}%`}>
        <DividingLine
          width={dividingLineWidth ?? "2px"}
          backgroundColor={dividingLineColor ?? "white"}
        />
        <HoverListener />
        <DividingLineSliderWrapper onMouseDown={() => setMousePressed(true)} onTouchStart={() => setMousePressed(true)}>
          {dividingSlider ?? <ExampleDividingSlider />}
        </DividingLineSliderWrapper>
      </SliderWrapper>
    </BeforeAfterImageWrapper>
  );
};

export default BeforeAfterImage;
