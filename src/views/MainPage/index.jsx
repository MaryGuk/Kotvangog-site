import React from "react";
import AdvantagesPage from "../../components/Pages/AdvantagesPage/advantages-page";
import StylesPage from "../../components/Pages/StylesPage/styles-page";
import Footer from "../../components/Pages/Footer/footer";
import ProcessPage from "../../components/Pages/ProcessPage/process-page";
import { MainPageWrapper } from "./styled";
import OilPortrait from "../../components/Pages/OilPortrait/oil-portrait";
import LikenessPortrait from "../../components/Pages/LikenessPortrait/likeness-portrait";
import FirstPage from "../../components/Pages/FrontPage1/FirstPage";
import ArtStylesSize from "../ProductsPage/PortraitSizes/ArtStylesSize";

const MainPage = () => {
  return (
    <MainPageWrapper>
      {/* <FrontPage1 /> */}
      {/* <FirstPage /> */}
      <AdvantagesPage />
      {/* <OilPortrait />
      <StylesPage />
      <LikenessPortrait />
      <ProcessPage />
      <ArtStylesSize />
      <Footer /> */}
    </MainPageWrapper>
  );
};

export default MainPage;
