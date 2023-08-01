import { useState } from "react";
import PaintbrushLoader from "./PaintbrushLoader";
import { ImageLoaderBackground } from "./styled";

const ImageWithLoader = ({ src, alt, height, width, ...props }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <>
      {!isImageLoaded && (
        <ImageLoaderBackground>
          <PaintbrushLoader width={400} />
        </ImageLoaderBackground>
      )}
      <img
        {...props}
        height={height}
        width={width}
        src={src}
        alt={alt}
        onLoad={handleImageLoad}
        style={{ display: isImageLoaded ? "block" : "none" }}
      />
    </>
  );
};

export default ImageWithLoader;
