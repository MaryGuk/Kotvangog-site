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

export const GalleryPhotoBox = styled(Box)`
  height: 500px;
  overflow: hidden;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    height: 300px;
  }
`;