import "./LikenessPortrait2/likeness-portrait2.jsx";
import { Box } from "@mui/material";
import ModernImages from "./ModernImages";
import Footer from "../../../components/Pages/Footer/footer";
import LikenessSize from "../PortraitSizes/LikenessSize";
import LikenessPortrait2 from "./LikenessPortrait2/likeness-portrait2.jsx";

const LikenessPortraitPage = () => {
  return (
    <Box>
      <LikenessPortrait2 />
      <ModernImages />
      <LikenessSize />
      <Footer />
    </Box>
  );
};

export default LikenessPortraitPage;
