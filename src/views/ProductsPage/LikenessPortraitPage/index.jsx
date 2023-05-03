import LikenessPortrait from "../../../components/Pages/LikenessPortrait/likeness-portrait";
import { Box } from "@mui/material";
import ModernImages from "./ModernImages";
import Footer from "../../../components/Pages/Footer/footer";
import LikenessSize from "../PortraitSizes/LikenessSize";

const LikenessPortraitPage = () => {
  return (
    <Box>
      <LikenessPortrait />
      <ModernImages />
      <LikenessSize />
      <Footer />
    </Box>
  );
};

export default LikenessPortraitPage;
