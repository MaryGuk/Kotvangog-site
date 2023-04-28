import { Box } from "@mui/material";
import OilPortrait from "../../../components/Pages/OilPortrait/oil-portrait";
import OilPortraitSecond from "./OilPortraitSecond";
import OilPortraitExamples from "./OilPortraitExamples";
import Footer from "../../../components/Pages/Footer/footer";
const OilPortraitPage = () => {
  return (
    <Box>
      <OilPortrait />
      <OilPortraitSecond />
      <OilPortraitExamples />
      <Footer />
    </Box>
  );
};

export default OilPortraitPage;
