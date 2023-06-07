import { Box } from "@mui/material";
import { ModernImagesGallery, ModernImagesItems } from "./styled";
import ModernGalleryItem from "./ModernGalleryItem";

const ModernGallery = ({ modernImages, setFullImageSrc }) => {
  return (
    <Box>
      <ModernImagesGallery>
        <ModernImagesItems>
          {modernImages.map(({ previewSrc, fullSrc }, idx) => (
            <ModernGalleryItem
              key={idx}
              previewSrc={previewSrc}
              fullSrc={fullSrc}
              setFullImage={setFullImageSrc}
            />
          ))}
        </ModernImagesItems>
      </ModernImagesGallery>
    </Box>
  );
};

export default ModernGallery;
