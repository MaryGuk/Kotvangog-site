import { experimentalStyled as styled } from "@mui/material";
import { Box } from "@mui/system";

export const ProductPageItemMainInfoWrapper = styled(Box)((props) => ({
  display: "flex",
  flexDirection: props.reverse ? "row-reverse" : "row",
  paddingTop: "70px",
  marginBottom: "10px",
  flexWrap: "wrap",
  justifyContent: "center",
}));

export const ProductPageItemInfoBlock = styled(Box)((props) => ({
  margin: props.reverse ? "0 75px 0 0" : "0 0 0 0",
}));
