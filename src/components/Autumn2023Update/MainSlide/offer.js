import {OfferButtonItem, OfferDescriptionWrapper, OfferWrapper} from "./styled";
import {useConsultationDialog} from "../ConsultationDialogProvider";
import {Typography} from "@mui/material";

const Offer = () => {
  const { onOpen } = useConsultationDialog();

  return <OfferWrapper>
    <OfferDescriptionWrapper>
      <Typography variant="body2" textAlign="start">
        Отправьте фото и получите + 8 примеров работ
      </Typography>
    </ OfferDescriptionWrapper>
    <OfferButtonItem onClick={onOpen}>Рассчитать стоимость + подарок</OfferButtonItem>
  </OfferWrapper>
}

export default Offer;