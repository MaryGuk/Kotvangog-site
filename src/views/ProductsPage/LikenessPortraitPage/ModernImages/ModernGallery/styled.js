import { Box, styled } from "@mui/material";

export const ModernImagesGallery = styled(Box)`
  display: flex;
  justify-content: center;
`;

export const ModernImagesItems = styled(Box)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  grid-column-gap: 40px;
  grid-row-gap: 30px;
  margin: 20px 0;
  max-width: 1300px;
  width: 100%;
`;

export const ModernImageItemWrapper = styled(Box)`
  display: flex;
  justify-content: center;
`;
