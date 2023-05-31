import { styled, Box } from "@mui/material";

export const ContactSticky = styled(Box)`
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 5;
`;
export const ContactStickyContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const ContactStickyButtonOneContainer = styled(Box)`
  display: flex;
  justify-content: center;
  background-color: #ff8cbc;
  width: 195px;
  border-radius: 5px;
`;

export const ContactStickyButtonOne = styled(Box)`
  font-size: 20px;
  font-family: "Century Gothic";
  text-align: center;
  align-items: center;
  font-weight: normal;
  padding: 10px;
`;

export const ContactStickyButtonTwoContainer = styled(Box)`
  display: flex;
  justify-content: center;
  background-color: #3a8a41;
  width: 189px;
  border-radius: 5px;
`;

export const ContactStickyButtonTwo = styled(Box)`
  font-size: 20px;
  font-family: "Century Gothic";
  text-align: center;
  font-weight: normal;
  align-items: center;
  padding: 10px;
`;
