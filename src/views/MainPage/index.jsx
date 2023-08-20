import AdvantagesPage from "../../components/Pages/AdvantagesPage/advantages-page";
import StylesPage from "../../components/Pages/StylesPage/styles-page";
import Footer from "../../components/Pages/Footer/footer";
import ProcessPage from "../../components/Pages/ProcessPage/process-page";
import { MainPageWrapper } from "./styled";
import OilPortrait from "../../components/Pages/OilPortrait/oil-portrait";
import LikenessPortrait from "../../components/Pages/LikenessPortrait/likeness-portrait";
import FirstPage from "../../components/Pages/FrontPage1/FirstPage";
import ArtStylesSize from "../ProductsPage/PortraitSizes/ArtStylesSize";
import { isMobile } from "react-device-detect";
import ProcessMaster from "../../components/Pages/ProcessPage/ProcessMaster/process-master";
import FooterMobile from "../../components/Pages/FooterMobile";
import ContactsSticky from "../../components/Pages/ContactsSticky";

const MainPage = () => {
  return (
    <MainPageWrapper>
      <FirstPage />
      <AdvantagesPage />
      <OilPortrait />
      <StylesPage />
      <LikenessPortrait />
      <ProcessPage />
      {isMobile ? <ProcessMaster /> : null}
      <ArtStylesSize title="Печать на холсте и картина маслом" printPricePrefix="Печать от" oilPricePrefix="Маслом от" />
      {isMobile ? <FooterMobile /> : <Footer />}
      {isMobile ? <ContactsSticky /> : null}
    </MainPageWrapper>
  );
};

export default MainPage;
