import { createTheme } from '@mui/material/styles';

const defaultTheme = createTheme();

const { shadows } = defaultTheme;

shadows[1] = `3px 4px 0 #717171`;

export default shadows;
