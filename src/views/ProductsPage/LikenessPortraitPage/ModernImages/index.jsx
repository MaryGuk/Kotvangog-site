import ModernGallery from "./ModernGallery";
import {
  ModernImagesWrapper,
  ModernImagesGeneral,
  ModernImagesContent,
  ModernImagesDescription,
  ModernImagesGallery,
  ModernImagesItems,
} from "./styled";
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
      </ModernImagesGeneral>
    </ModernImagesWrapper>
  );
};

export default ModernImages;
