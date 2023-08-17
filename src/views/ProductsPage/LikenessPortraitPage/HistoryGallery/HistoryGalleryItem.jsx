import { Box } from "@mui/material";
import { useState } from "react";
import { HistoryImageItemWrapper } from "./styled";

const HistoryGalleryItem = ({ previewSrc, fullSrc, setFullImage }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const style = {
    transform: isHovered ? "scale(1.05)" : "scale(1)",
    transition: "transform 0.5s ease-in-out",
  };
  return (
    <Box>
      <HistoryImageItemWrapper onClick={() => setFullImage(fullSrc)}>
        <img
          src={previewSrc}
          width="100%"
          loading="lazy"
          decoding="async"
          alt=""
          style={style}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </HistoryImageItemWrapper>
    </Box>
  );
};

export default HistoryGalleryItem;
