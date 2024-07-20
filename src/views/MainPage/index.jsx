import StylesPage from '../../components/Pages/StylesPage/styles-page';
import Footer from '../../components/Pages/Footer/footer';
import ProcessPage from '../../components/Pages/ProcessPage/process-page';
import { MainPageWrapper } from './styled';
import ArtStylesSize from '../ProductsPage/PortraitSizes/ArtStylesSize';
import { isMobile } from 'react-device-detect';
import ProcessMaster from '../../components/Pages/ProcessPage/ProcessMaster/process-master';
import FooterMobile from '../../components/Pages/FooterMobile';
import ContactsSticky from '../../components/Pages/ContactsSticky';
import HeaderContacts from '../../components/Autumn2023Update/MainPage/HeaderContacts';
import { UnderHeaderBlock } from '../../components/Autumn2023Update/styled';
import MainSlide from '../../components/Autumn2023Update/MainPage/MainSlide';
import GiftAdvertisementSlide from '../../components/Autumn2023Update/MainPage/GiftAdvertisementSlide';
import OilCanvasArea from '../../components/Autumn2023Update/MainPage/OilCanvasArea';
import ArtStylesArea from '../../components/Autumn2023Update/MainPage/ArtStylesArea';
import { mainSlideAdvantages } from '../../constants/mainConstants';

const MainPage = () => {
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
        detailsColor="primary"
      />
      <GiftAdvertisementSlide />
      <OilCanvasArea />

      {isMobile ? <ArtStylesArea /> : <StylesPage />}

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
