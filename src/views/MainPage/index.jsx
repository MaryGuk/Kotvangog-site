import React from "react";
import { Box } from "@mui/material";
import AdvantagesPage from "../../components/Pages/AdvantagesPage/advantages-page";
import StylesPage from "../../components/Pages/StylesPage/styles-page";
import WorkingPage from "../../components/Pages/WorkingPage/working-page";
import Footer from "../../components/Pages/Footer/footer";

import FrontPage1 from "../../components/Pages/FrontPage1/front-page1";
import ProcessPage from "../../components/Pages/ProcessPage/process-page";
import {MainPageWrapper} from "./styled";

const MainPage = () => {
  return (
    <MainPageWrapper>
      <FrontPage1 />
      <AdvantagesPage />
      <StylesPage />
      <ProcessPage />
      {/* <WorkingPage /> */}
      {/*<Footer />*/}
    </MainPageWrapper>
  );
};

export default MainPage;
