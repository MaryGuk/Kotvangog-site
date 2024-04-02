import {
  ProductPageItemInfoBlock,
  ArtButtonWrapper,
  BeautyArtInformation,
} from './styled';
import { isMobile } from 'react-device-detect';
import './portrait-page.css';
import { useConsultationDialog } from '../../../components/Autumn2023Update/ConsultationDialogProvider';
import { Button } from '@mui/material';

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
        <div className="beauty-art__title">{portraitTitle}</div>
        <div className="beauty-art__price">{` ${portraitPrice} `}</div>
        {!isMobile && (
          <div className="beauty-art__description">{portraitDescription}</div>
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
