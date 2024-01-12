import {
  AdvantagesWrapper,
  AdvantageItemWrapper,
  AdvantageItemDescriptionWrapper,
} from './styled';
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SvgIconAdvantageMarker from '../../../../images/MainPage/MainSlide/advantageMarker';

const Advantages = ({ advantages, iconsColor }) => {
  const theme = useTheme();

  return (
    <AdvantagesWrapper>
      {advantages.map((advantageString, idx) => (
        <AdvantageItemWrapper key={idx}>
          <SvgIconAdvantageMarker color={iconsColor} />
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
