import {Box, styled} from "@mui/material";


export const BrashTitleWrapper = styled(Box)`
  display: flex;
  position: relative;
`;

export const BrashTitleTextWrapper = styled(Box)`
  display: flex;
  z-index: 100;
  flex-direction: column;
`;

export const BrashTitleBrashWrapper = styled(Box, {
  shouldForwardProp: (prop) => !['translateX', 'translateY', 'brashWidth'].includes(prop),
})`
  display: flex;
  width: ${(({brashWidth}) => brashWidth ?? '14rem')};
  max-width: 95vw;
  position: absolute;
  right: 50%;
  transform: ${({translateX, translateY}) => `translate(${50 + translateX}%, ${translateY}%)`};

  img {
    width: 100%
  }
`;