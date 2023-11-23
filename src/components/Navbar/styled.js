import { Box, styled } from "@mui/material";

export const NavbarWrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 270px;

  @media (max-width: 425px) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    max-width: 400px;
  }
`;

export const NavbarContent = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const NavbarLayer = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const PhoneAndTimeWrapper = styled(Box)`
  display: flex;
`;

export const PhoneWrapper = styled(Box)`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const TimeWrapper = styled(Box)`
  display: flex;
`;

export const TimeItemWrapper = styled(Box)`
  display: flex;
  align-items: center;
  padding: 0 0 0 5px;
`;

export const ContactsWithCommentWrapper = styled(Box)`
  display: flex;
  max-width: 50%;
  justify-content: space-between;
  align-items: center;
  width: 400px;
`;

export const ContactItemWrapper = styled(Box)`
  display: flex;
`;

export const ContactCommentWrapper = styled(Box)`
  display: flex;
  padding: 0 10px;
`;