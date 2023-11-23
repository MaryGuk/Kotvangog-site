import { Box, styled } from "@mui/material";

export const LikenessPortraitWrapper2 = styled(Box)`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0 10%;
  box-sizing: border-box;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    background: #e0e0e0;
  }
`;

export const LikenessPortraitGeneral2 = styled(Box)`
  background-image: url("/images/background/Слой3.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  max-width: 1000px;
`;

export const LikenessContent2 = styled(Box)`
  display: flex;
  justify-content: center;
  padding: 0 0 22px;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    padding: 0 20px;
  }
`;
export const LikenessContent22 = styled(Box)`
  width: 100%;
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

export const LikenessContentDescription2 = styled(Box)`
  margin-top: 75px;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    display: none;
  }
`;

export const LikenessContentPhoto2 = styled(Box)`
  margin: 15px -5px 0 0;
  width: 520px;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    width: 341px;
    align-items: center;
    margin: -25px 0 0;
  }
`;

export const ButtonContainer = styled(Box)`
  display: flex;
  padding-top: 180px;
`;
export const FirstButtonLikeness = styled(Box)`
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
  margin: 0 20px;
  cursor: pointer;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    font-size: 12px;
    max-width: 220px;
    text-align: center;
    margin-bottom: 20px;
    padding: 5px;
  }
`;
export const SecondButtonLikeness = styled(Box)`
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

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    font-size: 12px;
    max-width: 220px;
    text-align: center;
    margin-bottom: 20px;
    padding: 7px;
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

export const LikenessMobileContent22 = styled(Box)`
  display: none;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 40px;
    margin-bottom: 30px;
  }
`;
export const LikenessMobileTextPart12 = styled(Box)`
  display: none;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    display: flex;
    font-family: "Century Gothic";
    font-weight: bold;
    font-size: 11.8px;
    margin: 0 auto;
  }
`;
export const LikenessMobileTextPart22 = styled(Box)`
  display: none;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    display: flex;
    font-family: "Century Gothic";
    font-weight: bold;
    font-size: 11.8px;
    margin: 0 auto;
  }
`;
export const LikenessMobileTextPart32 = styled(Box)`
  display: none;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    display: flex;
    font-family: "Century Gothic";
    font-weight: bold;
    font-size: 11.8px;
    margin: 0 auto;
  }
`;
export const LikenessButton = styled(Box)`
  display: none;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

export const LikenessDesktopInfo2 = styled(Box)`
  display: flex;
  flex-direction: column;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    display: none;
  }
`;
export const LikenessDesktopInfoOne2 = styled(Box)`
  display: flex;
  padding-bottom: 20px;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    display: none;
  }
`;

export const LikenessDesktopInfoIcon2 = styled(Box)`
  display: flex;
  padding-right: 5px;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    display: none;
  }
`;
export const LikenessDesktopInfoText2 = styled(Box)`
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
export const LikenessDesktopInfoTwo2 = styled(Box)`
  display: flex;
  padding-bottom: 20px;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    display: none;
  }
`;
export const LikenessDesktopInfoThree2 = styled(Box)`
  display: flex;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    display: none;
  }
`;

export const LikenessDesktopDescription12 = styled(Box)`
  display: flex;
  margin-left: 25px;
  width: 400px;
  align-items: center;
  font-family: "Century Gothic";
  font-weight: bold;
  padding-top: 95px;
  font-size: 16px;
  line-height: 1.5;
`;
export const LikenessDesktopDescription22 = styled(Box)`
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
export const LikenessDesktopDescription32 = styled(Box)`
  display: flex;
  margin-left: 25px;
  width: 400px;
  align-items: center;
  font-family: "Century Gothic";
  font-weight: bold;
  font-size: 16px;
  line-height: 1.5;
`;
