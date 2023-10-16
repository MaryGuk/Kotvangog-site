import { styled, Box } from "@mui/material";

export const HeaderContactsWrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
`;

export const HeaderContactsWorkTimeWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 0 10px 10px;
  font-family: "Century Gothic", "sans-serif";
  font-size: 12px;
  min-width: 40%;
`;

export const HeaderContactsMessengersWrapper = styled(Box)`
  display: flex;
  align-items: center;
  padding: 0 10px 10px;
  justify-content: flex-end;
`;

export const HeaderContactsMessengerItemWrapper = styled(Box)`
  display: flex;
  margin: 0 0 0 5px;
  width: 16%;
  height: min-content;
  
  & > a > img {
    width: 100%;
    background-color: #d7d7d7;
    border-radius: 7px;
    padding: 1px;
  }
`;
