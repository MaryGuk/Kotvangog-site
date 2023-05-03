import {
  LikenessSizeItemWrapper,
  LikenessSizeItemContainer,
  LikenessSizesItemSize,
  LikenessSizesOilText,
  LikenessSizesPrintText,
} from "./styled-likeness";

const LikenessSizeItem = ({
  imageSrc,
  imageSize,
  printDescription,
  oilDescription,
}) => {
  return (
    <LikenessSizeItemWrapper>
      <LikenessSizeItemContainer>
        <img src={imageSrc} alt="" />
      </LikenessSizeItemContainer>
      <LikenessSizesItemSize>{imageSize}</LikenessSizesItemSize>
      <LikenessSizesPrintText>{printDescription}</LikenessSizesPrintText>
      <LikenessSizesOilText>{oilDescription}</LikenessSizesOilText>
    </LikenessSizeItemWrapper>
  );
};

export default LikenessSizeItem;
