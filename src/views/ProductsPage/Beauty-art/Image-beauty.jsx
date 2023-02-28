import { experimentalStyled as styled } from "@mui/material";
import { Box } from "@mui/system";
import { useMemo } from "react";
import Carousel from "react-material-ui-carousel";

const BeautyArtGalleryWrapper = styled(Box)((props) => ({
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  gridColumnGap: "5px",
  gridAutoFlow: "dense",
  direction: props.reverse ? "rtl" : "ltl",
}));

const getPortionsBy = (arr, count) => {
  if (arr.length > count) {
    return [arr.slice(0, count), ...getPortionsBy(arr.slice(count), count)];
  }

  return [arr];
};

const ImageGallery = ({ galleryImages, setFullImage, reverse }) => {
  const imagePortionsArray = useMemo(
    () => galleryImages && getPortionsBy(galleryImages, 5),
    [galleryImages]
  );

  return (
    //
    <Carousel>
      {imagePortionsArray?.map((portion) => (
        <BeautyArtGalleryWrapper reverse={reverse}>
          {portion.map(({ previewSrc, fullSrc }) => (
            <div onClick={() => setFullImage(fullSrc)}>
              <img className="beauty-art__image" src={previewSrc} alt="123" />
            </div>
          ))}
        </BeautyArtGalleryWrapper>
      ))}
    </Carousel>
    //
  );
};

export default ImageGallery;
