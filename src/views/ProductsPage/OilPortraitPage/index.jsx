import { Box } from "@mui/material";
import OilPortrait from "../../../components/Pages/OilPortrait/oil-portrait";
import OilPortraitSecond from "./OilPortraitSecond";
import OilPortraitExamples from "./OilPortraitExamples";
import Footer from "../../../components/Pages/Footer/footer";
import OilSize from "../PortraitSizes/OilSize";
import FooterMobile from "../../../components/Pages/FooterMobile/index.jsx";
import { isMobile } from "react-device-detect";
const OilPortraitPage = () => {
  return (
    <Box>
      <OilPortrait />
      <OilPortraitSecond />
      <OilPortraitExamples />
      <OilSize />
      {isMobile ? <FooterMobile /> : <Footer />}
    </Box>
  );
};

export default OilPortraitPage;
