import { Box } from "@mui/material";

const HistoryGalleryItem = ({ previewSrc, fullSrc, setFullImage }) => {
  return (
    <Box>
      <Box onClick={() => setFullImage(fullSrc)}>
        <img
          src={previewSrc}
          fullSrc={fullSrc}
          setFullImage={setFullImage}
          width="190px"
          height="245px"
          loading="lazy"
          decoding="async"
          alt=""
        />
      </Box>
    </Box>
  );
};

export default HistoryGalleryItem;
