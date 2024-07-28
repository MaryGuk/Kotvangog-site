import { Box, styled } from '@mui/material';

export const BrushTitleWrapper = styled(Box)`
  display: flex;
  position: relative;
  justify-content: center;
`;

export const BrushTitleTextWrapper = styled(Box)`
  display: flex;
  z-index: 100;
  flex-direction: column;
`;

export const BrushTitleBrushWrapper = styled(Box, {
  shouldForwardProp: (prop) =>
    !['translateX', 'translateY', 'brushWidth', 'reverseImage'].includes(prop),
})`
  display: flex;
  width: ${({ brushWidth }) => brushWidth ?? '17rem'};
  max-width: 95vw;
  position: absolute;
  right: 50%;
  transform: ${({ translateX, translateY }) =>
  `translate(${50 + translateX}%, ${translateY}%)`};

  img {
    width: 100%;
    ${({ reverseImage }) => (reverseImage ? 'transform: scaleX(-1);' : '')}
  }
`;
