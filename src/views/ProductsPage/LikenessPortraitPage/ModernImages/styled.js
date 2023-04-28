import { Box, styled } from "@mui/material";

export const ModernImagesWrapper = styled(Box)`
  background-color: #bdbdbd;
  display: flex;
  justify-content: center;
  width: 100%;
`;
export const ModernImagesGeneral = styled(Box)`
  width: 100%;
`;
export const ModernImagesContent = styled(Box)`
  display: flex;
  justify-content: center;
  margin-top: 60px;
`;

export const ModernImagesDescription = styled(Box)`
  font-size: 26px;
  font-family: "Palatino Linotype";
  font-weight: 500;
  text-align: center;
  color: #555555;
`;

export const ModernImagesGallery = styled(Box)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  grid-column-gap: 1px;
  grid-row-gap: 50px;
  width: 53%;
  margin: 40px auto;
`;

export const ModernImagesItems = styled(Box)``;
