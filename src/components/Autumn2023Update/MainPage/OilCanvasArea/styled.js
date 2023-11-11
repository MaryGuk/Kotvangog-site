import {Box, styled} from "@mui/material";

export const OilCanvasAreaWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  background-color: ${({ theme: { palette }}) => palette.background.default};
`;

export const OilCanvasAreaTitleWrapper = styled(Box)`
  display: flex;
  max-width: 20rem;
`;