import { createTheme } from '@mui/material/styles';
import MuiDialog from './overrides/MuiDialog'
import MuiTypography from './overrides/MuiTypography'
import MuiButton from "./overrides/MuiButton";
import palette from "./palette";
import shadows from "./shadows";

const theme = createTheme({
  components: {
    MuiButton,
    MuiDialog,
    MuiTypography,
  },
  palette,
  shadows,
});

export default theme;