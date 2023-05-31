import { Box, styled } from "@mui/material";

export const OilSizeWrapper = styled(Box)`
  width: 100%;
  background-position: center;
  display: flex;
  justify-content: center;
  height: auto;
  padding-top: 30px;
  padding-bottom: 60px;
`;
export const OilSizeGeneral = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 50px;

  /* @media (max-width: 805px) {
    margin: 15px;
  } */

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    margin-top: 0;
  }
`;

export const OilSizeDescription = styled(Box)``;

export const OilSizeTextOneContainer = styled(Box)`
  margin-top: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    /* margin-top: 60px; */
  }
`;

export const OilSizeTextOne = styled(Box)`
  font-size: 22px;
  font-family: "Nunito", Sans-serif;
  font-weight: 600;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    font-family: "Century Gothic";
    font-weight: normal;
    font-size: 15px;
    text-align: center;
  }
`;

export const OilSizeTextOnePart2 = styled(Box)`
  display: flex;
  font-weight: 700;
  font-family: "Nunito", Sans-serif;
  color: #606060;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    display: flex;
    font-family: "Century Gothic";
    font-weight: bold;
    font-size: 15px;
    text-align: center;
    justify-content: center;
  }
`;

export const OilSizeTextTwoContainer = styled(Box)`
  display: flex;
  justify-content: center;
  margin-bottom: -30px;
`;

export const OilSizeTextTwo = styled(Box)`
  font-size: 22px;
  font-family: "Nunito", Sans-serif;
  font-weight: 600;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    font-family: "Century Gothic";
    font-weight: normal;
    font-size: 15px;
    text-align: center;
  }
`;

export const OilSizeContainer = styled(Box)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 10px;
  width: 75%;
  margin: 0 auto;
  align-items: center;
  justify-items: center;
  margin-top: 50px;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 8px;
    justify-content: center;
    width: 90%;
  }
`;
