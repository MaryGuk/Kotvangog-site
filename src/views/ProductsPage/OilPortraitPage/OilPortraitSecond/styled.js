import { Box, styled } from "@mui/material";

export const OilPortraitSecondWrapper = styled(Box)`
  background-color: #bdbdbd;
  display: flex;
  justify-content: center;
  width: 100%;
  overflow: hidden;
`;
export const OilPortraitSecondGeneral = styled(Box)`
  background-image: url("/images/background/Слой3.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  margin-top: 80px;
  margin-bottom: 40px;
  max-width: 1150px;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    max-width: 100%;
  }
`;
export const OilPortraitSecondContentMain = styled(Box)`
  margin: 40px auto;
`;

export const OilPortraitSecondContent = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const OilPortraitSecondContentImages = styled(Box)``;
