import { Box, styled } from "@mui/material";

export const ModernImagesGallery = styled(Box)``;

export const ModernImagesItems = styled(Box)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(170px, 170px));
  grid-column-gap: 40px;
  grid-row-gap: 30px;
  width: 53%;
  margin: 20px auto;
  max-width: 1200px;
`;
