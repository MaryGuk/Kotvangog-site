import {
  OilSizeItemContainer,
  OilSizesItemSize,
  OilSizesOilText,
} from './styled-oil-size';

import { Fragment } from 'react';

const OilStylesSizeMobileItem = ({
  imageSrc,
  imageSize,
  oilDescription,
  idx,
  lastItem,
  columnCount,
}) => {
  const gridColumn = `${(idx % 2) + 1}${
    lastItem ? ` / ${columnCount + 1}` : ''
  }`;

  const gridRowOffset = Math.floor(idx / 2) * 4;

  return (
    <Fragment>
      <OilSizeItemContainer gridColumn={gridColumn} gridRow={gridRowOffset + 1}>
        <img src={imageSrc} loading="lazy" decoding="async" alt="" />
      </OilSizeItemContainer>
      <OilSizesItemSize gridColumn={gridColumn} gridRow={gridRowOffset + 2}>
        {imageSize}
      </OilSizesItemSize>
      <OilSizesOilText gridColumn={gridColumn} gridRow={gridRowOffset + 4}>
        {oilDescription}
      </OilSizesOilText>
    </Fragment>
  );
};

export default OilStylesSizeMobileItem;
