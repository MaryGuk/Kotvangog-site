import {
  ArtSizeItemWrapper,
  ArtSizeItemContainer,
  ArtSizesItemSize,
  ArtSizesOilText,
  ArtSizesPrintText,
} from "./styled-sizes";

const ArtStylesSizeItem = ({
  imageSrc,
  imageSize,
  printDescription,
  oilDescription,
}) => {
  return (
    <ArtSizeItemWrapper>
      <ArtSizeItemContainer>
        <img width="125px" height="250px" src={imageSrc} alt="" />
      </ArtSizeItemContainer>
      <ArtSizesItemSize>{imageSize}</ArtSizesItemSize>
      <ArtSizesPrintText>{printDescription}</ArtSizesPrintText>
      <ArtSizesOilText>{oilDescription}</ArtSizesOilText>
    </ArtSizeItemWrapper>
  );
};

export default ArtStylesSizeItem;
