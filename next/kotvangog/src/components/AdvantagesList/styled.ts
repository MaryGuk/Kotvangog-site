import { Box, styled } from '@mui/material';

export const AdvantagesListWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'reverse',
})`
  display: flex;

  & > ul > li {
    & > div.MuiListItemIcon-root {
      height: 1.2rem;
      min-width: 1.7rem;

      justify-content: ${({ reverse }) =>
        reverse ? 'flex-end' : 'flex-start'};
    }

    flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};

    & > p {
      text-align: ${({ reverse }) => (reverse ? 'right' : 'left')};
    }
  }
`;
