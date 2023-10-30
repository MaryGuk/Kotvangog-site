import { OfferDescriptionWrapper, OfferWrapper} from "./styled";
import {useConsultationDialog} from "../ConsultationDialogProvider";
import {Button, Typography} from "@mui/material";

const Offer = () => {
  const { onOpen } = useConsultationDialog();

  return <OfferWrapper>
    <OfferDescriptionWrapper>
      <Typography variant="body2" textAlign="start">
        Отправьте фото и получите + 8 примеров работ
      </Typography>
    </ OfferDescriptionWrapper>
    <Button variant="contained" onClick={onOpen}>Отправить фото и получить подарок</Button>
  </OfferWrapper>
}

export default Offer;