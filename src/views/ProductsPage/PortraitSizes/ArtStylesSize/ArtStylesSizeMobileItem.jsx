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
}) => {
  const gridColumn = `${(idx % 2) + 1}${
    lastItem ? ` / ${columnCount + 1}` : ""
  }`;

  const gridRowOffset = Math.floor(idx / 2) * 4;

  return (
    <Fragment>
      <ArtSizeItemContainer gridColumn={gridColumn} gridRow={gridRowOffset + 1}>
        <img src={imageSrc} loading="lazy" decoding="async" alt="" />
      </ArtSizeItemContainer>
      <ArtSizesItemSize gridColumn={gridColumn} gridRow={gridRowOffset + 2}>
        {imageSize}
      </ArtSizesItemSize>
      <ArtSizesPrintText gridColumn={gridColumn} gridRow={gridRowOffset + 3}>
        {printDescription}
      </ArtSizesPrintText>
      <ArtSizesOilText gridColumn={gridColumn} gridRow={gridRowOffset + 4}>
        {oilDescription}
      </ArtSizesOilText>
    </Fragment>
  );
};

export default ArtStylesSizeMobileItem;
