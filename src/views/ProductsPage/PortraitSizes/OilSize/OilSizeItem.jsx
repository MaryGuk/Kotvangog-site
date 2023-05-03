import {
  OilSizeItemWrapper,
  OilSizeItemContainer,
  OilSizesItemSize,
  OilSizesItemText,
} from "./styled-oil-size";

const OilSizeItem = ({ imageSrc, imageSize, oilDescription }) => {
  return (
    <OilSizeItemWrapper>
      <OilSizeItemContainer>
        <img src={imageSrc} alt="" />
      </OilSizeItemContainer>
      <OilSizesItemSize>{imageSize}</OilSizesItemSize>
      <OilSizesItemText>{oilDescription}</OilSizesItemText>
    </OilSizeItemWrapper>
  );
};

export default OilSizeItem;
