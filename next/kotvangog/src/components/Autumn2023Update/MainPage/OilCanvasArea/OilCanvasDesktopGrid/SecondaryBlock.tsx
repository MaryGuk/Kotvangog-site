import { OilCanvasGridSecondaryBlockWrapper } from '../styled';
import AdvantagesList from '../../../../AdvantagesList';
import { Box } from '@mui/system';

const SecondaryBlock = ({
  advantages,
  maxWidth,
  reverseAdvantages,
  ...props
}) => {
  return (
    <OilCanvasGridSecondaryBlockWrapper reverse={reverseAdvantages} {...props}>
      <Box maxWidth={maxWidth}>
        <AdvantagesList advantages={advantages} reverse={reverseAdvantages} />
      </Box>
    </OilCanvasGridSecondaryBlockWrapper>
  );
};

export default SecondaryBlock;
