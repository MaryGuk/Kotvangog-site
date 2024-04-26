import './LikenessPortrait2/likeness-portrait2.jsx';
import ModernImages from './ModernImages';
import Footer from '../../../components/Pages/Footer/footer.jsx';
import LikenessSize from '../PortraitSizes/LikenessSize';
// import LikenessPortrait2 from './LikenessPortrait2/likeness-portrait2.jsx';
import FooterMobile from '../../../components/Pages/FooterMobile/index.jsx';
import { isMobile } from 'react-device-detect';
import ContactsSticky from '../../../components/Pages/ContactsSticky';
import LikenessMobile from './LikenessPortrait2/LikenessMobile/index.jsx';
import MainSlide from '../../../components/Autumn2023Update/MainPage/MainSlide';
import { likenessSlideAdvantages } from '../../../constants/mainConstants';
import { LikenessPortraitPageWrapper } from './styled';

const LikenessPortraitPage = () => {
  return (
    <LikenessPortraitPageWrapper>
      {
        isMobile ? (
          <LikenessMobile />
        ) : (
          <MainSlide
            advantages={likenessSlideAdvantages}
            title="Портрет в образе"
            description="За 1 день от 1350 руб"
            detailsColor="secondary"
          />
        )
        // <LikenessPortrait2 />
      }
      <ModernImages />
      <LikenessSize />
      {isMobile ? <FooterMobile /> : <Footer />}
      {isMobile ? <ContactsSticky /> : null}
    </LikenessPortraitPageWrapper>
  );
};

export default LikenessPortraitPage;
