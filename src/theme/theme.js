import { createTheme } from '@mui/material/styles';
import MuiDialog from './overrides/MuiDialog'

const theme = createTheme({
    components: {
        MuiDialog,
    },
});

export default theme;