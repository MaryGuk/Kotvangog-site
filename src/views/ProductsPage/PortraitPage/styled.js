import { experimentalStyled as styled } from '@mui/material';
import { Box } from '@mui/system';

export const ProductPageItemMainInfoWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'reverse',
})((props) => ({
  display: 'flex',
  flexDirection: props.reverse ? 'row-reverse' : 'row',
  paddingTop: '70px',
  marginBottom: '10px',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  width: '100%',

  '@media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait)':
    {
      flexDirection: 'column-reverse',
      width: '100%',
      alignItems: 'center',
    },
}));

export const ProductPageImageWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'reverse',
})((props) => ({
  margin: props.reverse ? '0 0 0 5%' : '0 5% 0 0',
  maxWidth: '375px',

  '@media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait)':
    {
      margin: 0,
    },
}));

export const ProductPageItemInfoBlock = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'reverse',
})((props) => ({
  margin: props.reverse ? '0 0 0 0' : '0 0 0 0',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  minWidth: '340px',
  width: 'calc(95% - 375px)',
  maxWidth: '500px',
}));

export const BeautyArtInformation = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'reverse',
})(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  minHeight: '70%',

  /* align-items: center; */
  '@media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait)':
    {
      alignItems: 'center',
      padding: 0,
    },
}));

export const ArtButtonWrapper = styled(Box)`
  padding-left: 55px;
`;

export const SimpleImageWrapper = styled(Box)`
  max-width: 90vw;
  display: flex;
  justify-content: center;
  overflow-x: hidden;
`;
