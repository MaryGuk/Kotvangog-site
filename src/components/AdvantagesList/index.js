import {AdvantagesListWrapper} from "./styled";
import {Typography, List, ListItem, ListItemIcon} from "@mui/material";
import Marker from '../../images/MainPage/MainSlide/advantageMarker.svg';

const AdvantagesList = ({ advantages }) => {
  return <AdvantagesListWrapper>
    <List>
      {advantages?.map(({ advantageText }, idx) => (
        <ListItem key={idx} mar>
          <ListItemIcon>
            <img src={Marker} alt="marker" />
          </ListItemIcon>
          <Typography variant="body2" textAlign="start">{advantageText}</Typography>
        </ListItem>
      ))}
    </List>
  </AdvantagesListWrapper>
}

export default AdvantagesList