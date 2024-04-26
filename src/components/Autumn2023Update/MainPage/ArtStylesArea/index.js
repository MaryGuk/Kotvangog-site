import { ArtStylesAreaWrapper } from './styled';
import ArtStyleSlide from './artStyleSlide';
import YellowBrush from '../../../../images/brushes/brush4.svg';
import BlueBrush from '../../../../images/brushes/brush5.svg';
import {
  artStylesData,
  likenessPhotos,
  petsPhotos,
} from '../../../../constants/galleries/art-styles';

const ArtStylesArea = () => {
  return (
    <ArtStylesAreaWrapper>
      <ArtStyleSlide
        slideTitle="Арт стили"
        brushSrc={BlueBrush}
        gallery={artStylesData}
      />
      <ArtStyleSlide
        slideTitle="Портрет в образе"
        brushSrc={YellowBrush}
        gallery={likenessPhotos}
      />
      <ArtStyleSlide
        slideTitle="Портрет питомца"
        brushSrc={BlueBrush}
        gallery={petsPhotos}
      />
    </ArtStylesAreaWrapper>
  );
};

export default ArtStylesArea;
