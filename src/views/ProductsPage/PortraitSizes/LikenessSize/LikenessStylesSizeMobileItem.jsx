import {
  LikenessSizeItemContainer,
  LikenessSizesItemSize,
  LikenessSizesOilText,
  LikenessSizesPrintText,
} from "./styled-likeness";

import { Fragment } from "react";

const LikenessStylesSizeMobileItem = ({
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
      <LikenessSizeItemContainer
        gridColumn={gridColumn}
        gridRow={gridRowOffset + 1}
      >
        <img src={imageSrc} loading="lazy" decoding="async" alt="" />
      </LikenessSizeItemContainer>
      <LikenessSizesItemSize
        gridColumn={gridColumn}
        gridRow={gridRowOffset + 2}
      >
        {imageSize}
      </LikenessSizesItemSize>
      <LikenessSizesPrintText
        gridColumn={gridColumn}
        gridRow={gridRowOffset + 3}
      >
        {printDescription}
      </LikenessSizesPrintText>
      <LikenessSizesOilText gridColumn={gridColumn} gridRow={gridRowOffset + 4}>
        {oilDescription}
      </LikenessSizesOilText>
    </Fragment>
  );
};

export default LikenessStylesSizeMobileItem;
