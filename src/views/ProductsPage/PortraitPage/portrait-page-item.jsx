import {
  ProductPageItemInfoBlock,
  ArtButtonWrapper,
  BeautyArtInformation,
} from './styled';
import { isMobile } from 'react-device-detect';
import './portrait-page.css';
import YellowBrash from '../../../images/brashes/brash4.svg';
import { useConsultationDialog } from '../../../components/Autumn2023Update/ConsultationDialogProvider';
import { Button, Typography } from '@mui/material';
import BrashTitle from '../../../components/Autumn2023Update/BrashTitle';

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
        <BrashTitle brashSrc={YellowBrash} brashWidth="18rem">
          <Typography variant="h2" textAlign="start">
            {portraitTitle}
          </Typography>
        </BrashTitle>

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
          <Button variant="contained" color="secondary" onClick={onOpen}>
            Получить консультацию
          </Button>
        </ArtButtonWrapper>
      )}
    </ProductPageItemInfoBlock>
  );
};

export default PortraitPageItem;
