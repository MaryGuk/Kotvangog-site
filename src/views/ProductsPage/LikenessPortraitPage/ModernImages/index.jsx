import HistoryGallery from '../HistoryGallery';
import ModernGallery from './ModernGallery';
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
} from './styled';
import MobileCarousel from '../../../../components/MobileCarousel';
import { isMobile } from 'react-device-detect';
import { Box, Typography } from '@mui/material';
import PreviewPhotoDialog from '../../../../components/PreviewPhotoDialog';
import usePreviewPhotoDialogState from '../../../../components/PreviewPhotoDialog/usePreviewPhotoDialogState';
import { modernImages } from '../../../../constants/galleries/modernImages';
import { historyImages } from '../../../../constants/galleries/historyImages';
import BrashTitle from '../../../../components/Autumn2023Update/BrashTitle';
import { BestGiftHeaderSmearSrc } from '../../../../constants/galleries/smears';
import brashSrc from '../../../../images/brashes/brash7.svg';

const ModernImages = () => {
  const {
    isFirstPhoto,
    isLastPhoto,
    handlePrevPhoto,
    handleNextPhoto,
    fullImageSrcData,
    setFullImageSrcData,
  } = usePreviewPhotoDialogState();

  return (
    <ModernImagesWrapper>
      <ModernImagesGeneral>
        <BrashTitle
          brashSrc={BestGiftHeaderSmearSrc}
          translateX={0}
          translateY={0}
          brashWidth="20rem"
        >
          <Typography variant="h4">Современные образы</Typography>
        </BrashTitle>
        <ModernImagesContent>
          <ModernImagesDescription>
            <Typography variant="body2">
              У нас более <b>300</b> современных образов
            </Typography>
          </ModernImagesDescription>
        </ModernImagesContent>
        {isMobile ? (
          <Box p="30px 2px">
            <MobileCarousel
              imageList={modernImages.map(({ previewSrc }) => previewSrc)}
              columnCount={2}
              rowCount={3}
              onImageClick={(idx) =>
                setFullImageSrcData({ gallery: modernImages, idx })
              }
            />
          </Box>
        ) : (
          <ModernGallery
            modernImages={modernImages}
            setFullImageSrc={(src) => {
              const idx = modernImages.findIndex(
                ({ fullSrc }) => fullSrc === src
              );

              setFullImageSrcData({
                gallery: modernImages,
                idx: idx < 0 ? 0 : idx,
              });
            }}
          />
        )}
        <BrashTitle brashSrc={brashSrc} brashWidth="20rem" translateY={-5}>
          <Typography variant="h4">Исторические образы</Typography>
        </BrashTitle>
        <ModernImagesContent>
          <ModernImagesDescription>
            <Typography variant="body2">
              У нас более <b>300</b> исторических образов
            </Typography>
          </ModernImagesDescription>
        </ModernImagesContent>

        {isMobile ? (
          <Box p="30px 2px 20px">
            <MobileCarousel
              imageList={historyImages.map(({ previewSrc }) => previewSrc)}
              columnCount={2}
              rowCount={3}
              onImageClick={(idx) =>
                setFullImageSrcData({ gallery: historyImages, idx })
              }
            />
          </Box>
        ) : (
          <HistoryGallery />
        )}

        <HistoryImagesCollage>
          <HistoryImagesCollageItems>
            <MobileLikenessOneContainer>
              <MobileLikenessTextOne>
                Не знаете какой образ подойдет?
              </MobileLikenessTextOne>
            </MobileLikenessOneContainer>
            <MobileLikenessTwoContainer>
              <MobileLikenessTextTwo>
                Мы подберем 7-8 грубых макетов под ваше фото.
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
                src="https://www.dropbox.com/scl/fi/r2yewvz5qwh7wq2lwcwmf/1300_193745.png?rlkey=uh2sbcfwcz3nlymmzia2n5bsx&dl=0&raw=1"
                loading="lazy"
                decoding="async"
                alt=""
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
          (
            fullImageSrcData.gallery[fullImageSrcData.idx] ??
            fullImageSrcData.gallery[0]
          ).fullSrc
        }
      />
    </ModernImagesWrapper>
  );
};

export default ModernImages;
