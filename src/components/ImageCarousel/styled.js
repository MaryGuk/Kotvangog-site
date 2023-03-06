import { Box, styled } from "@mui/material";

export const ImageCarouselWrapper = styled(Box)`
  position: relative;
  align-items: center;
  display: flex;

  :hover {
    & > div {
      visibility: visible;
    }
  }
`;

export const ScrollHiddener = styled(Box)`
  height: 195px;
  overflow-y: hidden;
  width: 100%;
`;

export const ImageGalleryWrapper = styled(Box)`
  display: flex;
  align-items: center;
  width: 100%;
  overflow-x: scroll;
  scroll-behavior: smooth;
  overflow-y: hidden;

  opacity: 1;

  & > div {
    margin-right: 5px;
  }

  :last-child {
    margin-right: 0;
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
    height: 195px;
    transition: 0.7s;
  }
`;
