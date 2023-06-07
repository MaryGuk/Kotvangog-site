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
import TitleHistory from "./title-history";
import TitleModern from "./title-modern";
import MobileCarousel from "../../../../components/MobileCarousel";
import {isMobile} from "react-device-detect";
import {Box} from "@mui/material";
import PreviewPhotoDialog from "../../../../components/PreviewPhotoDialog";
import usePreviewPhotoDialogState from "../../../../components/PreviewPhotoDialog/usePreviewPhotoDialogState";

const modernImages = [
  {
    previewSrc:
        " https://www.dropbox.com/s/1l7km1tfs1dqejf/78637387.jpg?raw=1",
    fullSrc:
        "https://www.dropbox.com/s/7i4edocw0ch8y5n/1%20%D1%81%D0%BE%D0%B2.jpg?raw=1",
  },
  {
    previewSrc:
        "https://www.dropbox.com/s/zs03zpkrksh4z3p/1200_60%D1%8560.jpg?raw=1",
    fullSrc:
        "https://www.dropbox.com/s/8vzgpzgwl1pfgvy/2%20%D1%81%D0%BE%D0%B2.jpg?raw=1",
  },
  {
    previewSrc:
        "https://www.dropbox.com/s/6l6l5iv37nmzxi5/1655897.jpg?raw=1",
    fullSrc:
        "https://www.dropbox.com/s/v7aex39jw4sns2h/3%20%D1%81%D0%BE%D0%B2.jpg?raw=1",
  },
  {
    previewSrc:
        "https://www.dropbox.com/s/bs38jxj9is2bpb7/7863838.jpg?raw=1",
    fullSrc:
        "https://www.dropbox.com/s/nfocse5n3f8r5wn/4%20%D1%81%D0%BE%D0%B2.jpg?raw=1",
  },
  {
    previewSrc:
        "https://www.dropbox.com/s/yvta5m0qic24o9m/25454.jpg?raw=1",
    fullSrc:
        "https://www.dropbox.com/s/xtg7uqnpd6oyut1/5%20%D1%81%D0%BE%D0%B2.jpg?raw=1",
  },
  {
    previewSrc:
        "https://www.dropbox.com/s/yzuzwxlko82zjlv/6066_40%D1%8560.jpg?raw=1",
    fullSrc:
        "https://www.dropbox.com/s/a00yuvwfr6fjw5c/6%20%D1%81%D0%BE%D0%B2.jpg?raw=1",
  },
  {
    previewSrc:
        "https://www.dropbox.com/s/2gkkxivrm53xehg/4757838.jpg?raw=1",
    fullSrc:
        "https://www.dropbox.com/s/evbhunwxe5nl81n/7%20%D1%81%D0%BE%D0%B2.jpg?raw=1",
  },
  {
    previewSrc:
        "https://www.dropbox.com/s/sc5w6hgk2k60ox6/Rodriguez-2MasterJpeg9557JSWfile-753x1024.jpg?raw=1",
    fullSrc:
        "https://www.dropbox.com/s/6i3f5tidhq14km3/8%20%D1%81%D0%BE%D0%B2.jpg?raw=1",
  },
  {
    previewSrc:
        "https://www.dropbox.com/s/po2d9anmj0j7ls1/5190_50%D1%85701.jpg?raw=1",
    fullSrc:
        "https://www.dropbox.com/s/8r33qryxtf521xm/9%20%D1%81%D0%BE%D0%B2.jpg?raw=1",
  },
  {
    previewSrc:
        " https://www.dropbox.com/s/an8343715jxzuk7/563783.jpg?raw=1",
    fullSrc:
        "https://www.dropbox.com/s/n0adj33in80mxtu/10%20%D1%81%D0%BE%D0%B2.jpg?raw=1",
  },
  {
    previewSrc:
        "   https://www.dropbox.com/s/xdrjvc3wylb6q5v/42402b882aaa5309efcde742.jpg?raw=1",
    fullSrc:
        "https://www.dropbox.com/s/8gw5jispducmchu/11%20%D1%81%D0%BE%D0%B2.jpg?raw=1",
  },
  {
    previewSrc:
        "https://www.dropbox.com/s/flxkpyikmcp6d81/a4d4dca9a7e79172ece7be5.jpg?raw=1",
    fullSrc:
        "https://www.dropbox.com/s/7aw7yemyybpt1m0/12%20%D1%81%D0%BE%D0%B2.jpg?raw=1",
  },
];

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
        <TitleModern />
        <ModernImagesContent>
          <ModernImagesDescription>
            У нас более <b>300</b> современных образов
          </ModernImagesDescription>
        </ModernImagesContent>
        {isMobile ?
          <Box pl="30px" pr="30px">
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
        <TitleHistory />
        <ModernImagesContent>
          <ModernImagesDescription>
            У нас более <b>300</b> исторических образов
          </ModernImagesDescription>
        </ModernImagesContent>

        <HistoryGallery />

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
