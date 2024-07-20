import { OilCanvasGridPrimaryBlockWrapper } from '../styled';
import { Box, Typography } from '@mui/material';
import BrushTitle from '../../../BrushTitle';
import ButtonBlock from './ButtonBlock';
import NewCarousel from '../../../NewCarousel';

const PrimaryBlock = ({ imagesGallery, brushTitle, brushProps, ...props }) => {
  return (
    <OilCanvasGridPrimaryBlockWrapper {...props}>
      <Box margin="0 0 10px">
        <BrushTitle {...brushProps}>
          <Typography variant="subtitle1">{brushTitle}</Typography>
        </BrushTitle>
      </Box>

      <Box width="100%" display="block">
        <NewCarousel gallery={imagesGallery} width={500} height={600} />
      </Box>

      <ButtonBlock />
    </OilCanvasGridPrimaryBlockWrapper>
  );
};

export default PrimaryBlock;
