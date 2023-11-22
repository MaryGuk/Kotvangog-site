import { OfferDescriptionWrapper, OfferWrapper} from "./styled";
import {Typography} from "@mui/material";

const Offer = () => {
  return <OfferWrapper>
    <OfferDescriptionWrapper>
      <Typography variant="body2" textAlign="start">
        Отправьте фото и получите + 8 примеров работ
      </Typography>
    </ OfferDescriptionWrapper>
  </OfferWrapper>
}

export default Offer;