import { Box, styled } from '@mui/material';

export const FirstPageWrapper = styled(Box)`
  width: 100%;
  background-position: center;
  display: flex;
  justify-content: center;
  height: auto;
  overflow: hidden;
  padding: 20px 10% 0;
  box-sizing: border-box;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    box-sizing: initial;
    padding: 20px 0 0;
  }
`;
export const FirstPageGeneral = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  max-width: 1000px;
  margin-top: 130px;

  @media (max-width: 740px) {
    width: min-content;
    flex-direction: column;
    height: 880px;
  }
  @media (max-width: 480px) {
    height: 780px;
  }

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    height: auto;
    margin-top: 70px;
    max-width: 100%;
    display: flex;
    align-items: center;
  }
`;
export const FirstPageInfo = styled(Box)`
  margin-top: -15px;
  display: flex;
  flex-direction: column;
  z-index: 2;
  justify-content: space-between;
  padding-bottom: 15px;

  @media (max-width: 767px) {
    position: absolute;
    padding: 0 10px;
  }
`;
export const FirstPageInfoPart = styled(Box)`
  display: flex;
  flex-direction: column;
`;

export const FirstPageTitle = styled(Box)`
  display: flex;
  flex-direction: column;
  padding-left: 15px;

  @media (max-width: 768px) {
    margin-top: 120px;
  }
  @media (max-width: 650px) {
    margin-top: -40px;
  }

  @media (max-width: 592px) {
    margin-top: -5px;
  }
`;

export const FirstPageTitleOne = styled(Box)`
  margin-bottom: 5px;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
  }
`;

export const FirstPageInfoItems = styled(Box)`
  margin-top: 30px;
  /* margin-left: -40px; */

  @media (max-width: 1082px) {
    margin-left: 20px;
  }

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    margin-top: 380px;
    align-items: center;
    margin-right: 10px;
    margin-left: 10px;
  }
`;

export const FirstPageInfoItemsIcon = styled(Box)`
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    padding-right: 5px;
  }
`;
export const FirstPageInfoItemsText = styled(Box)`
  align-items: center;
  font-family: 'Lucidaconsole';
  font-size: 20px;
  font-weight: 400;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 767px) {
    font-size: 18px;
    background-color: #e3e3e3;
    border-radius: 30px;
    padding: 5px;
    opacity: 0.75;
  }
  @media (max-width: 425px) {
    font-size: 14px;
    background-color: #e3e3e3;
    border-radius: 30px;
    padding: 5px;
    opacity: 0.75;
    overflow: hidden;
  }

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    font-size: 14px;
  }
`;

export const FirstPageInfoItemsOne = styled(Box)`
  display: flex;
  align-items: center;
  margin-bottom: 40px;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    margin-bottom: 30px;
  }
`;

export const FirstPageInfoItemsTwo = styled(Box)`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    margin-bottom: 30px;
  }
`;
export const FirstPageInfoItemsThree = styled(Box)`
  display: flex;
  align-items: center;
  margin-bottom: 80px;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    margin-bottom: 30px;
  }
`;
export const FirstPageInfoMessage = styled(Box)`
  display: flex;
  align-items: center;
  margin-bottom: 30px;

  @media (max-width: 767px) {
    margin-top: 115px;
    margin-bottom: 30px;
  }

  @media (max-width: 1082px) {
    /* margin-left: 20px; */
  }
`;
export const FirstPageInfoMessageText = styled(Box)`
  font-family: 'Nunito', sans-serif;
  font-weight: 700;
  font-size: 20px;

  @media (max-width: 767px) {
    font-size: 16px;
    background: #a7a7a7;
    color: white;
    border-radius: 45px;
    padding: 10px;
  }

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    font-size: 12px;
    margin-top: -175px;
    border-radius: 25px;
    width: 100%;
  }
`;

export const FirstPage1ImageWrapper = styled(Box)`
  z-index: 1;
  overflow: hidden;
  width: 480px;

  @media (max-width: 767px) {
    margin-top: 40px;
  }
  @media (max-width: 480px) {
    margin-top: -80px;
  }

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    margin-top: 65px;
  }
`;

export const ArrowGrayContainer = styled(Box)`
  display: none;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin-top: -80px;
  }
`;

export const CarouselImageWrapper = styled(Box)`
  display: flex;
  justify-content: end;
  height: 600px;
`;
