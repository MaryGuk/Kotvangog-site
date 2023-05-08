import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { useTranslation } from "react-i18next";

import "./App.css";

import Navbar from "./components/Pages/FrontPage1/Navbar/navbar.jsx";
import MainPage from "./views/MainPage";
import ReviewsPage from "./views/ReviewsPage";
import ProductsPage from "./views/ProductsPage";
import OilPortraitPage from "./views/ProductsPage/OilPortraitPage";
import LikenessPortraitPage from "./views/ProductsPage/LikenessPortraitPage";
import { Box } from "@mui/material";
import PaintbrushLoader from "./components/ImageWithLoader/PaintbrushLoader";

const App = () => {
  return (
    <Suspense
      fallback={
        <Box
          width="100vw"
          height="100vh"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <PaintbrushLoader width={500} />
        </Box>
      }
    >
      <BrowserRouter>
        <div className="app-wrapper">
          <Navbar />

          <Routes>
            <Route path="/home" element={<MainPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/oil-portrait" element={<OilPortraitPage />} />
            <Route
              path="/likeness-portrait"
              element={<LikenessPortraitPage />}
            />
            <Route path="/art-styles" element={<ProductsPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
