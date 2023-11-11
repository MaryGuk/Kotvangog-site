import {Box, styled} from "@mui/material";

export const OilCanvasAreaWrapper = styled(Box)`
  display: flex;
  align-items: center;
  background-color: ${({ theme: { palette }}) => palette.background.default};
  flex-direction: column;
  padding: 0 0 30px;
`;

export const OilCanvasAreaTitleWrapper = styled(Box)`
  display: flex;
  max-width: 20rem;
  padding: 0 0 30px;
`;

export const OilTitleWrapper = styled(Box)`
  display: flex;
  position: relative;
`;

export const OilTitleTextWrapper = styled(Box)`
  display: flex;
  z-index: 100;
`;

export const OilTitleBrashWrapper = styled(Box)`
  display: flex;
  width: 10rem;
  position: absolute;
  right: 50%;
  transform: translate(50%, 10%);

  img {
    width: 100%
  }
`;

export const OilAreaWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;