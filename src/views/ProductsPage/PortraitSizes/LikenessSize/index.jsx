import {
  LikenessSizeDescription,
  LikenessSizeTextOneContainer,
  LikenessSizeTextOne,
  LikenessSizeTextTwoContainer,
  LikenessSizeTextTwo,
  LikenessSizeTextOneMore,
  LikenessSizeTextOneMoreContainer,
  LikenessSizeTextTwoMoreContainer,
  LikenessSizeTextTwoMore,
  LikenessSizeDescriptionWrapper,
} from "./styled";

import ArtStylesSize from "../ArtStylesSize";

const LikenessSize = () => {
  return (
    <>
      <ArtStylesSize
          title="Печать на холсте и картина маслом"
          printPricePrefix="Печать от"
          oilPricePrefix="Маслом от"
          alternatePrintPrices={[2280, 3040, 3790, 4540, 6290]}
          alternateOilPrices={[5600, 8800, 11900, 13700, 19500]}
      >
        <LikenessSizeDescriptionWrapper>
          <LikenessSizeDescription>
            <LikenessSizeTextOneContainer>
              <LikenessSizeTextOne>
                Стоимость дизайн-услуги фотоколлаж — 1090 руб./одно лицо
              </LikenessSizeTextOne>
            </LikenessSizeTextOneContainer>

            <LikenessSizeTextOneMoreContainer>
              <LikenessSizeTextOneMore>
                + 540 руб. каждое дополнительное лицо на картине.
              </LikenessSizeTextOneMore>
            </LikenessSizeTextOneMoreContainer>

            <LikenessSizeTextTwoContainer>
              <LikenessSizeTextTwo>
                Добавим самых важных для вас людей и домашних животных, любые
                детали, другой фон.
              </LikenessSizeTextTwo>
            </LikenessSizeTextTwoContainer>

            <LikenessSizeTextTwoMoreContainer>
              <LikenessSizeTextTwoMore>
                Дополнительная сложность в дизайн-макете от 540 руб.
              </LikenessSizeTextTwoMore>
            </LikenessSizeTextTwoMoreContainer>
          </LikenessSizeDescription>
        </LikenessSizeDescriptionWrapper>
      </ArtStylesSize>
    </>
  );
};

export default LikenessSize;
