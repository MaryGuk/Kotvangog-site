import './oil-title2.css';
import BrashTitle from '../../../../components/Autumn2023Update/BrashTitle';
import { Typography } from '@mui/material';
import { BestGiftHeaderSmearSrc } from '../../../../constants/galleries/smears';

const OilTitle2 = () => {
  return (
    <div className="oil__title2-wrapper">
      <BrashTitle
        brashSrc={BestGiftHeaderSmearSrc}
        translateX={7}
        brashWidth="20rem"
      >
        <Typography variant="h4">Классический портрет маслом</Typography>
      </BrashTitle>
    </div>
  );
};

export default OilTitle2;
