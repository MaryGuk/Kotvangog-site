import HistoryGallery from "../HistoryGallery";
import ModernGallery from "./ModernGallery";
import {
  ModernImagesWrapper,
  ModernImagesGeneral,
  ModernImagesContent,
  ModernImagesDescription,
  HistoryImagesCollage,
  HistoryImagesCollageItems,
  HistoryImagesCollageImage,
  HistoryImagesCollageText,
  HistoryImagesCollageText1,
  HistoryImagesCollageText2,
  MobileLikenessOneContainer,
  MobileLikenessTextOne,
  MobileLikenessTextThree,
  MobileLikenessTextTwo,
  MobileLikenessThreeContainer,
  MobileLikenessTwoContainer,
} from "./styled";
import MobileCarousel from "../../../../components/MobileCarousel";
import {isMobile} from "react-device-detect";
import {Box} from "@mui/material";
import PreviewPhotoDialog from "../../../../components/PreviewPhotoDialog";
import usePreviewPhotoDialogState from "../../../../components/PreviewPhotoDialog/usePreviewPhotoDialogState";
import {modernImages} from "../../../../constants/galeries/modernImages";
import {historyImages} from "../../../../constants/galeries/historyImages";
import LikenessTitle from "./title-history";

const ModernImages = () => {
  const {
    isFirstPhoto,
    isLastPhoto,
    handlePrevPhoto,
    handleNextPhoto,
    fullImageSrcData,
    setFullImageSrcData
  } = usePreviewPhotoDialogState();

  return (
    <ModernImagesWrapper>
      <ModernImagesGeneral>
        <LikenessTitle text="Современные образы" />
        <ModernImagesContent>
          <ModernImagesDescription>
            У нас более <b>300</b> современных образов
          </ModernImagesDescription>
        </ModernImagesContent>
        {isMobile ?
          <Box p="30px 2px">
            <MobileCarousel
                imageList={modernImages.map(({ previewSrc}) => previewSrc)}
                columnCount={2}
                rowCount={3}
                onImageClick={(idx) => setFullImageSrcData({ gallery: modernImages, idx })}
            />
          </Box> :
            <ModernGallery modernImages={modernImages} setFullImageSrc={(src) => {
              const idx = modernImages.findIndex(({ fullSrc }) => fullSrc === src);

              setFullImageSrcData({gallery: modernImages, idx: idx < 0 ? 0 : idx })
            }}/>
        }
        <LikenessTitle text="Исторические образы" />
        <ModernImagesContent>
          <ModernImagesDescription>
            У нас более <b>300</b> исторических образов
          </ModernImagesDescription>
        </ModernImagesContent>

        {isMobile ? (
          <Box p="30px 2px">
            <MobileCarousel
              imageList={historyImages.map(({ previewSrc}) => previewSrc)}
              columnCount={2}
              rowCount={3}
              onImageClick={(idx) => setFullImageSrcData({ gallery: historyImages, idx })}
            />
          </Box>) : (<HistoryGallery/>)}

        <HistoryImagesCollage>
          <HistoryImagesCollageItems>
            <MobileLikenessOneContainer>
              <MobileLikenessTextOne>
                Не знаете какой образ подойдет?
              </MobileLikenessTextOne>
            </MobileLikenessOneContainer>
            <MobileLikenessTwoContainer>
              <MobileLikenessTextTwo>
                Мы бесплатно подберем 7-8 грубых макетов под ваше фото.
              </MobileLikenessTextTwo>
            </MobileLikenessTwoContainer>
            <MobileLikenessThreeContainer>
              <MobileLikenessTextThree>
                Вы сами выберите образ который вам понравится.
              </MobileLikenessTextThree>
            </MobileLikenessThreeContainer>
            <HistoryImagesCollageImage>
              <img
                width="100%"
                height="100%"
                src="https://www.dropbox.com/s/hkpkdq7dc1rwvfa/%D0%BA%D0%BE%D0%BB%D0%BB%D0%B0%D0%B6%20%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B5%D1%81%D1%81%D0%B8%D0%B2.jpg?raw=1"
                loading="lazy"
                decoding="async"
              />
            </HistoryImagesCollageImage>
            <HistoryImagesCollageText>
              <HistoryImagesCollageText1>
                Не знаете какой образ подойдет?
              </HistoryImagesCollageText1>
              <HistoryImagesCollageText2>
                Мы бесплатно подберем 7-8 грубых макетов под ваше фото.
              </HistoryImagesCollageText2>
            </HistoryImagesCollageText>
          </HistoryImagesCollageItems>
        </HistoryImagesCollage>
      </ModernImagesGeneral>

      <PreviewPhotoDialog
          open={fullImageSrcData !== null}
          onClose={() => setFullImageSrcData(null)}
          showPrevArrow={isFirstPhoto}
          showNextArrow={isLastPhoto}
          handlePrevPhoto={handlePrevPhoto}
          handleNextPhoto={handleNextPhoto}
          src={
              fullImageSrcData &&
              (fullImageSrcData.gallery[fullImageSrcData.idx] ?? fullImageSrcData.gallery[0]).fullSrc
          }
      />
    </ModernImagesWrapper>
  );
};

export default ModernImages;
