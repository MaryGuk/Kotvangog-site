import { Box, styled } from '@mui/material';
import { mobileStyles } from '../../../../utils/stylesUtils';

export const OilCanvasAreaWrapper = styled(Box)`
  display: flex;
  align-items: center;
  background-color: ${({ theme: { palette } }) => palette.background.default};
  flex-direction: column;
  padding: 20px 0 30px;

  ${mobileStyles(`
    padding: 0 4% 30px;
  `)}
`;

export const OilCanvasAreaTitleWrapper = styled(Box)`
  display: flex;
  padding: 0 0 30px;

  ${mobileStyles(`
    max-width: 20rem;
  `)}
`;

export const OilTitleWrapper = styled(Box)`
  display: flex;
  position: relative;
`;

export const OilTitleTextWrapper = styled(Box)`
  display: flex;
  z-index: 100;
`;

export const OilTitleBrushWrapper = styled(Box)`
  display: flex;
  width: 14rem;
  position: absolute;
  right: 50%;
  transform: translate(50%, 10%);

  img {
    width: 100%;
  }
`;

export const OilAreaWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const AdvantagesListWrapper = styled(Box)`
  display: flex;
  width: 100%;

  & > div {
    max-width: 17.9rem;
  }
`;

export const CanvasAdvantagesListWrapper = styled(Box)`
  display: flex;
  width: 100%;
`;

export const BoxingPointerWrapper = styled(Box)`
  display: flex;
  position: absolute;
  right: 22px;
  transform: translate(100%, 50%);
  height: 45px;
`;

export const ReverseBoxingPointerWrapper = styled(Box)`
  display: flex;
  position: absolute;
  left: 22px;
  transform: translate(-100%, 50%) scaleX(-1);
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

export const CanvasAreaWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 0 0;
`;

export const OilCanvasDesktopGridWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'maxPrimaryBlockWidth',
})`
  display: grid;
  width: 100%;
  grid-template-columns: ${({ maxPrimaryBlockWidth = '370px' }) =>
    `minmax(0, ${maxPrimaryBlockWidth}) 1fr minmax(0, ${maxPrimaryBlockWidth});`};
  padding: 0 0 10px;
`;

export const OilCanvasGridPrimaryBlockWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const OilCanvasGridSecondaryBlockWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'reverse',
})`
  display: flex;
  flex-direction: column;
  align-items: ${({ reverse }) => (reverse ? 'flex-end' : 'flex-start')};
  width: 100%;
  height: 100%;
`;

export const OilCanvasGridButtonBlockWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  width: 100%;
  height: min-content;
  padding: 15px 0 0;
`;

export const OilSlideCarouselWrapper = styled(Box)`
  display: block;
  max-width: 500px;
  padding: 15px 0 0;

  ${mobileStyles(`
    width: 100vw;
  `)}
`;
