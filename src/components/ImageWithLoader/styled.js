import { Box, styled } from "@mui/material";

export const ImageLoaderBackground = styled(Box)`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    height: 100%;
    width: 100%;
  }
`;
