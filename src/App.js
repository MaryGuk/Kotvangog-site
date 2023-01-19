import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/HomePage/header";
import HomePage from "./components/HomePage/header";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
      </div>
    </BrowserRouter>
  );
};

export default App;
