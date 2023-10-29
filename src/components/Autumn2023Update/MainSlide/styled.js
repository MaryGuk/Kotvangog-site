import { styled, Box } from "@mui/material";

export const MainSlideWrapper = styled(Box)`
  display: flex;
  background-color: #595037;
  height: 120vw;
  width: 100%;
  box-sizing: border-box;
`;

export const MainSlideContentWrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 0 7px 16px;
  height: 120vw;
  width: 100%;
  box-sizing: border-box;
  position: absolute;
`;

export const MainSlideTitleWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 20px 14px 0;
  color: #ffffff;
  z-index: 100;
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
`;

export const AdvantagesWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  z-index: 100;
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
  background-color: #ffffff66;
  border-radius: 10px;
  height: 18px;
  padding: 1px 10px;
  min-width: 150px;
`;

export const OfferWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  z-index: 100;
`;

export const OfferDescriptionWrapper = styled(Box)`
  display: flex;
  color: white;
  padding: 0 10px 10px;
`;

export const OfferButtonItem = styled(Box)`
  letter-spacing: 1px;
  background-color: #f7b801;
  color: black;
  border: none;
  box-sizing: border-box;
  font-family: "Century Gothic", sans-serif;
  font-weight: bold;
  padding: 6px 25px;
  font-size: 7px;
  box-shadow: 3px 4px 0 #717171;
  border-radius: 25px;
  max-width: 170px;
  text-align: center;
`;

export const MainSlideImageWrapper = styled(Box)`
  display: flex;
  height: 120vw;
  right: 0;
  background-color: #595037;
`;

export const MainSlideImageCarouselWrapper = styled(Box)`
  display: flex;
  justify-content: flex-start;
  position: relative;
  width: 100vw;
  height: 120vw;
`;


export const BestGiftHeaderWrapper = styled(Box)`
  display: flex;
  padding: 20px 15px;
  position: relative;
`;

export const BestGiftHeaderSmearWrapper = styled(Box)`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  width:100%;
  right: 20px;

  img {
    width: 60vw;
  }
`;

export const BestGiftHeaderTextWrapper = styled(Box)`
  display: flex;
  z-index: 1;
  max-width: 380px;
  min-width: 290px;
  
`;

export const PrevArrowWrapper = styled(Box)`
  height: 24px;
  svg {
    transform: translate(15%, -15%);
  }
`;