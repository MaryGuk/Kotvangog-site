import { styled, Box } from "@mui/material";

export const ArtStylesAreaWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme: { palette }}) => palette.background.default};
`;

export const ArtStyleSlideWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0 20px;
`;

export const BrashTitleWrapper = styled(Box)`
  padding: 10px 0 15px;
`;