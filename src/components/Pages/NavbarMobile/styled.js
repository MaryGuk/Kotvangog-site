import {Box, styled} from "@mui/material";

export const ClickAwayHandler = styled(Box)`
  height: 100%;
  width: 100vw;
`;

export const NavbarParent = styled(Box)`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100vw;
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
`;