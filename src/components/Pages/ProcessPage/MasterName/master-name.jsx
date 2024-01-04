import { MasterNameWrapper } from '../styled';
import BrashTitle from '../../../Autumn2023Update/BrashTitle';
import { Typography } from '@mui/material';
import Brash9 from '../../../../images/brashes/brash9.svg';

const MasterName = () => {
  return (
    <MasterNameWrapper>
      <Typography variant="h4">Любовь Ненадовец</Typography>

      <BrashTitle
        brashSrc={Brash9}
        brashWidth="24rem"
        translateY={-10}
        translateX={2}
      >
        <Typography variant="h4">Художник мастерской KOTVANGOG</Typography>
      </BrashTitle>
    </MasterNameWrapper>
  );
};

export default MasterName;
