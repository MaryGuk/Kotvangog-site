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
    </ModernImagesWrapper>
  );
};

export default ModernImages;
