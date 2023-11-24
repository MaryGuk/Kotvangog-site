import { OilCanvasGridPrimaryBlockWrapper } from '../styled';
import BrashTitle from '../../../BrashTitle';
import { Box, Typography } from '@mui/material';
import MobileCarousel from '../../../../MobileCarousel';

const PrimaryBlock = ({
  brashSrc,
  translateY,
  translateX,
  brashWidth,
  imagesGallery,
  title,
  ...props
}) => {
  return (
    <OilCanvasGridPrimaryBlockWrapper {...props}>
      <BrashTitle
        brashSrc={brashSrc}
        translateY={translateY}
        brashWidth={brashWidth}
        translateX={translateX}
      >
        <Typography variant="subtitle1">{title}</Typography>
      </BrashTitle>

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
