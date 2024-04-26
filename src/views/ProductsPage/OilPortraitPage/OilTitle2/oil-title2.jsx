import './oil-title2.css';
import BrushTitle from '../../../../components/Autumn2023Update/BrushTitle';
import { Typography } from '@mui/material';
import { BestGiftHeaderSmearSrc } from '../../../../constants/galleries/smears';

const OilTitle2 = () => {
  return (
    <div className="oil__title2-wrapper">
      <BrushTitle
        brushSrc={BestGiftHeaderSmearSrc}
        translateX={7}
        brushWidth="20rem"
      >
        <Typography variant="h4">Классический портрет маслом</Typography>
      </BrushTitle>
    </div>
  );
};

export default OilTitle2;
