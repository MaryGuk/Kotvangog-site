import { styled, Box } from "@mui/material";
import {mobileStyles} from "../../../../utils/stylesUtils";

export const MainSlideWrapper = styled(Box)`
  display: flex;
  background-color: #595037;
  height: 450px;
  width: 100%;
  box-sizing: border-box;
  position: relative;

  ${mobileStyles(`
    height: 120vw;
      
  `)}
`;

export const MainSlideContentWrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 0 7px 16px;
  width: 100%;
  box-sizing: border-box;
  position: absolute;
  pointer-events: none;
  
  ${mobileStyles(`
    height: calc(120vw - 60px);
  `)}
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

export const MainSlideImageWrapper = styled(Box)`
  display: flex;
  right: 0;
  transform: translateX(10vw);
  width: 90vw;
  
  img {
    width: 120vw !important;
  }

  ${mobileStyles(`
    height: 120vw;
  `)}
`;

export const MainSlideImageCarouselWrapper = styled(Box)`
  display: flex;
  justify-content: flex-start;
  position: relative;
  width: 100vw;
  height: 450px;

  & > div {
    height: 450px;
    
    div {
      height: 450px;
    }
  }
  
  
  ${mobileStyles(`
    height: 120vw;
    
    & > div {
      height: 120vw;
      
      div {
        height: 120vw;
      }
    }
  `)}
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

export const OfferButtonWrapper = styled(Box)`
  height: min-content;
  left: 10px;
  bottom: 25px;
  position: absolute;
`;