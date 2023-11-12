import {Box, styled} from "@mui/material";

export const OilCanvasAreaWrapper = styled(Box)`
  display: flex;
  align-items: center;
  background-color: ${({ theme: { palette }}) => palette.background.default};
  flex-direction: column;
  padding: 0 4% 30px;
`;

export const OilCanvasAreaTitleWrapper = styled(Box)`
  display: flex;
  max-width: 20rem;
  padding: 0 0 30px;
`;

export const OilTitleWrapper = styled(Box)`
  display: flex;
  position: relative;
`;

export const OilTitleTextWrapper = styled(Box)`
  display: flex;
  z-index: 100;
`;

export const OilTitleBrashWrapper = styled(Box)`
  display: flex;
  width: 14rem;
  position: absolute;
  right: 50%;
  transform: translate(50%, 10%);

  img {
    width: 100%
  }
`;

export const OilAreaWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AdvantagesListWrapper = styled(Box)`
  display: flex;
  width: 100%;
  
  &>div {
    max-width: 17.9rem;
  }
`;

export const BoxingPointerWrapper = styled(Box)`
  display: flex;
  position: absolute;
  right: 32px;
  transform: translate(100%, 50%);
  height: 45px;
`;

export const PresentBoxingAreaWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0 0;
`;

export const PresentImagesWrapper = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 30px 0 0;
`;

export const PresentImageItemWrapper = styled(Box)`
  display: flex;
  width: 30%;

  & > img {
    width: 100%;
  }
`;

export const PresentButtonWrapper = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 30px 0 10px;
`;
