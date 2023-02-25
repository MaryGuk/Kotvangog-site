import { experimentalStyled as styled } from "@mui/material";
import { Box } from "@mui/system";

export const ProductPageItemMainInfoWrapper = styled(Box)((props) => ({
  display: "flex",
  flexDirection: props.reverse ? "row-reverse" : "row",
  paddingTop: "70px",
  marginBottom: "10px",
}));
