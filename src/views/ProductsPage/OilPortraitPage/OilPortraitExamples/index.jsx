import {
  OilPortraitExamplesContent,
  OilPortraitExamplesGeneral,
  OilPortraitExamplesWrapper,
  OilPortraitExamplesGallery,
} from "./styled";
import TitleExamples from "./title-examples";
import { useState } from "react";
import ExamplesPhoto from "./ExamplesPhoto";
import Carousel from "react-material-ui-carousel";
import { isMobile } from "react-device-detect";
import PreviewPhotoDialog from "../../../../components/PreviewPhotoDialog";
import ExamplesItem from "./ExamplesItem";

const photosData = [
  {
    previewSrc:
      "https://www.dropbox.com/s/2gvk3t6dudso5jo/%D1%81%D1%81%D1%81CateA-3MasterJpeg9590JSWfile-830x1024.jpg?raw=1",
    fullSrc: "https://www.dropbox.com/s/4ffh7a75bnyq699/1%20ex.jpg?raw=1",
  },
  {
    previewSrc:
      "https://www.dropbox.com/s/osnvf6gut8uas9a/f57f2635792e8a3ef2a0b9423.jpg?raw=1",
    fullSrc: "https://www.dropbox.com/s/xvh6qe3vwkywml9/2%20ex.jpg?raw=1",
  },
  {
    previewSrc: "https://www.dropbox.com/s/q3bkugdd5bi97ac/786368962.jpg?raw=1",
    fullSrc: "https://www.dropbox.com/s/8ybf2mhoje2o5vv/3%20ex.jpg?raw=1",
  },
  {
    previewSrc:
      "https://www.dropbox.com/s/wyn207rkizzpkrg/P7474252e4452423.jpg?raw=1",
    fullSrc: "https://www.dropbox.com/s/7pcblcuqr9gp2p6/4%20ex.jpg?raw=1",
  },
  {
    previewSrc:
      "https://www.dropbox.com/s/gokfcznt0ciehbb/45343453587.jpg?raw=1",
    fullSrc: "https://www.dropbox.com/s/mcq8phohf0apth1/5%20ex.jpg?raw=1",
  },
  {
    previewSrc:
      "https://www.dropbox.com/s/5fu6v9nadbnj3y8/ffcdba7a3d0e3b235f93b29d548fbfea.jpg?raw=1",
    fullSrc: "https://www.dropbox.com/s/ectovpfpboe2atp/6%20ex.jpg?raw=1",
  },
  {
    previewSrc:
      "https://www.dropbox.com/s/wvcaif4o1dg88f2/%D0%91%D0%B5%D0%B7%20%D0%B8%D0%BC%D0%B5%D0%BD%D0%B8-1.jpg?raw=1",
    fullSrc: "https://www.dropbox.com/s/8de8pjdy1lpl265/7%20ex.jpg?raw=1",
  },
  {
    previewSrc:
      "https://www.dropbox.com/s/uiy43zcfjgv3k6i/Rodriguez-2MasterJpeg9557JSWfile-7.jpg?raw=1",
    fullSrc: "https://www.dropbox.com/s/w20tut6iyv04qjh/8%20ex.jpg?raw=1",
  },
];

const adaptivePhotosData = isMobile
  ? [0, 7, 6, 2, 1, 5, 3, 4].map((i) => photosData[i])
  : photosData;

const slicedPhotosData = adaptivePhotosData.reduce((acc, curr, idx) => {
  if (idx % 4) {
    acc[acc.length - 1].push(curr);
  } else {
    acc.push([curr]);
  }

  return acc;
}, []);

const OilPortraitExamples = () => {
  const [fullImageSrcId, setFullImageSrcId] = useState(null);
  const [autoPlay, setAutoPlay] = useState(photosData.length);

  const isFirstPhoto = fullImageSrcId <= 0;
  const isLastPhoto = fullImageSrcId >= adaptivePhotosData.length - 1;

  const handleNextPhoto = () =>
    setFullImageSrcId((prev) =>
      prev + 1 >= adaptivePhotosData.length
        ? adaptivePhotosData.length - 1
        : prev + 1
    );
  const handlePrevPhoto = () =>
    setFullImageSrcId((prev) => (prev > 0 ? prev - 1 : 0));

  return (
    <OilPortraitExamplesWrapper>
      <OilPortraitExamplesGeneral>
        <TitleExamples />
        <OilPortraitExamplesContent>
          {isMobile ? (
            <Carousel
              animation="slide"
              swipeable
              showArrows={false}
              navButtonsAlwaysInvisible
              autoPlay={autoPlay}
              changeOnFirstRender
              interval={1000}
              indicators={false}
            >
              {slicedPhotosData.map((photosArray, idx) => (
                <ExamplesPhoto
                  key={idx}
                  setFullImageSrc={(src) => {
                    const index = adaptivePhotosData.findIndex(
                      ({ fullSrc }) => fullSrc === src
                    );
                    setFullImageSrcId(index < 0 ? 0 : index);
                  }}
                  photosArray={photosArray}
                  onImageLoad={() => setAutoPlay((prev) => prev - 1)}
                />
              ))}
            </Carousel>
          ) : (
            <OilPortraitExamplesGallery>
              {photosData.map(({ previewSrc, fullSrc }, idx) => (
                <ExamplesItem
                  key={idx}
                  previewSrc={previewSrc}
                  fullSrc={fullSrc}
                  setFullImage={setFullImageSrcId}
                />
              ))}
            </OilPortraitExamplesGallery>
          )}
        </OilPortraitExamplesContent>
      </OilPortraitExamplesGeneral>

      <PreviewPhotoDialog
        open={fullImageSrcId !== null}
        onClose={() => setFullImageSrcId(null)}
        showPrevArrow={isFirstPhoto}
        showNextArrow={isLastPhoto}
        handlePrevPhoto={handlePrevPhoto}
        handleNextPhoto={handleNextPhoto}
        src={
          fullImageSrcId !== null &&
          (adaptivePhotosData[fullImageSrcId] ?? adaptivePhotosData[0]).fullSrc
        }
      />
    </OilPortraitExamplesWrapper>
  );
};

export default OilPortraitExamples;
