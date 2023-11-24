import { ArtStylesAreaWrapper } from './styled';
import ArtStyleSlide from './artStyleSlide';
import YellowBrash from '../../../../images/brashes/brash4.svg';
import BlueBrash from '../../../../images/brashes/brash5.svg';
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
        brashSrc={BlueBrash}
        gallery={artStylesData}
      />
      <ArtStyleSlide
        slideTitle="Портрет в образе"
        brashSrc={YellowBrash}
        gallery={likenessPhotos}
      />
      <ArtStyleSlide
        slideTitle="Портрет питомца"
        brashSrc={BlueBrash}
        gallery={petsPhotos}
      />
    </ArtStylesAreaWrapper>
  );
};

export default ArtStylesArea;
