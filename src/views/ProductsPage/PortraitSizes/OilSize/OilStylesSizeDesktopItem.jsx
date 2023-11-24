import {
  OilSizeItemWrapper,
  OilSizeItemContainer,
  OilSizesItemSize,
  OilSizesOilText,
} from './styled-oil-size';

const OilStylesSizeItem = ({ imageSrc, imageSize, oilDescription }) => {
  return (
    <OilSizeItemWrapper>
      <OilSizeItemContainer>
        <img src={imageSrc} loading="lazy" decoding="async" alt="" />
      </OilSizeItemContainer>
      <OilSizesItemSize>{imageSize}</OilSizesItemSize>
      <OilSizesOilText>{oilDescription}</OilSizesOilText>
    </OilSizeItemWrapper>
  );
};

export default OilStylesSizeItem;
