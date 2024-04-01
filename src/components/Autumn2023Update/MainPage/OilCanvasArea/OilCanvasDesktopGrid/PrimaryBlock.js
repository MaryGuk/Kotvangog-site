import { OilCanvasGridPrimaryBlockWrapper } from '../styled';
import { Box, Typography } from '@mui/material';
import BrashTitle from '../../../BrashTitle';
import ButtonBlock from './ButtonBlock';
import NewCarousel from '../../../NewCarousel';

const PrimaryBlock = ({ imagesGallery, brashTitle, brashProps, ...props }) => {
  return (
    <OilCanvasGridPrimaryBlockWrapper {...props}>
      <Box margin="0 0 10px">
        <BrashTitle {...brashProps}>
          <Typography variant="subtitle1">{brashTitle}</Typography>
        </BrashTitle>
      </Box>

      <Box width="100%" display="block">
        <NewCarousel gallery={imagesGallery} />
      </Box>

      <ButtonBlock />
    </OilCanvasGridPrimaryBlockWrapper>
  );
};

export default PrimaryBlock;
