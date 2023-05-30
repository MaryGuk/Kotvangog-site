import { Box } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import {
  PortraitFrameWrapper,
  PortraitFrameContent,
  PortraitFrameContentText,
  PortraitFrameContentCarousel,
} from "./styled";
import FrameTitle from "./TitleFrame/title-frame";

const PortraitFrame = () => {
  return (
    <PortraitFrameWrapper>
      <PortraitFrameContent>
        <PortraitFrameContentText>
          <FrameTitle />
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
                src: "https://www.dropbox.com/s/o5xma1675d95p66/%D0%BF%D0%B5%D1%80%D0%B2%D0%B0%D1%8F.png?raw=1",
                key: "image1",
              },
              {
                src: "https://www.dropbox.com/s/1nowladji8dny59/%D0%B2%D1%82%D0%BE%D1%80%D0%B0%D1%8F.png?raw=1",
                key: "image2",
              },
              {
                src: "https://www.dropbox.com/s/szq1sa4mvw751rq/%D1%82%D1%80%D0%B5%D1%82%D1%8C%D1%8F.png?raw=1",
                key: "image3",
              },
              {
                src: "https://www.dropbox.com/s/mqt566qw6cibxa1/%D1%87%D0%B5%D1%82%D0%B2%D1%91%D1%80%D1%82%D0%B0%D1%8F.png?raw=1",
                key: "image4",
              },
              {
                src: "https://www.dropbox.com/s/wqxs1gc34oog4lf/%D0%BF%D1%8F%D1%82%D0%B0%D1%8F.png?raw=1",
                key: "image5",
              },
            ].map(({ src, key }) => (
              <Box height={370} key={key}>
                <img style={{ width: "100%" }} src={src} key={key} />
              </Box>
            ))}
          </Carousel>
        </PortraitFrameContentCarousel>
      </PortraitFrameContent>
    </PortraitFrameWrapper>
  );
};

export default PortraitFrame;
