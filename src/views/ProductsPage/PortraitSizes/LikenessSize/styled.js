import { Box, styled } from "@mui/material";

export const LikenessSizeWrapper = styled(Box)`
  width: 100%;
  background-position: center;
  display: flex;
  justify-content: center;
  height: auto;
  padding-top: 65px;
`;

export const LikenessSizeGeneral = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 15px;

  @media (max-width: 805px) {
    padding-bottom: 51px;
  }
`;

export const LikenessSizeDescription = styled(Box)``;

export const LikenessSizeTextOneContainer = styled(Box)`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LikenessSizeTextOne = styled(Box)`
  font-size: 18px;
  font-family: "Nunito", Sans-serif;
  font-weight: 600;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    font-family: "Century Gothic";
    font-weight: normal;
    font-size: 15px;
    text-align: center;
  }
`;
export const LikenessSizeTextOneMoreContainer = styled(Box)`
  display: flex;
  justify-content: center;
`;

export const LikenessSizeTextOneMore = styled(Box)`
  font-size: 16px;
  font-family: "Nunito", Sans-serif;
  font-weight: 600;
  color: #555555;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    font-family: "Century Gothic";
    font-weight: normal;
    font-size: 14px;
    text-align: center;
    padding-bottom: 5px;
  }
`;

export const LikenessSizeTextTwoContainer = styled(Box)`
  display: flex;
  justify-content: center;
`;

export const LikenessSizeTextTwo = styled(Box)`
  font-size: 18px;
  font-family: "Nunito", Sans-serif;
  font-weight: 600;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    font-family: "Century Gothic";
    font-weight: bold;
    font-size: 14px;
    text-align: center;
    padding-bottom: 5px;
  }
`;
export const LikenessSizeTextTwoMoreContainer = styled(Box)`
  display: flex;
  justify-content: center;
  margin-bottom: -30px;
`;
export const LikenessSizeTextTwoMore = styled(Box)`
  font-size: 16px;
  font-family: "Nunito", Sans-serif;
  font-weight: 600;
  color: #555555;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    font-family: "Century Gothic";
    font-weight: normal;
    font-size: 14px;
    text-align: center;
  }
`;

export const LikenessSizeContainer = styled(Box)`
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
    grid-template-rows: repeat(3, 210px 12px 11px 11px);
    grid-column-gap: 20px;
    grid-row-gap: 8px;
    justify-content: center;
    width: 90%;
  }
`;
