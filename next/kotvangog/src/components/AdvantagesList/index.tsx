import { AdvantagesListWrapper } from './styled';
import { Typography, List, ListItem, ListItemIcon } from '@mui/material';
import Marker from '../../images/MainPage/MainSlide/advantageMarker.svg';

const AdvantagesList = ({ advantages, reverse }) => {
  return (
    <AdvantagesListWrapper reverse={reverse}>
      <List>
        {advantages?.map(
          ({ advantageText, endAdornment, reverseEndAdornment }, idx) => (
            <ListItem key={idx}>
              <ListItemIcon>
                <img src={Marker} alt="marker" />
              </ListItemIcon>
              <Typography variant="body2" textAlign="start">
                {advantageText}
              </Typography>
              {(reverse && reverseEndAdornment) || endAdornment}
            </ListItem>
          )
        )}
      </List>
    </AdvantagesListWrapper>
  );
};

export default AdvantagesList;
