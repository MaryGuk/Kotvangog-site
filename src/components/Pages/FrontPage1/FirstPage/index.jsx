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
          <Carousel animation="fade">
            {[
              "https://www.dropbox.com/s/9my6s654mpsqu3v/%D0%93%D0%BB%D0%B0%D0%B2%D0%BD%D0%BE%D0%B5%20%D1%84%D0%BE%D1%82%D0%BE.jpg?raw=1",
              "https://www.dropbox.com/s/8tddnzx8pvzc3xp/%D0%93%D0%BB%D0%B0%D0%B2%D0%BD%D0%BE%D0%B5%20%D1%84%D0%BE%D1%82%D0%BE%202.jpg?raw=1",
              "https://www.dropbox.com/s/qjob9pcnxgk3t3s/%D0%93%D0%BB%D0%B0%D0%B2%D0%BD%D0%BE%D0%B5%20%D1%84%D0%BE%D1%82%D0%BE%203.jpg?raw=1",
              "https://www.dropbox.com/s/s93xw6avte7lufx/%D0%93%D0%BB%D0%B0%D0%B2%D0%BD%D0%BE%D0%B5%20%D1%84%D0%BE%D1%82%D0%BE%204.jpg?raw=1",
            ].map((src, idx) => (
              <Box height={600}>
                <img src={src} key={idx} loading="lazy" decoding="async" />
              </Box>
            ))}
          </Carousel>
        </FirstPage1ImageWrapper>
      </FirstPageGeneral>
    </FirstPageWrapper>
  );
};

export default FirstPage;
