import { Box, styled } from "@mui/material";

export const MasterInfoWrapper = styled(Box)`
  grid-row: 1/4;

  @media (max-width: 780px) {
    grid-row: 1;
  }

  @media (max-width: 630px) {
    display: flex;
    justify-content: center;
  }
`;
