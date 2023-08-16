import { Box } from "@mui/material";
import {HistoryImagesGallery, HistoryImagesGalleryWrapper} from "./styled";
import { useState } from "react";
import { Dialog } from "@mui/material";
import HistoryGalleryItem from "./HistoryGalleryItem";
import ImageWithLoader from "../../../../components/ImageWithLoader";
import {historyImages} from "../../../../constants/galeries/historyImages";

const HistoryGallery = () => {
  const [fullImageSrc, setFullImageSrc] = useState(null);
  return (
    <HistoryImagesGalleryWrapper>
      <HistoryImagesGallery>
        {historyImages.map(({ previewSrc, fullSrc }, idx) => (
          <HistoryGalleryItem
            key={idx}
            previewSrc={previewSrc}
            fullSrc={fullSrc}
            setFullImage={setFullImageSrc}
          />
        ))}
      </HistoryImagesGallery>
      <Dialog open={!!fullImageSrc} onClose={() => setFullImageSrc(null)}>
        <Box height="500px" overflow="hidden">
          <ImageWithLoader height="100%" src={fullImageSrc} alt="" />
        </Box>
      </Dialog>
    </HistoryImagesGalleryWrapper>
  );
};

export default HistoryGallery;
