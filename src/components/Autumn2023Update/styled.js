import { styled, Box } from '@mui/material';
import { mobileStyles } from '../../utils/stylesUtils';

export const UnderHeaderBlock = styled(Box)`
  height: 60px;
  width: 100%;

  ${mobileStyles(`  
    height: 0;
  `)};
`;

export const GiftAdvertisementSlideWrapper = styled(Box)`
  padding: 25px 1px;
  box-sizing: border-box;
  width: 100%;
  background-color: #ede7d6;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const FortuneWheelDescriptionWrapper = styled(Box)`
  max-width: 26rem;

  ${mobileStyles(`  
    max-width: 80vw;
  `)};
`;

export const NewCarouselWrapper = styled(Box)`
  display: block;
  width: 100%;
`;

export const NewCarouselItemWrapper = styled(Box)`
  display: flex;
  padding: 0 10px;
  width: 30%;
  box-sizing: border-box;
`;

export const NewCarouselItemDescriptionWrapper = styled(Box)`
  display: flex;
  height: 3rem;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.secondary.main};
  color: ${({ theme }) => theme.palette.common.white};
`;
