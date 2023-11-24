import { Box, styled } from '@mui/material';

export const ImageCarouselWrapper = styled(Box)`
  position: relative;
  align-items: center;
  display: flex;
  margin-bottom: 40px;
  width: 93%;

  :hover {
    & > div {
      visibility: visible;
    }
  }

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    width: 100%;
    margin-bottom: 10px;
    & > div {
      visibility: visible;
    }
  }
`;

export const ScrollHiddener = styled(Box)`
  height: 195px;
  overflow-y: hidden;
  width: 100%;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    height: 290px;
  }
`;

export const ImageGalleryWrapper = styled(Box)`
  overflow-x: scroll;
  scroll-behavior: smooth;
`;
export const ImageGalleryInnerWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'reverse',
})`
  display: inline-flex;
  justify-content: ${({ reverse }) => (reverse ? 'flex-end' : 'flex-start')};
  opacity: 1;
  min-width: 100%;

  & > div {
    margin-right: 5px;
  }

  :last-child {
    margin-right: 0;
  }

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    & > div {
      margin-right: 18px;
    }

    :last-child {
      margin-right: 0;
    }
  }
`;

export const ArrowIconWrapper = styled(Box)`
  position: absolute;
  background-color: white;
  visibility: hidden;
  border-radius: 50%;

  :hover {
    box-shadow: 0 0 20px #36883d;
  }
`;

export const ImageItemWrapper = styled(Box)`
  margin-top: 5px;
  margin-bottom: 5px;
  height: 185px;

  :hover {
    margin-top: 0;
    margin-bottom: 0;
    height: 185px;
    /* transition: 1s; */
    /* transform: scale(1.2); */
  }

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    height: 280px;

    :hover {
      margin-top: 5px;
      margin-bottom: 5px;
      height: 280px;
    }
  }
`;
