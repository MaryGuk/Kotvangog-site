import { styled, Box } from "@mui/material";

export const MainSlideWrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: #595037;
  padding: 20px 7px 14px;
  height: 320px;
  width: 100%;
`;

export const MainSlideTitleWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 0 14px 0;
  color: #ffffff;
`;

export const MainSlideTitleTextWrapper = styled(Box)`
  display: flex;
  font-family: "Myriad Pro", "Arial", sans-serif;
  font-size: 25px;
  max-width: 230px;
  line-height: 25px;
  padding: 0 0 8px;
`;

export const MainSlideTitleDescriptionWrapper = styled(Box)`
  display: flex;
  padding: 0;
  font-size: 10px;
  font-family: "Century Gothic", "sans-serif";
`;

export const AdvantagesWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
`;

export const AdvantageItemWrapper = styled(Box)`
  display: flex;
  align-items: center;
  margin: 0 0 15px;
  
  & > img {
    height: 20px;
  }
`;

export const AdvantageItemDescriptionWrapper = styled(Box)`
  display: flex;
  background-color: #ffffff;
  opacity: 0.4;
  border-radius: 10px;
  font-family: "Century Gothic", "Arial", sans-serif;
  font-size: 9px;
  height: 18px;
  line-height: 18px;
  padding: 1px 10px;
  min-width: 150px;
`;

