import { Box } from "@mui/material";

import {
  StylesPageItemWrapper,
  StylesPageItemContainer,
  StylesPageItemName,
  StylesPageItemPrice,
} from "./styled";

const StylesPageItem = ({ imageSrc, stylesName, stylesPrice }) => {
  return (
    <StylesPageItemWrapper>
      <StylesPageItemContainer>
        <img src={imageSrc} loading="lazy" decoding="async" alt="" />
      </StylesPageItemContainer>

      <StylesPageItemName>{stylesName}</StylesPageItemName>
      <StylesPageItemPrice>{stylesPrice}</StylesPageItemPrice>
    </StylesPageItemWrapper>
  );
};

export default StylesPageItem;
