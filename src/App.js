import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { useTranslation } from "react-i18next";

import "./App.css";

import Navbar from "./components/Pages/FrontPage1/Navbar/navbar.jsx";
import MainPage from "./views/MainPage";
import ReviewsPage from "./views/ReviewsPage";
import ProductsPage from "./views/ProductsPage";

const App = () => {
  // const { t, i18n } = useTranslation();

  // const changeLanguage = (language) => {
  //   i18n.changeLanguage(language);
  // };

  return (
    <Suspense fallback="loading">
      <BrowserRouter>
        <div className="app-wrapper">
          <Navbar />
          {/* <button onClick={() => changeLanguage("en")}> EN </button>
          <button onClick={() => changeLanguage("ru")}> RU </button>
          <div> {t("homePage.title")}</div> */}
          <Routes>
            <Route path="/home" element={<MainPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
