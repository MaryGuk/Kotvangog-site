import { styled, Box } from '@mui/material';
import { mobileStyles } from '../../../../utils/stylesUtils';

export const MainSlideDesktopWrapper = styled(Box)`
  width: 100vw;
  padding: 0 10%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;

  ${mobileStyles(`
    padding: 0 0;
  `)}

  & > div {
    width: 100%;
    max-width: 1000px;
  }
`;

export const MainSlideWrapper = styled(Box)`
  display: flex;
  height: 60vh;
  width: 100%;
  background-color: ${({ theme }) => theme.palette.secondary.dark};
  box-sizing: border-box;
  position: relative;

  ${mobileStyles(`
    height: 120vw;
  `)}
`;

export const MainSlideContentWrapper = styled(Box)`
  box-sizing: border-box;
  position: absolute;
  pointer-events: none;
  height: 350px;

  & > div {
    height: 100%;

    & > div {
      height: 100%;
    }
  }

  ${mobileStyles(`
    height: auto;
  
    & > div > div {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      padding: 0 7px 16px;
      width: 100%;
      height: calc(120vw - 60px);
    }
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
  font-family: 'Myriad Pro', 'Arial', sans-serif;
  font-size: 25px;
  max-width: 250px;
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
  align-items: flex-start;
  margin: 0 0 15px;
`;

export const AdvantageItemDescriptionWrapper = styled(Box)`
  display: flex;
  background-color: #aaaaaa77;
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
  padding: 0 30px 10px;

  ${mobileStyles(`
    padding: 0 10px 10px;
  
  `)}
`;

export const MainSlideCarouselItemWrapper = styled(Box)`
  display: flex;
  width: 100vw;
  padding: 0 10%;
  box-sizing: border-box;
  justify-content: center;

  & > div {
    width: 100%;
    max-width: 1000px;
    display: flex;
    justify-content: flex-end;
  }

  ${mobileStyles(`
    justify-content: start;
    width: auto;
    padding: 0;
    
    & > div {
      display: block;
    }
  `)}
`;

export const MainSlideImageWrapper = styled(Box)`
  display: flex;
  right: 0;
  transform: translateX(11vh);

  img {
    width: auto !important;
  }

  ${mobileStyles(`
    transform: translateX(10vw);
    height: 120vw;
    width: 90vw;
    
    img {
      width: 120vw !important;
    }
  `)}
`;

export const MainSlideImageCarouselWrapper = styled(Box)`
  display: flex;
  justify-content: flex-start;
  position: relative;
  width: 100vw;
  height: 60vh;

  & > div {
    height: 60vh;

    div {
      height: 60vh;
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
  max-width: 500px;
`;

export const OfferButtonWrapper = styled(Box)`
  height: min-content;
  left: 0;
  bottom: 65px;
  position: absolute;

  & > div {
    width: 100vw;
    padding: 0 10%;
    box-sizing: border-box;

    div {
      width: 100%;
      max-width: 1000px;
      padding: 0 0 0 30px;
    }
  }

  & > * > * > button {
    background-color: ${({ buttonColor }) => buttonColor};
  }

  ${mobileStyles(`
    left: 10px;
    bottom: 25px;
   
    & > div {
      width: min-content;
      padding: 0;
      
      & > div {
        padding: 0;
      }
    }
  `)}
`;
