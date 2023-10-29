import {BestGiftHeaderWrapper, BestGiftHeaderTextWrapper, BestGiftHeaderSmearWrapper} from "../MainSlide/styled";
import {BestGiftHeaderSmearSrc} from "../../../constants/galeries/smears";
import {Typography} from "@mui/material";

const BestGiftHeader = () => {
  return <BestGiftHeaderWrapper>
    <BestGiftHeaderTextWrapper><Typography variant="h4">Портрет на холсте — лучший подарок на любое событие!</Typography></BestGiftHeaderTextWrapper>
    <BestGiftHeaderSmearWrapper>
      <img src={BestGiftHeaderSmearSrc} alt="smear"/>
    </BestGiftHeaderSmearWrapper>
  </BestGiftHeaderWrapper>
}

export default BestGiftHeader;