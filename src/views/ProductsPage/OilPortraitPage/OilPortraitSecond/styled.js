import { Box, styled } from "@mui/material";

export const OilPortraitSecondWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  width: 100%;
  overflow: hidden;
  padding: 0 10%;
  box-sizing: border-box;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    background-color: white;
    padding: 0;
  }
`;
export const OilPortraitSecondGeneral = styled(Box)`
  background-image: url("/images/background/Слой3.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  margin-top: 80px;
  margin-bottom: 40px;
  max-width: 1000px;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    max-width: 100%;
    background-image: none;
    margin-top: 0;
  }
`;
export const OilPortraitSecondContentMain = styled(Box)`
  margin: 40px auto;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    margin: 0 auto;
  }
`;

export const OilPortraitSecondContent = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    justify-content: space-evenly;
  }
`;

export const OilPortraitSecondContentImages = styled(Box)``;

export const OilMobileSecondContent = styled(Box)`
  display: none;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    display: flex;
    text-align: center;
    flex-direction: column;
    padding-top: 41px;
    padding-bottom: 36px;
  }
`;

export const OilMobileSecondText1 = styled(Box)`
  display: none;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    display: flex;
    font-family: "Century Gothic";
    font-weight: bold;
    font-size: 12px;
    text-align: center;
    justify-content: center;
  }
`;
export const OilMobileSecondText2 = styled(Box)`
  display: none;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    display: flex;
    font-family: "Century Gothic";
    font-weight: bold;
    font-size: 12px;
    text-align: center;
    justify-content: center;
  }
`;
export const OilMobileSecondText3 = styled(Box)`
  display: none;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    display: flex;
    font-family: "Century Gothic";
    font-weight: bold;
    font-size: 12px;
    text-align: center;
    justify-content: center;
  }
`;
