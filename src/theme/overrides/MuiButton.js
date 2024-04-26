import shadows from '../shadows';
import palette from '../palette';

const MuiButton = {
  styleOverrides: {
    contained: {
      letterSpacing: '0.01071em',
      lineHeight: 1.2,
      height: '39px',
      fontFamily: '"Century Gothic", sans-serif',
      fontWeight: 'bold',
      padding: '6px 25px',
      fontSize: '0.9rem',
      borderRadius: '25px',
      boxShadow: shadows[1],
      textTransform: 'none',
      color: palette.text.primary,
    },
  },
};

export default MuiButton;
