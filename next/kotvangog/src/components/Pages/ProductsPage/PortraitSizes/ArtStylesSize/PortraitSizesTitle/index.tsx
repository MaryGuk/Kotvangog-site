// import './PortraitSizesTitle.css';
import { Typography } from '@mui/material';
import YellowBrush from '@/images/brushes/brush4.svg';
import BrushTitle from '@/components/Autumn2023Update/BrushTitle';

const PortraitSizesTitle = () => {
  return (
    <div className="portrait-sizes__title-wrapper">
      <BrushTitle brushSrc={YellowBrush} translateY={-13}>
        <Typography variant="h4">Размеры и цены</Typography>
      </BrushTitle>
    </div>
  );
};

export default PortraitSizesTitle;
