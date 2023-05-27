import { Box, styled } from "@mui/material";

export const LikenessButtonWrapper = styled(Box)`
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    margin-bottom: 250px;
  }
`;

export const LikenessButtonContainer = styled(Box)`
  display: flex;
  cursor: pointer;
  margin-left: -10px;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    margin-top: 15px;
    align-items: center;
    margin-left: 30px;
  }
`;

export const LikenessButtonItem = styled(Box)`
  font-size: 18px;
  font-family: "Nunito", sans-serif;
  font-weight: 600;
  background-color: #36883d;
  color: white;
  border-radius: 50px;
  border: none;
  padding: 15px;
  max-width: 300px;
  box-shadow: 3px 3px 0 1px #717171;

  @media (max-width: 767px) {
    font-size: 12px;
    padding: 10px;
  }

  @media (max-width: 1082px) {
    margin-left: 25px;
  }

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    font-family: "Century Gothic";
    font-weight: normal;
    padding: 10px;
    font-size: 15px;
    box-shadow: 3px 3px 0 3px #717171;
    margin-left: 20px;
    border-radius: 25px;
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
