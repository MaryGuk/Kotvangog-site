import { pad, scale } from '@cloudinary/url-gen/actions/resize';
import { generativeFill } from '@cloudinary/url-gen/qualifiers/background';
import { useCloudinary } from '../providers/CloudinaryProvider';
import { AdvancedImage } from '@cloudinary/react';

const CloudinaryImage = ({
  cloudinaryId,
  width,
  height,
  scaleWidth,
  scaleHeight,
}) => {
  const { cld } = useCloudinary();

  const image = cld.image(cloudinaryId).format('auto').quality('auto');

  if (width || height) {
    image.resize(
      pad(width, height).gravity('center').background(generativeFill())
    );
  }

  if (scaleWidth || scaleHeight) {
    image.resize(scale(scaleWidth, scaleHeight));
  }

  return <AdvancedImage cldImg={image} />;
};

export default CloudinaryImage;
