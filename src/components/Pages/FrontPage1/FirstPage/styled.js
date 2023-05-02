import { Box, styled } from "@mui/material";

export const FirstPageWrapper = styled(Box)`
  width: 100%;
  background-position: center;
  display: flex;
  justify-content: center;
  height: auto;
`;
export const FirstPageGeneral = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  margin: 10px;
  overflow: hidden;

  @media (max-width: 767px) {
    width: min-content;
    flex-direction: column;
    height: 880px;
  }
`;
export const FirstPageInfo = styled(Box)`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  z-index: 2;

  @media (max-width: 767px) {
    position: absolute;
  }
`;

export const FirstPageTitle = styled(Box)`
  display: flex;
  flex-direction: column;

  @media (max-width: 767px) {
    margin-top: -40px;
  }
`;

export const FirstPageTitleOne = styled(Box)`
  margin-bottom: 17px;
`;

export const FirstPageInfoItems = styled(Box)`
  margin-top: 30px;
  margin-left: -40px;

  @media (max-width: 1082px) {
    margin-left: 20px;
  }
`;

export const FirstPageInfoItemsIcon = styled(Box)``;
export const FirstPageInfoItemsText = styled(Box)`
  align-items: center;
  font-family: "Lucidaconsole";
  font-size: 20px;
  font-weight: 400;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 767px) {
    font-size: 18px;
  }
`;

export const FirstPageInfoItemsOne = styled(Box)`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`;

export const FirstPageInfoItemsTwo = styled(Box)`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`;
export const FirstPageInfoItemsThree = styled(Box)`
  display: flex;
  align-items: center;
  margin-bottom: 80px;
`;
export const FirstPageInfoMessage = styled(Box)`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  margin-left: -40px;

  @media (max-width: 767px) {
    margin-top: 300px;
    margin-bottom: 30px;
  }

  @media (max-width: 1082px) {
    margin-left: 20px;
  }
`;
export const FirstPageInfoMessageText = styled(Box)`
  font-family: "Nunito", sans-serif;
  font-weight: 700;
  font-size: 20px;

  @media (max-width: 767px) {
    font-size: 16px;
    margin-left: -40px;
    background: #a7a7a7;
    border-radius: 45px;
    padding: 10px;
  }
`;

export const FirstPage1ImageWrapper = styled(Box)`
  z-index: 1;
  overflow: hidden;

  @media (max-width: 767px) {
    margin-top: 120px;
  }
`;
