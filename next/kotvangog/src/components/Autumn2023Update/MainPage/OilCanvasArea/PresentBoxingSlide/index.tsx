import BrushTitle from '../../../BrushTitle';
import { Button, Typography } from '@mui/material';
import brushSrc from '../../../../../images/brushes/brush7.svg';
import {
  PresentBoxingAreaWrapper,
  PresentButtonWrapper,
  PresentImageItemWrapper,
  PresentImagesWrapper,
} from '../styled';
import { presentSlideImagesCloudinary } from '@/constants/galleries/mainPageImages';
import { useConsultationDialog } from '../../../ConsultationDialogProvider';
import CloudinaryImage from '../../../../CloudinaryImage';
import { useDevice } from '@/providers/DeviceProvider';


const PresentBoxingSlide = () => {
  const { onOpen } = useConsultationDialog();
  const isMobile = useDevice();

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
        {presentSlideImagesCloudinary.map((cloudinaryId, idx) => (
          <PresentImageItemWrapper key={idx}>
            <CloudinaryImage
              cloudinaryId={cloudinaryId}
              width={600}
              height={750}
            />
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
