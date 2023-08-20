import { Box, styled } from "@mui/material";

export const OilPortraitWrapper2 = styled(Box)`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 30px;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    /* height: 730px; */
    background-image: none;
    padding-top: 0;
  }
`;

export const OilPortraitGeneral2 = styled(Box)`
  background-image: url("/images/background/Слой3.png");
  background-repeat: no-repeat;
  background-size: cover;
  margin: 10px 0;
  width: 100%;
  padding-top: 20px;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    background-image: none;
    margin: 10px;
  }
`;

export const OilContent2 = styled(Box)`
  display: flex;
  justify-content: center;
  padding: 0 10%;
  box-sizing: border-box;
`;

export const OilContent22 = styled(Box)`
  width: 100%;
  max-width: 1300px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  @media (max-width: 990px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 10px;
  }
`;

export const OilContentPhoto2 = styled(Box)`
  margin-top: -20px;
  margin-bottom: -3px;
  height: 700px;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    width: 280px;
    align-items: center;
    margin-top: 10px;
    height: initial;
  }
`;

export const OilContentDescription2 = styled(Box)`
  margin-top: 70px;
  padding-left: 66px;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    display: none;
  }
`;

export const ButtonContainer2 = styled(Box)`
  display: flex;
`;
export const FirstButton2 = styled(Box)`
  font-size: 17px;
  font-family: "Comfortaa", cursive;
  font-weight: 500;
  background-color: #bdbdbd;
  color: white;
  border-radius: 50px;
  border: none;
  padding: 17px;
  max-width: 320px;
  box-shadow: 3px 3px 0 1px #9e9e9e;
  margin: 0 20px;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    font-size: 12px;
    max-width: 220px;
    text-align: center;
    margin-bottom: 20px;
    padding: 7px;
  }
`;
export const SecondButton2 = styled(Box)`
  font-size: 17px;
  font-family: "Palatino Linotype";
  font-weight: 500;
  background-color: #36883d;
  color: white;
  border-radius: 50px;
  border: none;
  padding: 15px;
  max-width: 320px;
  box-shadow: 3px 3px 0 1px #9e9e9e;
  cursor: pointer;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    font-size: 12px;
    max-width: 220px;
    text-align: center;
    margin-bottom: 20px;
    padding: 5px;
  }
`;

export const ModalTitle = styled(Box)`
  font-size: 18px;
  font-family: "Nunito", sans-serif;
  font-weight: 600;
  text-align: center;
`;
export const ModalMessenger = styled(Box)`
  display: flex;
  justify-content: center;
  overflow: hidden;
`;
export const ModalMessengerContent = styled(Box)`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;

export const ModalIcons = styled(Box)`
  margin-right: 10px;
  transition: 0.8s;

  :hover {
    transform: scale(1.2);
  }

  :last-child {
    content: "";
    margin-right: 0;
  }
`;
export const OilButton2 = styled(Box)`
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    display: none;
  }
`;
export const OilMobileContent2 = styled(Box)`
  display: none;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    display: flex;
  }
`;
export const OilMobileText2 = styled(Box)`
  display: none;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    display: flex;
    font-family: "Century Gothic";
    font-weight: normal;
    font-size: 12px;
    text-align: center;
    margin-top: 50px;
  }
`;

export const OilMobileInfoItems = styled(Box)`
  margin-top: 30px;
  /* margin-left: -40px; */

  @media (max-width: 1082px) {
    margin-left: 20px;
  }

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    align-items: center;
    margin-right: 10px;
    margin-left: 10px;
  }
`;

export const OilMobileInfoItemsIcon = styled(Box)`
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    padding-right: 5px;
  }
`;
export const OilMobileInfoItemsText = styled(Box)`
  align-items: center;
  font-family: "Century Gothic";
  font-weight: normal;
  font-size: 13px;
  display: flex;
  flex-wrap: wrap;
`;

export const OilMobileInfoItemsOne = styled(Box)`
  display: flex;
  align-items: center;
  padding-bottom: 20px;
`;

export const OilMobileInfoItemsTwo = styled(Box)`
  display: flex;
  align-items: center;
  padding-bottom: 20px;
`;
export const OilMobileInfoItemsThree = styled(Box)`
  display: flex;
  align-items: center;
  padding-bottom: 21px;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
  }
`;

export const OilDesktopInfo = styled(Box)`
  display: flex;
  flex-direction: column;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    display: none;
  }
`;
export const OilDesktopInfoOne = styled(Box)`
  display: flex;
  padding-bottom: 20px;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    display: none;
  }
`;
export const OilDesktopInfoIcon = styled(Box)`
  padding-right: 5px;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    display: none;
  }
`;
export const OilDesktopInfoText = styled(Box)`
  display: flex;
  align-items: center;
  font-family: "Century Gothic";
  font-weight: normal;
  font-size: 16px;
  display: flex;
  flex-wrap: wrap;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    display: none;
  }
`;
export const OilDesktopInfoTwo = styled(Box)`
  display: flex;
  padding-bottom: 20px;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    display: none;
  }
`;
export const OilDesktopInfoThree = styled(Box)`
  display: flex;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    display: none;
  }
`;

export const OilDesktopDescription1 = styled(Box)`
  display: flex;
  margin-left: 25px;
  width: 400px;
  align-items: center;
  font-family: "Century Gothic";
  font-weight: normal;
  padding-top: 95px;
  font-size: 16px;
  line-height: 1.5;
`;
export const OilDesktopDescription2 = styled(Box)`
  display: flex;
  margin-left: 25px;
  width: 400px;
  align-items: center;
  font-family: "Century Gothic";
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 16px;
  line-height: 1.5;
`;
export const OilDesktopDescription3 = styled(Box)`
  display: flex;
  margin-left: 25px;
  width: 400px;
  align-items: center;
  font-family: "Century Gothic";
  font-weight: normal;
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 80px;
`;
