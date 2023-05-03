import { Box, styled } from "@mui/material";

export const ModernImagesGallery = styled(Box)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  grid-column-gap: 1px;
  grid-row-gap: 30px;
  width: 53%;
  margin: 20px auto;
`;

export const ModernImagesItems = styled(Box)``;
