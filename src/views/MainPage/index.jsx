import React from "react";
import { Box } from "@mui/material";
import AdvantagesPage from "../../components/Pages/AdvantagesPage/advantages-page";
import StylesPage from "../../components/Pages/StylesPage/styles-page";
import WorkingPage from "../../components/Pages/WorkingPage/working-page";
import Footer from "../../components/Pages/Footer/footer";
import FrontPage from "../../components/Pages/FrontPage/front-page";
import FrontPage1 from "../../components/Pages/FrontPage1/front-page1";

const MainPage = () => {
  return (
    <Box>
      {/* <FrontPage /> */}
      <FrontPage1 />
      <AdvantagesPage />
      <StylesPage />
      <WorkingPage />
      <Footer />
    </Box>
  );
};

export default MainPage;
