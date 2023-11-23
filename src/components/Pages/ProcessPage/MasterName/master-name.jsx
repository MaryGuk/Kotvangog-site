import {MasterNameWrapper} from "../styled";
import BrashTitle from "../../../Autumn2023Update/BrashTitle";
import {Typography} from "@mui/material";
import Brash8 from "../../../../images/brashes/brash8.svg";
import Brash9 from "../../../../images/brashes/brash9.svg";


const MasterName = () => {
  return (
    <MasterNameWrapper>
      <BrashTitle brashSrc={Brash8} brashWidth="12rem" translateY={-20} translateX={-5}>
        <Typography variant="h4">Любовь Ненадовец</Typography>
      </BrashTitle>

      <BrashTitle brashSrc={Brash9} brashWidth="24rem" translateY={-10} translateX={2}>
        <Typography variant="h4">Художник мастерской KOTVANGOG</Typography>
      </BrashTitle>
    </MasterNameWrapper>
  );
};

export default MasterName;
