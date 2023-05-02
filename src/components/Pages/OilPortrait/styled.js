import { Box, styled } from "@mui/material";

export const OilPortraitWrapper = styled(Box)`
  background-image: url("/images/background/back-gray.png");
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const OilPortraitGeneral = styled(Box)`
  background-image: url("/images/background/Слой3.png");
  background-repeat: no-repeat;
  background-size: cover;
  margin: 10px;
  width: 100%;
  padding-top: 20px;
  overflow: hidden;
`;

export const OilContent = styled(Box)`
  display: flex;
  justify-content: center;
`;

export const OilContent2 = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;

  @media (max-width: 650px) {
    display: "flex";
    justify-content: center;
    flex-direction: column;
    align-items: end;
    margin: 10px;
  }
`;

export const OilContentPhoto = styled(Box)`
  margin-top: 10px;
`;

export const OilContentDescription = styled(Box)`
  margin-top: 80px;
`;

export const EllipseСontainer = styled(Box)`
  position: relative;
  display: flex;
  justify-content: center;
`;
export const Ellipse = styled(Box)`
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%) rotate(5deg);
  width: 550px;
  height: 170px;
  background-color: rgba(190, 190, 190, 0.5);
  border-radius: 50% / 70%;
`;

export const FirstText = styled(Box)`
  font-size: 15px;
  font-family: "Nunito";
  font-weight: 700;
  flex-wrap: wrap;
  max-width: 420px;
  text-align: center;
  position: relative;
  z-index: 1;
  text-align: center;
  margin-bottom: 30px;
`;
export const SecondText = styled(Box)`
  font-size: 14px;
  font-family: "Nunito";
  font-weight: 400;
  flex-wrap: wrap;
  max-width: 550px;
  text-align: right;
  margin-bottom: 30px;
  margin-top: 20px;
`;
export const ThirdText = styled(Box)`
  font-size: 14px;
  font-family: "Nunito";
  font-weight: 400;
  flex-wrap: wrap;
  max-width: 550px;
  text-align: right;
  margin-bottom: 30px;
`;
export const ButtonContainer = styled(Box)`
  display: flex;
`;
export const FirstButton = styled(Box)`
  font-size: 16px;
  font-family: "Trebuchetms";
  font-weight: 500;
  background-color: #bdbdbd;
  color: white;
  border-radius: 50px;
  border: none;
  padding: 10px;
  max-width: 300px;
  box-shadow: 3px 3px 0 1px #9e9e9e;
  margin: 0 20px;
`;
export const SecondButton = styled(Box)`
  font-size: 16px;
  font-family: "Trebuchetms";
  font-weight: 500;
  background-color: #36883d;
  color: white;
  border-radius: 50px;
  border: none;
  padding: 10px;
  max-width: 300px;
  box-shadow: 3px 3px 0 1px #9e9e9e;
  cursor: pointer;
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
