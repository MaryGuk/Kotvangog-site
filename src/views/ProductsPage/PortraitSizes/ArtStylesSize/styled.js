import { Box, styled } from '@mui/material';

export const ArtStylesSizeWrapper = styled(Box)`
  width: 100%;
  background-position: center;
  display: flex;
  justify-content: center;
  height: auto;
  padding: 30px 10% 90px;
  box-sizing: border-box;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    padding: 30px 0 0;
  }
`;
export const ArtStylesSizeGeneral = styled(Box)`
  max-width: 1000px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 15px;

  @media (max-width: 805px) {
    /* margin: 15px; */
    padding-bottom: 51px;
  }
`;

export const ArtStylesSizeDescription = styled(Box)``;

export const ArtSizeTextOneContainer = styled(Box)`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArtSizeTextOne = styled(Box)`
  font-size: 22px;
  font-family: 'Nunito', sans-serif;
  font-weight: 600;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    font-family: 'Century Gothic', sans-serif;
    font-weight: normal;
    font-size: 15px;
    text-align: center;
  }
`;
export const ArtSizeTextOnePart2 = styled(Box)`
  display: flex;
  font-weight: 700;
  font-family: 'Nunito', sans-serif;
  color: #606060;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    display: flex;
    font-family: 'Century Gothic', sans-serif;
    font-weight: bold;
    font-size: 15px;
    text-align: center;
    justify-content: center;
  }
`;

export const ArtSizeTextTwoContainer = styled(Box)`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;

export const ArtSizeTextTwo = styled(Box)`
  font-size: 22px;
  font-family: 'Nunito', sans-serif;
  font-weight: 600;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    font-family: 'Century Gothic', sans-serif;
    font-weight: normal;
    font-size: 15px;
    text-align: center;
  }
`;

export const ArtSizeContainer = styled(Box)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 10px;
  align-items: center;
  justify-items: center;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 210px 12px 11px 11px);
    grid-column-gap: 20px;
    grid-row-gap: 8px;
    justify-content: center;
    width: 90%;
    margin: 0 auto;
  }

  @media only screen and (min-device-width: 320px) and (max-device-width: 395px) and (orientation: portrait) {
    grid-column-gap: 1%;
  }
`;
