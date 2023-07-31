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
