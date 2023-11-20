import { createTheme } from '@mui/material/styles';
import MuiDialog from './overrides/MuiDialog'
import MuiTypography from './overrides/MuiTypography'
import MuiButton from "./overrides/MuiButton";
import palette from "./palette";
import shadows from "./shadows";
import MuiHashLink from "./overrides/MuiHashLink";

const theme = createTheme({
  components: {
    MuiButton,
    MuiDialog,
    MuiTypography,
    MuiLink: MuiHashLink,
  },
  palette,
  shadows,
});

export default theme;