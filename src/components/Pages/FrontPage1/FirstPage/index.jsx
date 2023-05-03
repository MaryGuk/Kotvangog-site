import { Box } from "@mui/material";
import {
  FirstPageWrapper,
  FirstPageGeneral,
  FirstPageInfo,
  FirstPageTitle,
  FirstPageTitleOne,
  FirstPage1ImageWrapper,
  FirstPageInfoItems,
  FirstPageInfoItemsOne,
  FirstPageInfoItemsIcon,
  FirstPageInfoItemsText,
  FirstPageInfoItemsTwo,
  FirstPageInfoItemsThree,
  FirstPageInfoMessage,
  FirstPageInfoMessageText,
} from "./styled";
import TitleOne from "./TitleOne/title-one";
import TitleTwo from "./TitleTwo/title-two";
import MainButton from "../../../Button/MainButton";
import Carousel from "react-material-ui-carousel";

const FirstPage = () => {
  return (
    <FirstPageWrapper>
      <FirstPageGeneral>
        <FirstPageInfo>
          <FirstPageTitle>
            <FirstPageTitleOne>
              <TitleOne />
            </FirstPageTitleOne>
            <Box>
              <TitleTwo />
            </Box>
          </FirstPageTitle>

          <FirstPageInfoItems>
            <FirstPageInfoItemsOne>
              <FirstPageInfoItemsIcon>
                <img
                  width="20px"
                  height="20px"
                  src="/images/background/check.png"
                />
              </FirstPageInfoItemsIcon>
              <FirstPageInfoItemsText>
                Полностью ручная отрисовка портрета художником
              </FirstPageInfoItemsText>
            </FirstPageInfoItemsOne>

            <FirstPageInfoItemsTwo>
              <FirstPageInfoItemsIcon>
                <img
                  width="20px"
                  height="20px"
                  src="/images/background/check.png"
                />
              </FirstPageInfoItemsIcon>
              <FirstPageInfoItemsText>
                Быстрое изготовление
              </FirstPageInfoItemsText>
            </FirstPageInfoItemsTwo>

            <FirstPageInfoItemsThree>
              <FirstPageInfoItemsIcon>
                <img
                  width="20px"
                  height="20px"
                  src="/images/background/check.png"
                />
              </FirstPageInfoItemsIcon>
              <FirstPageInfoItemsText>
                Качественные и безопасные материалы
              </FirstPageInfoItemsText>
            </FirstPageInfoItemsThree>
          </FirstPageInfoItems>

          <FirstPageInfoMessage>
            <FirstPageInfoMessageText>
              Нажмите на кнопку! Свяжемся с Вами в течение 5 минут
            </FirstPageInfoMessageText>
          </FirstPageInfoMessage>

          <MainButton />
        </FirstPageInfo>

        <FirstPage1ImageWrapper>
          <Carousel>
            {[
              "/images/Главная/Главное фото 1.jpg",
              "/images/Главная/Главное фото 2.jpg",
              "/images/Главная/Главное фото 3.jpg",
              "/images/Главная/Главное фото 4.jpg",
            ].map((src, idx) => (
              <img src={src} key={idx} />
            ))}
          </Carousel>
        </FirstPage1ImageWrapper>
      </FirstPageGeneral>
    </FirstPageWrapper>
  );
};

export default FirstPage;
