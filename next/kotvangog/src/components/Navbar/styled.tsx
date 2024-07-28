import { Box, styled } from '@mui/material';

export const NavbarItemsWrapper = styled(Box)`
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

export const NavbarWrapper = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: #ececec;
  position: sticky;
  top: 0;
  z-index: 1100;

  padding: 0 10%;
  box-sizing: border-box;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    padding: 15px;
    max-width: 100%;
  }
  
  & > nav {
    padding: 15px 0;
    display: flex;
    justify-content: space-between;
    max-width: 1000px;
    width: 100%;

    @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
      padding: 0;
      box-sizing: initial;
    }
    
    & a {
      color: #535353;
      font-family: Nunito, sans-serif;
      font-size: 18px;
      font-weight: 600;
      letter-spacing: -0.3px;
      text-decoration: none;
    }
  }
`;

export const NavbarItemWrapper = styled(Box)`
  display: inline;
  padding: 0 0 5px;
  
  @media (max-width: 768px) {
    text-align: right;
  }
`;

export const Logo = styled(Box)`
  display: flex;
  font-family: 'Zilla Slab', serif;
  font-weight: 600;
  font-size: 24px;
  text-transform: uppercase;
  color: #535353;

  @media (max-width: 768px) {
    margin-right: 100px;
  }
`;
