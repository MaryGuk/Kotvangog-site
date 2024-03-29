import { Box } from '@mui/material';
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
  ArrowGrayContainer,
  FirstPageInfoPart,
  CarouselImageWrapper,
} from './styled';
import TitleOne from './TitleOne/title-one';
import TitleTwo from './TitleTwo/title-two';
import MainButton from '../../../Button/MainButton';
import Carousel from 'react-material-ui-carousel';
import { isMobile } from 'react-device-detect';

const FirstPage = () => {
  return (
    <FirstPageWrapper>
      <FirstPageGeneral>
        <FirstPageInfo>
          <FirstPageInfoPart>
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
                    src={
                      isMobile
                        ? '/images/background/ellipse2.png'
                        : '/images/background/check.png'
                    }
                    alt=""
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
                    src={
                      isMobile
                        ? '/images/background/ellipse2.png'
                        : '/images/background/check.png'
                    }
                    alt=""
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
                    src={
                      isMobile
                        ? '/images/background/ellipse2.png'
                        : '/images/background/check.png'
                    }
                    alt=""
                  />
                </FirstPageInfoItemsIcon>
                <FirstPageInfoItemsText>
                  Качественные и безопасные материалы
                </FirstPageInfoItemsText>
              </FirstPageInfoItemsThree>
            </FirstPageInfoItems>
          </FirstPageInfoPart>

          <FirstPageInfoPart>
            <FirstPageInfoMessage>
              <FirstPageInfoMessageText>
                Нажмите на кнопку! Свяжемся с Вами в течение 5 минут
              </FirstPageInfoMessageText>
            </FirstPageInfoMessage>

            <ArrowGrayContainer>
              <img height="45px" src="/images/background/arrow first.png" alt="" />
            </ArrowGrayContainer>

            <MainButton />
          </FirstPageInfoPart>
        </FirstPageInfo>

        <FirstPage1ImageWrapper>
          {isMobile ? (
            <Box>
              <img
                src="https://www.dropbox.com/s/y84e5q7zb15f96p/111%20pr.jpg?raw=1"
                alt="Main"
              />
            </Box>
          ) : (
            <Carousel
              animation="fade"
              indicatorIconButtonProps={{
                style: {
                  display: 'none',
                },
              }}
            >
              {[
                {
                  src: 'https://www.dropbox.com/scl/fi/4gro68aqd27rpezwrvh8l/1200_-1.jpg?rlkey=pmb55xt55hzo5lu9qz6vxrt03&dl=0&raw=1',
                  key: 'image1',
                },
                {
                  src: 'https://www.dropbox.com/scl/fi/kzx56m03325x09gmss2c3/1200_1.jpg?rlkey=3etdysce18gpwh8fjv019xj5e&dl=0&raw=1',
                  key: 'image2',
                },
                {
                  src: 'https://www.dropbox.com/scl/fi/blte2qu43bz0hndunkyl6/1200_digital.jpg?rlkey=ef4umg20atz9tax7rzedtahok&dl=0&raw=1',
                  key: 'image3',
                },
                {
                  src: 'https://www.dropbox.com/scl/fi/2ood6qq8xqyrigrprokxd/1200_2_bak.png?rlkey=eka67a520amm338a5ki03fnu3&dl=0&raw=1',
                  key: 'image4',
                },
              ].map(({ src, key }) => (
                <CarouselImageWrapper key={key}>
                  <img src={src} key={key} loading="lazy" decoding="async" alt="" />
                </CarouselImageWrapper>
              ))}
            </Carousel>
          )}
        </FirstPage1ImageWrapper>
      </FirstPageGeneral>
    </FirstPageWrapper>
  );
};

export default FirstPage;
