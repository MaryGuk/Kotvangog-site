import { Box, styled } from '@mui/material';

export const ModernImagesWrapper = styled(Box)`
  background-color: #bdbdbd;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 30px 0 0;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    background-color: ${({ theme }) => theme.palette.background.default};
  }
`;
export const ModernImagesGeneral = styled(Box)`
  width: 100%;
  padding: 0 10%;
  box-sizing: border-box;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    padding: 40px 0 0;
  }
`;
export const ModernImagesContent = styled(Box)`
  margin-top: 30px;
`;

export const ModernImagesDescription = styled(Box)`
  font-size: 17px;
  font-family: 'Palatino Linotype', sans-serif;
  font-weight: 500;
  text-align: center;
  color: #555555;
`;

export const HistoryImagesCollage = styled(Box)`
  display: flex;
  justify-content: center;
  width: 100%;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    justify-content: center;
  }
`;
export const HistoryImagesCollageItems = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  max-width: 1000px;
  margin-bottom: 80px;

  @media (max-width: 950px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 10px;
  }
`;
export const HistoryImagesCollageImage = styled(Box)`
  width: 80%;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    margin-bottom: 40px;
    width: 100%;
  }
`;

export const HistoryImagesCollageText = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    display: none;
  }
`;
export const HistoryImagesCollageText1 = styled(Box)`
  font-size: 24px;
  font-family: 'Palatino Linotype', sans-serif;
  font-weight: 700;
  max-width: 310px;
  color: #555555;
  text-align: center;
  padding: 0 0 7%;
`;
export const HistoryImagesCollageText2 = styled(Box)`
  font-size: 24px;
  font-family: 'Palatino Linotype', sans-serif;
  font-weight: 400;
  color: #555555;
  max-width: 360px;
  text-align: center;
  padding: 0 0 25%;
`;

//

export const MobileLikenessOneContainer = styled(Box)`
  display: none;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const MobileLikenessTextOne = styled(Box)`
  display: none;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    font-family: 'Century Gothic', sans-serif;
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
    font-family: 'Century Gothic', sans-serif;
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
    font-family: 'Century Gothic', sans-serif;
    font-weight: normal;
    font-size: 13px;
    text-align: center;
    display: flex;
  }
`;
