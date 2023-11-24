import { Box, styled } from '@mui/material';

export const StylesPageItemWrapper = styled(Box)``;

export const StylesPageItemContainer = styled(Box)``;

export const StylesPageItemName = styled(Box)`
  padding-top: 15px;
  display: flex;
  font-size: 16px;
  font-family: 'Lora', serif;
  font-weight: 500;
  justify-content: center;
`;

export const StylesPageItemPrice = styled(Box)`
  display: flex;
  font-size: 14px;
  color: #3c3f42;
  font-family: 'Lora', serif;
  font-weight: 500;
  justify-content: center;
  padding-bottom: 20px;
`;

export const StylesImageWrapper = styled(Box)`
  max-height: 450px;
  border-radius: 10px;
  overflow-y: hidden;
  display: flex;
  align-items: flex-start;

  @media only screen and (min-device-width: 600px) and (max-device-width: 1625px) {
    max-height: 29vw;
  }
`;
