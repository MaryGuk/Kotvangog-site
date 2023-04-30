import { Box, styled } from "@mui/material";

export const FirstPageWrapper = styled(Box)`
  width: 100%;
  background-position: center;
  display: flex;
  justify-content: center;
`;
export const FirstPageGeneral = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
`;
export const FirstPageInfo = styled(Box)`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  z-index: 2;
`;
export const FirstPageTitle = styled(Box)`
  display: flex;
  flex-direction: column;
`;

export const FirstPageTitleOne = styled(Box)`
  /* margin-right: 210px; */
  margin-bottom: 17px;
`;

export const FirstPage1ImageWrapper = styled(Box)`
  margin-left: -50px;
  z-index: 1;
  overflow: hidden;
`;
export const FirstPageInfoItems = styled(Box)`
  margin-top: 70px;
`;

export const FirstPageInfoItemsOne = styled(Box)`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`;

export const FirstPageInfoItemsIcon = styled(Box)``;

export const FirstPageInfoItemsText = styled(Box)`
  align-items: center;
  font-family: "Lucidaconsole";
  font-size: 20px;
  font-weight: 400;
  display: flex;
  flex-wrap: wrap;
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
  margin-bottom: 80px;
`;
export const FirstPageInfoMessageText = styled(Box)`
  font-family: "Nunito", sans-serif;
  font-weight: 700;
  font-size: 20px;
`;
