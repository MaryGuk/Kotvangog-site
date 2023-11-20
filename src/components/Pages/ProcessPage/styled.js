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
    align-items: center;
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

export const ProcessItemDescriptionWrapper = styled(Box)`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const StepNumber = styled(Box)`
  background-color: white;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  position: relative;
  bottom: 50%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  right: -25px;
`;

export const StepNumberText = styled(Box)`
  font-family: "Palatino Linotype";
  font-size: 34px;
  line-height: 45px;
`;

export const ProcessSlideWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.palette.background.default};
  padding: 0 5%;
`;

export const ProcessVideoStepsWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
`;

export const ProcessItemVideoStepWrapper = styled(Box)`
  display: flex;
  flex-direction: column;

  & > div {
    padding: 0 0 10px;
    
    iframe {
      width: 100%;
      height: 60vw;
    }
  }
  
  & > p {
    padding: 15px 0 15px;
  }
`;

export const ProcessItemStepVideoWrapper = styled(Box)``;

export const MasterInfoBlockWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
`;

export const AboutMeBlock = styled(Box)`
  padding: 5px 0 0;
`;