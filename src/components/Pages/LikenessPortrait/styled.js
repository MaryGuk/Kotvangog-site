import { Box, styled } from "@mui/material";

export const LikenessPortraitWrapper = styled(Box)`
  background-image: url("/images/background/back-gray.png");
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const LikenessPortraitGeneral = styled(Box)`
  background-image: url("/images/background/Слой3.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  padding-top: 20px;
  margin: 10px;
`;

export const LikenessContent = styled(Box)`
  display: flex;
  justify-content: center;
`;
export const LikenessContent2 = styled(Box)`
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

export const LikenessContentDescription = styled(Box)`
  margin-top: 80px;
`;
export const EllipseСontainer = styled(Box)`
  position: relative;
  display: flex;
  justify-content: center;
`;
export const EllipseLikeness = styled(Box)`
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -65%) rotate(175deg);
  width: 550px;
  height: 170px;
  background-color: rgba(190, 190, 190, 0.5);
  border-radius: 50% / 70%;
`;

export const FirstTextLikeness = styled(Box)`
  font-size: 15px;
  font-family: "Nunito";
  font-weight: 700;
  flex-wrap: wrap;
  max-width: 420px;
  text-align: center;
  position: relative;
  z-index: 1;
  text-align: center;
  margin-bottom: 20px;
`;
export const SecondTextLikeness = styled(Box)`
  font-size: 15px;
  font-family: "Nunito";
  font-weight: 500;
  flex-wrap: wrap;
  max-width: 350px;
  text-align: left;
  margin-bottom: 20px;
`;
export const ThirdTextLikeness = styled(Box)`
  font-size: 15px;
  font-family: "Nunito";
  font-weight: 400;
  flex-wrap: wrap;
  max-width: 400px;
  text-align: left;
  margin-bottom: 20px;
`;
export const FourthTextLikeness = styled(Box)`
  font-size: 15px;
  font-family: "Nunito";
  font-weight: 400;
  flex-wrap: wrap;
  max-width: 450px;
  text-align: left;
  margin-bottom: 30px;
`;
export const LikenessContentPhoto = styled(Box)`
  margin-top: 40px;
`;

export const ButtonContainer = styled(Box)`
  display: flex;
  margin-bottom: 20px;
`;
export const FirstButtonLikeness = styled(Box)`
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
  margin: 0 20px;
`;
export const SecondButtonLikeness = styled(Box)`
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
`;
