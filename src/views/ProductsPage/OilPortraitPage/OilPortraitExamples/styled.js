import { Box, styled } from "@mui/material";

export const OilPortraitExamplesWrapper = styled(Box)`
  background-image: url("/images/background/back-gray.png");
  display: flex;
  justify-content: center;
  width: 100%;
`;
export const OilPortraitExamplesGeneral = styled(Box)`
  background-image: url("/images/background/Слой3.png");
  background-repeat: no-repeat;
  background-size: cover;
  margin: 10px;
  width: 100%;
`;
export const OilPortraitExamplesContent = styled(Box)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-column-gap: 10px;
  grid-row-gap: 15px;
  /* max-width: min-content; */
  width: 75%;
  margin: 40px auto;

  @media (max-width: 459px) {
    display: flex;
    flex-direction: column;
  }
`;

export const OilPortraitExamplesGallery = styled(Box)``;
