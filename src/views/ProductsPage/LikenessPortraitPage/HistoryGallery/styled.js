import { Box, styled } from '@mui/material';

export const HistoryImagesGalleryWrapper = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const HistoryImagesGallery = styled(Box)`
  display: grid;
  grid-template-columns: repeat(4, minmax(170px, 1fr));
  grid-column-gap: 2%;
  grid-row-gap: 30px;
  margin: 20px 0;
  max-width: 1000px;
  width: 100%;
`;

export const HistoryImageItemWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 90%;
  overflow: hidden;
`;
