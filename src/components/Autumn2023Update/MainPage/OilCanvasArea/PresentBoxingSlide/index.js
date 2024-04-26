import BrushTitle from '../../../BrushTitle';
import { Button, Typography } from '@mui/material';
import brushSrc from '../../../../../images/brushes/brush7.svg';
import {
  PresentBoxingAreaWrapper,
  PresentButtonWrapper,
  PresentImageItemWrapper,
  PresentImagesWrapper,
} from '../styled';
import { presentSlideImages } from '../../../../../constants/galleries/mainPageImages';
import { useConsultationDialog } from '../../../ConsultationDialogProvider';
import { isMobile } from 'react-device-detect';

const PresentBoxingSlide = () => {
  const { onOpen } = useConsultationDialog();

  return (
    <PresentBoxingAreaWrapper>
      {isMobile ? (
        <>
          <Typography variant="h4">Премиальная подарочная</Typography>
          <BrushTitle brushSrc={brushSrc} brushWidth="20rem" translateY={-9}>
            <Typography variant="h4">упаковка бесплатно</Typography>
          </BrushTitle>
        </>
      ) : (
        <BrushTitle
          brushSrc={brushSrc}
          reverseImage
          brushWidth="20.5rem"
          translateY={-11}
          translateX={-20}
        >
          <Typography variant="h4">
            Премиальная подарочная упаковка бесплатно
          </Typography>
        </BrushTitle>
      )}

      <PresentImagesWrapper>
        {presentSlideImages.map((src, idx) => (
          <PresentImageItemWrapper key={idx}>
            <img src={src} alt="presentImage" width="100%" />
          </PresentImageItemWrapper>
        ))}
      </PresentImagesWrapper>

      {isMobile && (
        <PresentButtonWrapper>
          <Button variant="contained" onClick={onOpen}>
            Получить подарок
          </Button>
        </PresentButtonWrapper>
      )}
    </PresentBoxingAreaWrapper>
  );
};

export default PresentBoxingSlide;
