import { createTheme } from '@mui/material/styles';
import MuiDialog from './overrides/MuiDialog'
import MuiTypography from './overrides/MuiTypography'

const theme = createTheme({
    components: {
        MuiDialog,
        MuiTypography,
    },
});

export default theme;