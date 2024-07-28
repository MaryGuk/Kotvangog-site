import {
  ArtSizeItemWrapper,
  ArtSizeItemContainer,
  ArtSizesItemSize,
  ArtSizesOilText,
  ArtSizesPrintText,
} from './styled-sizes';

const ArtStylesSizeItem = ({
                             imageSrc,
                             imageSize,
                             printDescription,
                             oilDescription,
                             printPricePrefix,
                             oilPricePrefix,
                           }) => {
  return (
    <ArtSizeItemWrapper>
      <ArtSizeItemContainer>
        <img
          src={imageSrc}
          loading="lazy"
          decoding="async"
          alt=""
          height="100%"
        />
      </ArtSizeItemContainer>
      <ArtSizesItemSize>{imageSize}</ArtSizesItemSize>
      {printPricePrefix && (
        <ArtSizesPrintText>{`${printPricePrefix} ${printDescription} руб.`}</ArtSizesPrintText>
      )}
      {oilPricePrefix && (
        <ArtSizesOilText>{`${oilPricePrefix} ${oilDescription} руб.`}</ArtSizesOilText>
      )}
    </ArtSizeItemWrapper>
  );
};

export default ArtStylesSizeItem;
