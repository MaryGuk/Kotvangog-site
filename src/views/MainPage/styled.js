import { Box, styled } from "@mui/material";

export const MainPageWrapper = styled(Box)`
  padding: 0 0 0;
  overflow: hidden;
`;

export const FirstPageInfoWrapper = styled(Box)`
  z-index: 2;
`;

export const MainPageItemWrapper = styled(Box)`
  padding: 15px 0;
  width: 100%;
  max-width: 1000px;
  box-sizing: border-box;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    padding: 15px;
  }
`;
