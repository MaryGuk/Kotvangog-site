import { Box } from "@mui/material";
import OilPortrait from "../../../components/Pages/OilPortrait/oil-portrait";
import OilPortraitSecond from "./OilPortraitSecond";
import OilPortraitExamples from "./OilPortraitExamples";

const OilPortraitPage = () => {
  return (
    <Box>
      <OilPortrait />
      <OilPortraitSecond />
      <OilPortraitExamples />
    </Box>
  );
};

export default OilPortraitPage;
