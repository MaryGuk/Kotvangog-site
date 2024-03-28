// import AdvantagesPage from '../../components/Pages/AdvantagesPage/advantages-page';
import StylesPage from '../../components/Pages/StylesPage/styles-page';
import Footer from '../../components/Pages/Footer/footer';
import ProcessPage from '../../components/Pages/ProcessPage/process-page';
import { MainPageWrapper } from './styled';
import OilPortrait from '../../components/Pages/OilPortrait/oil-portrait';
import ArtStylesSize from '../ProductsPage/PortraitSizes/ArtStylesSize';
import { isMobile } from 'react-device-detect';
import ProcessMaster from '../../components/Pages/ProcessPage/ProcessMaster/process-master';
import FooterMobile from '../../components/Pages/FooterMobile';
import ContactsSticky from '../../components/Pages/ContactsSticky';
import {
  LikenessMobileContent,
  LikenessMobileTextPart1,
  LikenessMobileTextPart2,
  LikenessMobileTextPart3,
} from '../../components/Pages/LikenessPortrait/styled';
import LikenessTitle from '../../components/Pages/LikenessPortrait/LikenessTitle/LikenessTitle';
import HeaderContacts from '../../components/Autumn2023Update/MainPage/HeaderContacts';
import { UnderHeaderBlock } from '../../components/Autumn2023Update/styled';
import MainSlide from '../../components/Autumn2023Update/MainPage/MainSlide';
import GiftAdvertisementSlide from '../../components/Autumn2023Update/MainPage/GiftAdvertisementSlide';
import OilCanvasArea from '../../components/Autumn2023Update/MainPage/OilCanvasArea';
import ArtStylesArea from '../../components/Autumn2023Update/MainPage/ArtStylesArea';
import { mainSlideAdvantages } from '../../constants/mainConstants';
import { useTheme } from '@mui/material/styles';

const MainPage = () => {
  const theme = useTheme();

  return (
    <MainPageWrapper>
      {isMobile && (
        <>
          <UnderHeaderBlock />
          <HeaderContacts />
        </>
      )}

      <MainSlide
        advantages={mainSlideAdvantages}
        title="Портреты по фото маслом и на холсте"
        description="За 1 день от 1350 руб"
        detailsColor={theme.palette.primary.main}
      />
      <GiftAdvertisementSlide />
      <OilCanvasArea />

      {isMobile ? (
        <>
          <ArtStylesArea />
        </>
      ) : (
        <>
          {/*<AdvantagesPage />*/}
          {/*<OilPortrait*/}
          {/*  title={'Классический портрет маслом'}*/}
          {/*  imageMobile={*/}
          {/*    'https://www.dropbox.com/s/6lkuknbtufgnex2/oil%20mobile2.png?raw=1'*/}
          {/*  }*/}
          {/*  imageDesktop={*/}
          {/*    'https://www.dropbox.com/scl/fi/iq5j40wn1qfxabp89ma0o/1400_oil-classic.png?rlkey=gafvctnfhn3w6e1t6tzg2ydzc&dl=0&raw=1'*/}
          {/*  }*/}
          {/*  advantages={[*/}
          {/*    'Полностью ручная роспись маслом',*/}
          {/*    'Художники с опытом рисования более 10 лет',*/}
          {/*    'Портретное сходство сохраняем на 100%',*/}
          {/*  ]}*/}
          {/*  descriptionMobile={*/}
          {/*    'Роспись опытным художником - это неповторимые произведения искусства, ' +*/}
          {/*    'которые будут радовать вас и ваших близких на протяжении многих лет.'*/}
          {/*  }*/}
          {/*  descriptionDesktop={[*/}
          {/*    {*/}
          {/*      text:*/}
          {/*        'Мы работаем с фотографиями любого формата и стиля, и готовы ' +*/}
          {/*        'предоставить вам консультацию по созданию лучшего портрета.',*/}
          {/*      bold: false,*/}
          {/*    },*/}
          {/*    {*/}
          {/*      text: 'Не упустите возможность сохранить важные моменты вашей жизни в искусстве.',*/}
          {/*      bold: true,*/}
          {/*    },*/}
          {/*    {*/}
          {/*      text: 'Обратитесь к нам сегодня, и мы с радостью поможем вам создать портреты, которые вы будете любить и ценить навсегда!',*/}
          {/*      bold: false,*/}
          {/*    },*/}
          {/*  ]}*/}
          {/*  linkToPage={'/oil-portrait'}*/}
          {/*/>*/}
          <StylesPage />
          <OilPortrait
            title={'Портрет в образе'}
            imageMobile={'/images/в образе моб.png'}
            imageDesktop={
              'https://www.dropbox.com/scl/fi/5ms2icxzh7gkbbw1n0kf2/1400_likeness-portrait.png?rlkey=5vvmwjjk1kbos4fjdd3g0dh6g&dl=0&raw=1'
            }
            advantages={[
              'Бесплатно подберем 7-8 грубых макетов.',
              'Более 600 тематических образов.',
              'Портретное сходство сохраняем на 100%',
            ]}
            descriptionMobile={
              'Не знаете какой образ подойдет? Мы бесплатно подберем 7-8 грубых макетов под ваше фото. Вы сами выберите образ который вам понравится.'
            }
            descriptionDesktop={[
              {
                text: 'Лучший способ удивить!',
                bold: true,
              },
              {
                text: 'Картина - это уже эффектный подарок, а картина в образе - это ещё и море улыбок, и добрая, долгая память.',
                bold: true,
              },
              {
                text: 'Если вам хочется большего, нежели перенос фото на холст — обратите внимание на эти работы.',
                bold: true,
              },
            ]}
            linkToPage={'/likeness-portrait'}
            customMobileDescription={
              <LikenessMobileContent>
                <LikenessMobileTextPart1>
                  Не знаете какой образ подойдет?
                </LikenessMobileTextPart1>
                <LikenessMobileTextPart2>
                  Мы бесплатно подберем 7-8 грубых макетов под ваше фото.
                </LikenessMobileTextPart2>
                <LikenessMobileTextPart3>
                  Вы сами выберите образ который вам понравится.
                </LikenessMobileTextPart3>
              </LikenessMobileContent>
            }
            customMobileTitle={<LikenessTitle />}
          />
        </>
      )}

      <ProcessPage />
      <ProcessMaster />
      <ArtStylesSize
        title="Печать на холсте и картина маслом"
        printPricePrefix="Печать от"
        oilPricePrefix="Маслом от"
      />
      {isMobile ? <FooterMobile /> : <Footer />}
      {isMobile ? <ContactsSticky /> : null}
    </MainPageWrapper>
  );
};

export default MainPage;
