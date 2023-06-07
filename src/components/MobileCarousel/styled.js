import {IconButton} from "@mui/material";
import {styled} from "@mui/material";

const StyledIconButton = styled(IconButton)`
  top: 50%;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  z-index: 100;
`;


export const StyledIconButtonPrev = styled(StyledIconButton)`

`;

export const StyledIconButtonNext = styled(StyledIconButton)`
  right: 0;
`;