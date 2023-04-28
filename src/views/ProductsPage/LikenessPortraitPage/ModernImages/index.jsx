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
} from "./styled";
import TitleHistory from "./title-history";
import TitleModern from "./title-modern";

const ModernImages = () => {
  return (
    <ModernImagesWrapper>
      <ModernImagesGeneral>
        <TitleModern />
        <ModernImagesContent>
          <ModernImagesDescription>
            У нас более <b>300</b> современных образов
          </ModernImagesDescription>
        </ModernImagesContent>
        <ModernGallery />
        <TitleHistory />
        <ModernImagesContent>
          <ModernImagesDescription>
            У нас более <b>300</b> исторических образов
          </ModernImagesDescription>
        </ModernImagesContent>
        <HistoryGallery />

        <HistoryImagesCollage>
          <HistoryImagesCollageItems>
            <HistoryImagesCollageImage>
              <img
                width="450px"
                height="408px"
                src="/images/HistoryImages/коллаж.png"
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
    </ModernImagesWrapper>
  );
};

export default ModernImages;
