import { BestGiftHeaderWrapper } from '../MainSlide/styled';
import { BestGiftHeaderSmearSrc } from '../../../../constants/galleries/smears';
import { Typography } from '@mui/material';
import BrashTitle from '../../BrashTitle';

const BestGiftHeader = () => {
  return (
    <BestGiftHeaderWrapper>
      <BrashTitle
        brashSrc={BestGiftHeaderSmearSrc}
        translateX={0}
        translateY={86}
        brashWidth="20rem"
      >
        <Typography variant="h4">
          Портрет на холсте — лучший подарок на любое событие!
        </Typography>
      </BrashTitle>
    </BestGiftHeaderWrapper>
  );
};

export default BestGiftHeader;
