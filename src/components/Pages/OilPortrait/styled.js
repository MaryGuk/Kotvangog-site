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

  width: 100%;
  padding-top: 20px;
`;

export const OilPortraitTitle = styled(Box)`
  font-size: 24px;
  font-family: "Palatino Linotype";
  font-weight: 500;
  text-align: center;
  margin-bottom: 30px;
`;

// export const OilContentMain = styled(Box)`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
// `;
export const OilContent = styled(Box)`
  display: flex;
  justify-content: center;
`;

export const OilContent2 = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

export const OilContentPhoto = styled(Box)``;

export const OilContentDescription = styled(Box)`
  margin-top: 30px;
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
  transform: translate(-50%, -65%) rotate(5deg);
  width: 550px; /* Задайте свои размеры */
  height: 170px; /* Задайте свои размеры */
  background-color: rgba(190, 190, 190, 0.5); /* Задайте свою прозрачность */
  border-radius: 50% / 70%; /* Задайте свои радиусы */
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
`;
