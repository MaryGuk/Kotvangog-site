import { Box, styled } from '@mui/material';
import { mobileStyles } from '../../../utils/stylesUtils';

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

export const MasterInfoWrapper2 = styled(Box)`
  display: flex;
  justify-content: center;
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
    font-family: 'Century Gothic', 'sans-serif';
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
  font-family: 'Palatino Linotype', 'sans-serif';
  font-size: 34px;
  line-height: 45px;
`;

export const ProcessSlideWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.background.default};
  padding: 0 5% 20px;
`;

export const ProcessSlideInternalWrapper = styled(Box)`
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  width: 100%;

  ${mobileStyles('max-width: none;')}
`;

export const ProcessVideoStepsTitleWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
`;

export const ProcessVideoStepsWrapper = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 400px;

  ${mobileStyles(`
    flex-direction: column;
    height: auto;
  `)}
`;

export const ProcessItemVideoStepWrapper = styled(Box)`
  display: flex;
  flex-direction: column;

  & > div {
    padding: 0 0 10px;

    iframe {
      width: 100%;
      height: 300px;

      ${mobileStyles(`
        height: 60vw;
      `)}
    }
  }

  & > p {
    padding: 15px 0 15px;
  }
`;

export const ProcessItemStepVideoWrapper = styled(Box)``;

export const MasterInfoBlockWrapper = styled(Box)`
  display: grid;
  flex-direction: column;
  gap: 0 110px;
  grid-template-rows: 120px 1fr;

  ${mobileStyles(`
    display: flex;
    gap: 0;
  `)}
`;

export const AboutMeBlock = styled(Box)`
  padding: 5px 0 0;
`;

export const WriteMeBlock = styled(Box)`
  display: flex;
  width: 100%;
  align-items: flex-end;
`;

export const WriteMeText = styled(Box)`
  display: flex;
`;

export const WriteMeLinks = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'linksCount',
})`
  width: max-content;

  display: grid;
  grid-template-columns: repeat(
    ${({ linksCount }) => `${linksCount}, ${105 / linksCount - 5}%`}
  );
  grid-column-gap: 5%;
  margin: 0 0 0 25px;

  & > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      width: 100%;

      img {
        border-radius: 20%;
        background-color: ${({ theme }) => theme.palette.secondary.main};
        width: 100%;
      }
    }
  }
`;

export const MasterNameWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0 20px;
`;
