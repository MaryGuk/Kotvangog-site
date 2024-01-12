import { ExamplesGallery, ExamplesGalleryContainer } from './styled-examples';
import { useState } from 'react';

const ExamplesItem = ({ previewSrc, fullSrc, setFullImage, onImageLoad }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const style = {
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
    transition: 'transform 0.5s ease-in-out',
  };
  return (
    <ExamplesGalleryContainer>
      <ExamplesGallery style={style} onClick={() => setFullImage(fullSrc)}>
        <img
          src={previewSrc}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          height="300px"
          loading="lazy"
          decoding="async"
          onLoad={onImageLoad}
          alt=""
        />
      </ExamplesGallery>
    </ExamplesGalleryContainer>
  );
};

export default ExamplesItem;
