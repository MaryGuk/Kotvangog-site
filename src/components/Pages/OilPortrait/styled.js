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
  padding-top: 30px;
`;

export const OilPortraitTitle = styled(Box)`
  font-size: 24px;
  font-family: "Palatino Linotype";
  font-weight: 500;
  text-align: center;
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
  justify-content: space-evenly;
  flex-direction: row;
`;

export const OilContentPhoto = styled(Box)``;

export const OilContentDescription = styled(Box)`
  margin-top: 30px;
`;

export const FirstText = styled(Box)`
  font-size: 15px;
  font-family: "Trebuchet MS";
  font-weight: 400;
  flex-wrap: wrap;
  max-width: 420px;
  text-align: center;
  position: relative;
  z-index: 1;
  text-align: center;
`;
// export const SecondText = styled(Box)`
//   font-size: 16px;
//   font-family: "Trebuchet MS";
//   font-weight: 400;
//   flex-wrap: wrap;
//   max-width: 650px;
//   text-align: right;
// `;

export const EllipseСontainer = styled(Box)`
  position: relative;
  display: inline-block;
  margin-top: 50px;
`;
export const Ellipse = styled(Box)`
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(8deg);
  width: 450px; /* Задайте свои размеры */
  height: 220px; /* Задайте свои размеры */
  background-color: rgba(190, 190, 190, 0.5); /* Задайте свою прозрачность */
  border-radius: 50% / 65%; /* Задайте свои радиусы */
`;
