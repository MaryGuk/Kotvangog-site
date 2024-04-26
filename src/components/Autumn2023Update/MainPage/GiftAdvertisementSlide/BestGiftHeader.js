import { BestGiftHeaderWrapper } from '../MainSlide/styled';
import { BestGiftHeaderSmearSrc } from '../../../../constants/galleries/smears';
import { Typography } from '@mui/material';
import BrushTitle from '../../BrushTitle';

const BestGiftHeader = () => {
  return (
    <BestGiftHeaderWrapper>
      <BrushTitle
        brushSrc={BestGiftHeaderSmearSrc}
        translateX={0}
        translateY={86}
        brushWidth="20rem"
      >
        <Typography variant="h4">
          Портрет на холсте — лучший подарок на любое событие!
        </Typography>
      </BrushTitle>
    </BestGiftHeaderWrapper>
  );
};

export default BestGiftHeader;
