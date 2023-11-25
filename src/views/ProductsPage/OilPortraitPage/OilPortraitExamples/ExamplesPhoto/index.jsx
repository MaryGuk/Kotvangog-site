import { OilPortraitExamplesGallery } from '../styled';
import ExamplesItem from '../ExamplesItem';

const ExamplesPhoto = ({ photosArray, setFullImageSrc, onImageLoad }) => {
  return (
    <OilPortraitExamplesGallery>
      {photosArray.map(({ previewSrc, fullSrc }, idx) => (
        <ExamplesItem
          key={idx}
          previewSrc={previewSrc}
          fullSrc={fullSrc}
          setFullImage={setFullImageSrc}
          onImageLoad={onImageLoad}
        />
      ))}
    </OilPortraitExamplesGallery>
  );
};

export default ExamplesPhoto;
