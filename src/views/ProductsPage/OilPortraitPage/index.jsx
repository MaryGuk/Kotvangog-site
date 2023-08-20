import { Box } from "@mui/material";
import OilPortraitSecond from "./OilPortraitSecond";
import OilPortraitExamples from "./OilPortraitExamples";
import Footer from "../../../components/Pages/Footer/footer";
import FooterMobile from "../../../components/Pages/FooterMobile/index.jsx";
import { isMobile } from "react-device-detect";
import OilPage from "./OilPage2";
import PortraitFrame from "./PortraitFrame";
import ContactsSticky from "../../../components/Pages/ContactsSticky";
import ArtStylesSize from "../PortraitSizes/ArtStylesSize";

const OilPortraitPage = () => {
  return (
    <Box>
      <OilPage />
      <OilPortraitSecond />
      <OilPortraitExamples />
      {isMobile ? <PortraitFrame /> : null}
      <ArtStylesSize title="Портрет или картина маслом" oilPricePrefix="От"/>
      {isMobile ? <FooterMobile /> : <Footer />}
      {isMobile ? <ContactsSticky /> : null}
    </Box>
  );
};

export default OilPortraitPage;
