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

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    width: 280px;
    align-items: center;
    margin-top: 10px;
  }
`;

export const OilContentDescription2 = styled(Box)`
  margin-top: 70px;
  padding-left: 66px;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    display: none;
  }
`;

export const EllipseСontainer2 = styled(Box)`
  position: relative;
  display: flex;
  justify-content: center;
`;
export const Ellipse2 = styled(Box)`
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%) rotate(5deg);
  width: 570px;
  height: 190px;
  background-color: rgba(190, 190, 190, 0.5);
  border-radius: 50% / 70%;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    width: 320px;
    height: 220px;
  }
`;

export const FirstText2 = styled(Box)`
  font-size: 17px;
  font-family: "Nunito", Sans-serif;
  font-weight: 600;
  flex-wrap: wrap;
  max-width: 420px;
  text-align: center;
  position: relative;

  z-index: 4;
  text-align: center;
  margin-bottom: 30px;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    font-size: 13px;
    max-width: 300px;
  }
`;
export const SecondTextPart12 = styled(Box)`
  font-size: 16px;
  font-family: "Comfortaa", cursive;
  font-weight: 700;
  line-height: 1.3;
  flex-wrap: wrap;
  max-width: 650px;
  text-align: right;
  margin-top: 10px;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    font-size: 12px;
    max-width: 300px;
    text-align: right;
  }
`;
export const SecondTextPart22 = styled(Box)`
  font-size: 16px;
  font-family: "Comfortaa", cursive;
  font-weight: 400;
  flex-wrap: wrap;
  max-width: 650px;
  text-align: right;
  margin-bottom: 20px;
  margin-top: 3px;
  line-height: 1.3;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    font-size: 12px;
    max-width: 300px;
    text-align: right;
    margin-bottom: 20px;
  }
`;

export const ThirdText2 = styled(Box)`
  font-size: 16px;
  font-family: "Comfortaa", cursive;
  font-weight: 400;
  flex-wrap: wrap;
  max-width: 650px;
  text-align: right;
  margin-bottom: 50px;
  line-height: 1.3;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    font-size: 12px;
    max-width: 300px;
    text-align: right;
    margin-bottom: 20px;
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
