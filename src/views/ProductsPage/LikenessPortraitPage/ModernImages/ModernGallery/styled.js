import { Box, styled } from '@mui/material';

export const ModernImagesGallery = styled(Box)`
  display: flex;
  justify-content: center;
`;

export const ModernImagesItems = styled(Box)`
  display: grid;
  grid-template-columns: repeat(4, minmax(170px, 1fr));
  grid-column-gap: 2%;
  grid-row-gap: 60px;
  margin: 20px 0;
  max-width: 1000px;
  width: 100%;
`;

export const ModernImageItemWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  overflow: hidden;
  max-height: 320px;
`;
