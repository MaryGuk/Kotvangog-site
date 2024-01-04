import './PortraitSizesTitle.css';
import BrashTitle from '../../../../../components/Autumn2023Update/BrashTitle';
import { Typography } from '@mui/material';
import YellowBrash from '../../../../../images/brashes/brash4.svg';

const PortraitSizesTitle = () => {
  return (
    <div className="portrait-sizes__title-wrapper">
      <BrashTitle brashSrc={YellowBrash} translateY={-13}>
        <Typography variant="h4">Размеры и цены</Typography>
      </BrashTitle>
    </div>
  );
};

export default PortraitSizesTitle;
