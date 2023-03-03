import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Pages/FrontPage1/Navbar/navbar.jsx";
import MainPage from "./views/MainPage";
import ReviewsPage from "./views/ReviewsPage";
import ProductsPage from "./views/ProductsPage";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Navbar />
        <Routes>
          <Route path="/home" element={<MainPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
