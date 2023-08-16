import { Box, styled } from "@mui/material";

export const HistoryImagesGalleryWrapper = styled(Box)`
    display: flex;
    width: 100%;
    justify-content: center;
`;

export const HistoryImagesGallery = styled(Box)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  grid-column-gap: 40px;
  grid-row-gap: 30px;
  margin: 20px 0;
  max-width: 1300px;
  width: 100%;
`;

export const HistoryImageItemWrapper = styled(Box)`
  display: flex;
  justify-content: center;
`;
