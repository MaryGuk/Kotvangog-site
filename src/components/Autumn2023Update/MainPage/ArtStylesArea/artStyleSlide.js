import { ArtStyleSlideWrapper, BrushTitleWrapper } from './styled';
import BrushTitle from '../../BrushTitle';
import { Box, Typography } from '@mui/material';
import MobileCarousel from '../../../MobileCarousel';

const ArtStyleSlide = ({ slideTitle, brushSrc, gallery }) => {
  return (
    <ArtStyleSlideWrapper>
      <BrushTitleWrapper>
        <BrushTitle brushSrc={brushSrc} translateY={-15}>
          <Typography variant="h4">{slideTitle}</Typography>
        </BrushTitle>
      </BrushTitleWrapper>

      <Box width="100vw" display="block">
        <MobileCarousel
          imageList={gallery}
          columnCount={1}
          rowCount={1}
          onImageClick={() => true}
        />
      </Box>
    </ArtStyleSlideWrapper>
  );
};

export default ArtStyleSlide;
