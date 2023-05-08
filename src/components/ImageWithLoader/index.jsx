import React, { useState } from "react";
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
        <ImageLoaderBackground height={500} width={300}>
          <PaintbrushLoader width={150} />
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
