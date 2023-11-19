import { ArtStylesAreaWrapper } from "./styled";
import ArtStyleSlide from "./artStyleSlide";
import BlueBrash from '../../../../images/brashes/brash4.svg';
import YellowBrash from '../../../../images/brashes/brash5.svg';
import {likenessPhotos, petsPhotos} from "../../../../constants/galeries/art-styles";

const ArtStylesArea = () => {
  return (
    <ArtStylesAreaWrapper>
      <ArtStyleSlide slideTitle="Портрет в образе" brashSrc={BlueBrash} gallery={likenessPhotos} />
      <ArtStyleSlide slideTitle="Портрет питомца" brashSrc={YellowBrash} gallery={petsPhotos} />
    </ArtStylesAreaWrapper>
  );
}

export default ArtStylesArea;
