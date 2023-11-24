import './LikenessPortrait2/likeness-portrait2.jsx';
import { Box } from '@mui/material';
import ModernImages from './ModernImages';
import Footer from '../../../components/Pages/Footer/footer.jsx';
import LikenessSize from '../PortraitSizes/LikenessSize';
import LikenessPortrait2 from './LikenessPortrait2/likeness-portrait2.jsx';
import FooterMobile from '../../../components/Pages/FooterMobile/index.jsx';
import { isMobile } from 'react-device-detect';
import ContactsSticky from '../../../components/Pages/ContactsSticky';
import LikenessMobile from './LikenessPortrait2/LikenessMobile/index.jsx';

const LikenessPortraitPage = () => {
  return (
    <Box>
      {isMobile ? <LikenessMobile /> : <LikenessPortrait2 />}
      <ModernImages />
      <LikenessSize />
      {isMobile ? <FooterMobile /> : <Footer />}
      {isMobile ? <ContactsSticky /> : null}
    </Box>
  );
};

export default LikenessPortraitPage;
