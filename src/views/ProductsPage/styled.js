import { Box, styled, IconButton } from "@mui/material";

export const StyledIconButtonWrapper = styled(Box)`
  position: fixed;
  top: 50%;
`;

export const StyledIconButton = styled(IconButton)({
  position: "static",
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: 1,
  color: "white",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
});
