import { styled } from '@mui/material';
import { Box } from '@mui/system';
import { mobileStyles } from '../../../../utils/stylesUtils';

export const PortraitFrameWrapper = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: ${({ theme: { palette } }) => palette.background.default};

  ${mobileStyles(`
    box-sizing: border-box;
    padding: 0 0 30px;
  `)}
`;
export const PortraitFrameContent = styled(Box)`
  ${mobileStyles(`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
  `)}
`;
export const PortraitFrameContentText = styled(Box)``;

export const PortraitFrameContentCarousel = styled(Box)`
  padding-top: 30px;
  width: 100%;
`;
