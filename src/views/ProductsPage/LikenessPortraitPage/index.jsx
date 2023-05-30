import "./LikenessPortrait2/likeness-portrait2.jsx";
import { Box } from "@mui/material";
import ModernImages from "./ModernImages";
import Footer from "../../../components/Pages/Footer/footer.jsx";
import LikenessSize from "../PortraitSizes/LikenessSize";
import LikenessPortrait2 from "./LikenessPortrait2/likeness-portrait2.jsx";
import FooterMobile from "../../../components/Pages/FooterMobile/index.jsx";
import { isMobile } from "react-device-detect";

const LikenessPortraitPage = () => {
  return (
    <Box>
      <LikenessPortrait2 />
      <ModernImages />
      <LikenessSize />
      {isMobile ? <FooterMobile /> : <Footer />}
    </Box>
  );
};

export default LikenessPortraitPage;
