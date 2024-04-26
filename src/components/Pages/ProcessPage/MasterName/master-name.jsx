import { MasterNameWrapper } from '../styled';
import BrushTitle from '../../../Autumn2023Update/BrushTitle';
import { Typography } from '@mui/material';
import Brush9 from '../../../../images/brushes/brush9.svg';

const MasterName = () => {
  return (
    <MasterNameWrapper>
      <Typography variant="h4">Любовь Ненадовец</Typography>

      <BrushTitle
        brushSrc={Brush9}
        brushWidth="24rem"
        translateY={-10}
        translateX={2}
      >
        <Typography variant="h4">Художник мастерской KOTVANGOG</Typography>
      </BrushTitle>
    </MasterNameWrapper>
  );
};

export default MasterName;
