import { Box, styled } from "@mui/material";

export const OilPortraitExamplesWrapper = styled(Box)`
  background-image: url("/images/background/back-gray.png");
  display: flex;
  justify-content: center;
  width: 100%;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    background-image: none;
  }
`;
export const OilPortraitExamplesGeneral = styled(Box)`
  background-image: url("/images/background/Слой3.png");
  background-repeat: no-repeat;
  background-size: cover;
  margin: 10px;
  width: 100%;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    background-image: none;
  }
`;
export const OilPortraitExamplesContent = styled(Box)``;

export const OilPortraitExamplesGallery = styled(Box)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  grid-column-gap: 20px;
  grid-row-gap: 15px;
  width: 60%;
  margin: 40px auto;
`;
