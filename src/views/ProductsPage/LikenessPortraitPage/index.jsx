import LikenessPortrait from "../../../components/Pages/LikenessPortrait/likeness-portrait";
import { Box } from "@mui/material";
import ModernImages from "./ModernImages";
import Footer from "../../../components/Pages/Footer/footer";

const LikenessPortraitPage = () => {
  return (
    <Box>
      <LikenessPortrait />
      <ModernImages />
      <Footer />
    </Box>
  );
};

export default LikenessPortraitPage;
