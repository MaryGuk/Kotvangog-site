import {OfferButtonItem, OfferDescriptionWrapper, OfferWrapper} from "./styled";
import {useConsultationDialog} from "../ConsultationDialogProvider";

const Offer = () => {
  const { onOpen } = useConsultationDialog();

  return <OfferWrapper>
    <OfferDescriptionWrapper>Отправьте фото и получите + 8 примеров работ</ OfferDescriptionWrapper>
    <OfferButtonItem onClick={onOpen}>Рассчитать стоимость + подарок</OfferButtonItem>
  </OfferWrapper>
}

export default Offer;