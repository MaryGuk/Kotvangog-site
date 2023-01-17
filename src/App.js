import { BrowserRouter } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage/home-page";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HomePage />
      </div>
    </BrowserRouter>
  );
};

export default App;
