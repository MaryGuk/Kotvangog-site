import { ExamplesGallery, ExamplesGalleryContainer } from "./styled-examples";

const ExamplesItem = ({ previewSrc, fullSrc, setFullImage }) => {
  return (
    <ExamplesGalleryContainer>
      <ExamplesGallery onClick={() => setFullImage(fullSrc)}>
        <img
          src={previewSrc}
          fullSrc={fullSrc}
          setFullImage={setFullImage}
          width="240px"
          height="310px"
          loading="lazy"
          decoding="async"
          alt=""
        />
      </ExamplesGallery>
    </ExamplesGalleryContainer>
  );
};

export default ExamplesItem;
