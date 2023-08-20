import {
  ArtSizeItemContainer,
  ArtSizesItemSize,
  ArtSizesOilText,
  ArtSizesPrintText,
} from "./styled-sizes";

import { Fragment } from "react";

const ArtStylesSizeMobileItem = ({
  imageSrc,
  imageSize,
  printDescription,
  oilDescription,
  idx,
  lastItem,
  columnCount,
  printPricePrefix,
  oilPricePrefix
}) => {
  const gridColumn = `${(idx % 2) + 1}${
    lastItem ? ` / ${columnCount + 1}` : ""
  }`;

  const gridRowOffset = Math.floor(idx / 2) * 4;

  return (
    <Fragment>
      <ArtSizeItemContainer gridColumn={gridColumn} gridRow={gridRowOffset + 1}>
        <img src={imageSrc} loading="lazy" decoding="async" alt="" height="100%" width="auto" />
      </ArtSizeItemContainer>
      <ArtSizesItemSize gridColumn={gridColumn} gridRow={gridRowOffset + 2}>
        {imageSize}
      </ArtSizesItemSize>
      {printPricePrefix && <ArtSizesPrintText gridColumn={gridColumn} gridRow={gridRowOffset + 3}>
        {`${printPricePrefix} ${printDescription} руб.`}
      </ArtSizesPrintText>}
      {oilPricePrefix && <ArtSizesOilText gridColumn={gridColumn} gridRow={gridRowOffset + 4}>
        {`${oilPricePrefix} ${oilDescription} руб.`}
      </ArtSizesOilText>}
    </Fragment>
  );
};

export default ArtStylesSizeMobileItem;
