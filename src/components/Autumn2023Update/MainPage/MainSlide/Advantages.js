import {
  AdvantagesWrapper,
  AdvantageItemWrapper,
  AdvantageItemDescriptionWrapper,
} from './styled';
import AdvantageMarker from '../../../../images/MainPage/MainSlide/advantageMarker.svg';
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Advantages = ({ advantages }) => {
  const theme = useTheme();

  return (
    <AdvantagesWrapper>
      {advantages.map((advantageString, idx) => (
        <AdvantageItemWrapper key={idx}>
          <img src={AdvantageMarker} alt="advantage marker" />
          <AdvantageItemDescriptionWrapper>
            <Typography
              variant="body2"
              textAlign="start"
              color={theme.palette.common.white}
            >
              {advantageString}
            </Typography>
          </AdvantageItemDescriptionWrapper>
        </AdvantageItemWrapper>
      ))}
    </AdvantagesWrapper>
  );
};

export default Advantages;
