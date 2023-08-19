import { Box, styled } from "@mui/material";

export const OilPortraitExamplesWrapper = styled(Box)`
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
  margin: 10px 0;
  width: 100%;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    background-image: none;
  }
`;
export const OilPortraitExamplesContent = styled(Box)`
  padding: 0 10%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    display: block;
    padding: 0;
  }
`;

export const OilPortraitExamplesGallery = styled(Box)`
  display: grid;
  width: 100%;
  max-width: 1300px;
  margin: 40px 0;
  grid-template-columns: repeat(4, minmax(170px, 1fr));
  gap: 60px 2%;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    grid-column-gap: 10px;
  }
`;
