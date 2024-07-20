import { IconButton, Box } from '@mui/material';
import { styled } from '@mui/material';
import { mobileStyles } from '../../utils/stylesUtils';

const StyledIconButton = styled(IconButton)`
  top: 50%;
  position: absolute;
  z-index: 1;
  transform: translateY(-50%);
  background-color: white;
  border-radius: 50%;

  :hover {
    background-color: white;
    box-shadow: 0 0 20px #36883d;
  }

  ${mobileStyles(`
    :hover {
      box-shadow: none;
    }
  `)}
`;

export const StyledIconButtonPrev = styled(StyledIconButton)`
  svg {
    transform: translateX(15%);
  }
`;

export const StyledIconButtonNext = styled(StyledIconButton)`
  right: 0;
`;

export const HoverScalableContent = styled(Box)`
  transform: scale(0.95);
  width: 100%;

  :hover {
    transform: scale(1);
    transition: 0.5s;
  }
`;

export const MobileCarouselItemsWrapper = styled(Box)`
  display: grid;
  column-gap: 12px;
  row-gap: 22px;
  padding: 0 10px;

  & > a {
    text-decoration: none;
  }
`;
