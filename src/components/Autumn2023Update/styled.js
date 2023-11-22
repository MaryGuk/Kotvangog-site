import { styled, Box } from "@mui/material";
import {mobileStyles} from "../../utils/stylesUtils";

export const UnderHeaderBlock = styled(Box)`
  height: 60px;
  width: 100%;
  
  ${mobileStyles(`  
    height: 50px;
  `)};
`;

export const GiftAdvertisementSlideWrapper = styled(Box)`
  padding: 25px 1px;
  height: 700px;
  width: 100%;
  background-color: #ede7d6;
  display: flex;
  align-items: center;
  flex-direction: column;
`;


export const FortuneWheelDescriptionWrapper = styled(Box)`
  max-width: 80vw;
`;