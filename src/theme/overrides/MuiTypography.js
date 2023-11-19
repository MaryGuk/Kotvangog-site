export const subtitlePxHeight = 34;

const MuiTypography = {
  styleOverrides: {
    root: {
      fontFamily: '"Palatino Linotype", sans-serif',
      textAlign: 'center',
    },
    h4: {
      fontSize: '1.23rem',
    },
    body2: {
      fontFamily: "Century Gothic, sans-serif",
      fontSize: '0.75rem',
    },
    subtitle1: {
      fontSize: '1.23rem',
      fontFamily: "Century Gothic, sans-serif",
      lineHeight: `${subtitlePxHeight}px`
    }
  },
};

export default MuiTypography;