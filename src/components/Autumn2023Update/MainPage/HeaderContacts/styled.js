import { styled, Box } from '@mui/material';

export const HeaderContactsWrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
  padding: 0 0 5px;

  & > div {
    padding: 0 10px;
  }
`;

export const HeaderContactsWorkTimeWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  min-width: 40%;
`;

export const HeaderContactsMessengersWrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const HeaderContactsMessengerItemWrapper = styled(Box)`
  display: flex;
  margin: 0 0 0 5px;
  height: min-content;

  & > a > img {
    width: 100%;
    background-color: ${({ theme }) => theme.palette.secondary.main};
    border-radius: 7px;
    padding: 1px;
  }
`;
