import { experimentalStyled as styled } from "@mui/material";
import { Box } from "@mui/system";

export const ProductPageItemMainInfoWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "reverse",
})((props) => ({
  display: "flex",
  flexDirection: props.reverse ? "row-reverse" : "row",
  paddingTop: "70px",
  marginBottom: "10px",
  flexWrap: "wrap",
  justifyContent: "space-between",

  "@media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait)":
    {
      flexDirection: "column-reverse",
      width: '100%',
      alignItems: 'center',
    },
}));

export const ProductPageItemInfoBlock = styled(Box, {
  shouldForwardProp: (prop) => prop !== "reverse",
})((props) => ({
  margin: props.reverse ? "0 0 0 0" : "0 0 0 0",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));

export const ArtButtonWrapper = styled(Box)`
  padding-left: 55px;
`;
