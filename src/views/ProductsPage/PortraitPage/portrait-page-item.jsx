import {
  ProductPageItemInfoBlock,
  ArtButtonWrapper,
  BeautyArtInformation,
} from './styled';
import { isMobile } from 'react-device-detect';
import './portrait-page.css';
import { useConsultationDialog } from '../../../components/Autumn2023Update/ConsultationDialogProvider';
import { Button, Typography } from '@mui/material';

const PortraitPageItem = ({
  portraitTitle,
  portraitPrice,
  portraitDescription,
  reverse,
}) => {
  const { onOpen } = useConsultationDialog();

  return (
    <ProductPageItemInfoBlock reverse={reverse}>
      <BeautyArtInformation reverse={reverse}>
        <div>
          <div className="beauty__title-background">
            <img
              className="beauty__title-background-image"
              src="/images/background/арт стили волна.png"
              alt=""
            />
          </div>
        </div>

        <div className="beauty-art__title">
          <Typography variant="h2" textAlign="start">
            {portraitTitle}
          </Typography>
        </div>

        <Typography variant="h2" textAlign="start">
          {portraitPrice}
        </Typography>

        {!isMobile && (
          <Typography variant="body2" textAlign="start">
            {portraitDescription}
          </Typography>
        )}
      </BeautyArtInformation>

      {!isMobile && (
        <ArtButtonWrapper>
          <Button variant="contained" onClick={onOpen}>
            Получить консультацию
          </Button>
        </ArtButtonWrapper>
      )}
    </ProductPageItemInfoBlock>
  );
};

export default PortraitPageItem;
