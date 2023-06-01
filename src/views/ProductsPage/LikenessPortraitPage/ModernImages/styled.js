import { Box, styled } from "@mui/material";

export const ModernImagesWrapper = styled(Box)`
  background-color: #bdbdbd;
  display: flex;
  justify-content: center;
  width: 100%;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    background-color: #fff;
  }
`;
export const ModernImagesGeneral = styled(Box)`
  width: 100%;
`;
export const ModernImagesContent = styled(Box)`
  margin-top: 30px;
`;

export const ModernImagesDescription = styled(Box)`
  font-size: 17px;
  font-family: "Palatino Linotype";
  font-weight: 500;
  text-align: center;
  color: #555555;
`;

export const HistoryImagesCollage = styled(Box)`
  display: flex;
  justify-content: center;
`;
export const HistoryImagesCollageItems = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 950px) {
    display: "flex";
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 10px;
  }
`;
export const HistoryImagesCollageImage = styled(Box)`
  margin-bottom: 80px;
`;

export const HistoryImagesCollageText = styled(Box)`
  margin-top: -40px;
  margin-left: 5px;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    display: none;
  }
`;
export const HistoryImagesCollageText1 = styled(Box)`
  font-size: 19px;
  font-family: "Palatino Linotype";
  font-weight: 700;
  color: #555555;
  text-align: center;
`;
export const HistoryImagesCollageText2 = styled(Box)`
  font-size: 18px;
  font-family: "Palatino Linotype";
  font-weight: 400;
  color: #555555;
  max-width: 310px;
  text-align: center;
`;

//

export const MobileLikenessOneContainer = styled(Box)`
  display: none;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 43px;
  }
`;

export const MobileLikenessTextOne = styled(Box)`
  display: none;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    font-family: "Century Gothic";
    font-weight: normal;
    font-size: 13px;
    text-align: center;
    display: flex;
  }
`;

export const MobileLikenessTwoContainer = styled(Box)`
  display: none;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    display: flex;
    justify-content: center;
  }
`;

export const MobileLikenessTextTwo = styled(Box)`
  display: none;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    font-family: "Century Gothic";
    font-weight: bold;
    font-size: 13px;
    text-align: center;
    display: flex;
    line-height: 2;
  }
`;

export const MobileLikenessThreeContainer = styled(Box)`
  display: none;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    display: flex;
    justify-content: center;
    margin-bottom: 34px;
  }
`;

export const MobileLikenessTextThree = styled(Box)`
  display: none;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    font-family: "Century Gothic";
    font-weight: normal;
    font-size: 13px;
    text-align: center;
    display: flex;
  }
`;
