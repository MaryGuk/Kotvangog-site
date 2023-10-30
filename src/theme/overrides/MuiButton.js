import shadows from "../shadows";

const MuiButton = {
  styleOverrides: {
    contained: {
      letterSpacing: '1px',
      lineHeight: 1.2,
      height: '39px',
      fontFamily: '"Century Gothic", sans-serif',
      fontWeight: 'bold',
      padding: '6px 25px',
      fontSize: '0.7rem',
      borderRadius: '25px',
      width: '200px',
      boxShadow: shadows[1],
      textTransform: 'none',
    },
  },
};

export default MuiButton;