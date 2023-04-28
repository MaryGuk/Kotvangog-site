import { Box, styled } from "@mui/material";

export const HistoryImagesGallery = styled(Box)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  grid-column-gap: 1px;
  grid-row-gap: 30px;
  width: 53%;
  margin: 40px auto;
`;

export const HistoryImagesItems = styled(Box)``;
