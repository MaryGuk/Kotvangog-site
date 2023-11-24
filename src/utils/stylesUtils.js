export const mobileStyles = (styles) => `
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    ${styles}
  }
`;
