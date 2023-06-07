import {
  OilPortraitExamplesContent,
  OilPortraitExamplesGeneral,
  OilPortraitExamplesWrapper,
  OilPortraitExamplesGallery,
} from "./styled";
import TitleExamples from "./title-examples";
import { isMobile } from "react-device-detect";
import PreviewPhotoDialog from "../../../../components/PreviewPhotoDialog";
import ExamplesItem from "./ExamplesItem";
import MobileCarousel from "../../../../components/MobileCarousel";
import usePreviewPhotoDialogState from "../../../../components/PreviewPhotoDialog/usePreviewPhotoDialogState";
import {photosData} from "../../../../constants/galeries/photosData";
import {Box} from "@mui/material";


const adaptivePhotosData = isMobile
  ? [0, 7, 6, 2, 1, 5, 3, 4].map((i) => photosData[i])
  : photosData;

const OilPortraitExamples = () => {
  const {
    isFirstPhoto,
    isLastPhoto,
    handlePrevPhoto,
    handleNextPhoto,
    fullImageSrcData,
    setFullImageSrcData
  } = usePreviewPhotoDialogState();

  return (
    <OilPortraitExamplesWrapper>
      <OilPortraitExamplesGeneral>
        <TitleExamples />
        <OilPortraitExamplesContent>
          {isMobile ? (
            <Box p="30px 2px">
              <MobileCarousel
                  imageList={adaptivePhotosData.map(({ previewSrc}) => previewSrc)}
                  columnCount={2}
                  rowCount={2}
                  onImageClick={(idx) => setFullImageSrcData({ gallery: adaptivePhotosData, idx })}
              />
            </Box>
          ) : (
            <OilPortraitExamplesGallery>
              {photosData.map(({ previewSrc, fullSrc }, idx) => (
                <ExamplesItem
                  key={idx}
                  previewSrc={previewSrc}
                  fullSrc={fullSrc}
                  setFullImage={(src) => {
                    const idx = photosData.findIndex(({ fullSrc }) => fullSrc === src);
                    setFullImageSrcData({gallery: photosData, idx: idx < 0 ? 0 : idx })
                  }}
                />
              ))}
            </OilPortraitExamplesGallery>
          )}
        </OilPortraitExamplesContent>
      </OilPortraitExamplesGeneral>

      <PreviewPhotoDialog
        open={fullImageSrcData !== null}
        onClose={() => setFullImageSrcData(null)}
        showPrevArrow={isFirstPhoto}
        showNextArrow={isLastPhoto}
        handlePrevPhoto={handlePrevPhoto}
        handleNextPhoto={handleNextPhoto}
        src={
            fullImageSrcData !== null &&
          (fullImageSrcData.gallery[fullImageSrcData.idx] ?? fullImageSrcData.gallery[0]).fullSrc
        }
      />
    </OilPortraitExamplesWrapper>
  );
};

export default OilPortraitExamples;
