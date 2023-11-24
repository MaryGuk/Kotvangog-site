import BrashTitle from '../../../BrashTitle';
import { Button, Typography } from '@mui/material';
import brashSrc from '../../../../../images/brashes/brash7.svg';
import {
  PresentBoxingAreaWrapper,
  PresentButtonWrapper,
  PresentImageItemWrapper,
  PresentImagesWrapper,
} from '../styled';
import { presentSlideImages } from '../../../../../constants/galeries/mainPageImages';
import { useConsultationDialog } from '../../../ConsultationDialogProvider';
import { isMobile } from 'react-device-detect';

const PresentBoxingSlide = () => {
  const { onOpen } = useConsultationDialog();

  return (
    <PresentBoxingAreaWrapper>
      {isMobile ? (
        <>
          <Typography variant="h4">Премиальная подарочная</Typography>
          <BrashTitle brashSrc={brashSrc}>
            <Typography variant="h4">упаковка бесплатно</Typography>
          </BrashTitle>
        </>
      ) : (
        <BrashTitle
          brashSrc={brashSrc}
          reverseImage
          brashWidth="20.5rem"
          translateY={-11}
          translateX={-20}
        >
          <Typography variant="h4">
            Премиальная подарочная упаковка бесплатно
          </Typography>
        </BrashTitle>
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
