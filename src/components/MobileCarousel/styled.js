import {IconButton} from "@mui/material";
import {styled} from "@mui/material";

const StyledIconButton = styled(IconButton)`
  top: 50%;
  position: absolute;
  z-index: 1;
  transform: translateY(-50%);
  background-color: white;
  border-radius: 50%;
  
  :hover {
    background-color: white;
    box-shadow: 0 0 20px #36883d;
  }
`;


export const StyledIconButtonPrev = styled(StyledIconButton)`
  svg {
    transform: translateX(15%);
  }
`;

export const StyledIconButtonNext = styled(StyledIconButton)`
  right: 0;
`;