import { Box, Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import {
  PortraitFrameWrapper,
  PortraitFrameContent,
  PortraitFrameContentText,
  PortraitFrameContentCarousel,
} from './styled';
import BrashTitle from '../../../../components/Autumn2023Update/BrashTitle';
import YellowBrash from '../../../../images/brashes/brash4.svg';

const PortraitFrame = () => {
  return (
    <PortraitFrameWrapper>
      <PortraitFrameContent>
        <PortraitFrameContentText>
          <BrashTitle brashSrc={YellowBrash} translateY={-10}>
            <Typography variant="h4">Портрет в раме</Typography>
          </BrashTitle>
        </PortraitFrameContentText>
        <PortraitFrameContentCarousel>
          <Carousel
            animation="slide"
            swipeable
            showArrows={false}
            navButtonsAlwaysInvisible
            autoPlay={false}
          >
            {[
              {
                src: 'https://www.dropbox.com/scl/fi/f673keqtotyfv7hgign8b/750_33.png?rlkey=8irotpv2mmmv2aocmv0ns8wod&dl=0&raw=1',
                key: 'image1',
              },
              {
                src: 'https://www.dropbox.com/scl/fi/bgsnbwsbjhe93ogn4ufmi/750_34.png?rlkey=wollkzx8euj34abkdnq1b9oxq&dl=0&raw=1',
                key: 'image2',
              },
              {
                src: 'https://www.dropbox.com/scl/fi/j0lsbrfj5cfwwfs5aqsse/750_24.png?rlkey=vngesirk7t99zjlml0hmf68uu&dl=0&raw=1',
                key: 'image3',
              },
              {
                src: 'https://www.dropbox.com/scl/fi/wta2c5lidkr0jeg870ac3/750_14.png?rlkey=s4ymimoioo1n9b6ev1ihcuul0&dl=0&raw=1',
                key: 'image4',
              },
              {
                src: 'https://www.dropbox.com/scl/fi/vti8x3kbvjh994gk0i6lc/750_3.png?rlkey=0ta1z5qn4mincgj9m803n83wg&dl=0&raw=1',
                key: 'image5',
              },
            ].map(({ src, key }) => (
              <Box
                height={370}
                key={key}
                display="flex"
                justifyContent="center"
              >
                <img
                  height="100%"
                  alt={key}
                  src={src}
                  key={key}
                  loading="lazy"
                  decoding="async"
                />
              </Box>
            ))}
          </Carousel>
        </PortraitFrameContentCarousel>
      </PortraitFrameContent>
    </PortraitFrameWrapper>
  );
};

export default PortraitFrame;
