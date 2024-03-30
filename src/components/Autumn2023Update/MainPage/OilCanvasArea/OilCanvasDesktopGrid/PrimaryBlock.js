import { OilCanvasGridPrimaryBlockWrapper } from '../styled';
import { Box } from '@mui/material';
import MobileCarousel from '../../../../MobileCarousel';

const PrimaryBlock = ({ imagesGallery, ...props }) => {
  return (
    <OilCanvasGridPrimaryBlockWrapper {...props}>
      <Box width="100%" display="block">
        <MobileCarousel
          imageList={imagesGallery}
          columnCount={1}
          rowCount={1}
          onImageClick={() => true}
          mt={0}
        />
      </Box>
    </OilCanvasGridPrimaryBlockWrapper>
  );
};

export default PrimaryBlock;
