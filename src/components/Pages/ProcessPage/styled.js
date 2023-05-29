import { Box, styled } from "@mui/material";

export const MasterInfoWrapper = styled(Box)`
  grid-row: 1/4;

  @media (max-width: 780px) {
    grid-row: 1;
  }

  @media (max-width: 630px) {
    display: flex;
    justify-content: center;
  }
`;

export const ProcessMobileContent = styled(Box)`
  display: none;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    display: flex;
    margin-bottom: 20px;

    flex-direction: column;
    text-align: center;
  }
`;
export const ProcessMobileText = styled(Box)`
  display: none;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    display: flex;
    margin-top: 20px;
  }
`;
export const ProcessMobileTextOne = styled(Box)`
  display: none;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    display: flex;
    font-family: "Century Gothic";
    font-weight: bold;
    font-size: 14px;
    margin: 0 auto;
    line-height: 1.5;
  }
`;
