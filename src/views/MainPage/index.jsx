import React from "react";
import { Box } from "@mui/material";
import AdvantagesPage from "../../components/HomePage/AdvantagesPage/advantages-page";
import StylesPage from "../../components/HomePage/StylesPage/styles-page";
import WorkingPage from "../../components/HomePage/WorkingPage/working-page";
import Footer from "../../components/HomePage/Footer/footer";
import FrontPage from "../../components/HomePage/FrontPage/front-page";

const MainPage = () => {
  return (
    <Box>
      |
      <FrontPage/>
      <AdvantagesPage />
      <StylesPage />
      <WorkingPage />
      <Footer />
    </Box>
  );
};

export default MainPage;
