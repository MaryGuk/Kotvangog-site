import { ArtStyleSlideWrapper, BrashTitleWrapper } from './styled';
import BrashTitle from '../../BrashTitle';
import { Box, Typography } from '@mui/material';
import MobileCarousel from '../../../MobileCarousel';

const ArtStyleSlide = ({ slideTitle, brashSrc, gallery }) => {
  return (
    <ArtStyleSlideWrapper>
      <BrashTitleWrapper>
        <BrashTitle brashSrc={brashSrc} brashWidth="19rem" translateY={-15}>
          <Typography variant="h4" color="white">
            {slideTitle}
          </Typography>
        </BrashTitle>
      </BrashTitleWrapper>

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
