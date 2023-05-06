import { Box } from "@mui/material";

import { ExamplesGallery, ExamplesGalleryContainer } from "./styled-examples";

const ExamplesItem = ({ previewSrc, fullSrc }) => {
  return (
    <ExamplesGalleryContainer>
      <ExamplesGallery>
        <img
          src={previewSrc}
          fullSrc={fullSrc}
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
