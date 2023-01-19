import AdvantagesPage from "./AdvantagesPage/advantages-page";
import Footer from "./Footer/footer";
import FrontPage from "./FrontPage/front-page";
import "./header.css";
import StylesPage from "./StylesPage/styles-page";
import WorkingPage from "./WorkingPage/working-page";

const Header = () => {
  return (
    <div className="header">
      <FrontPage />
      <AdvantagesPage />
      <StylesPage />
      <WorkingPage />
      <Footer />
    </div>
  );
};
export default Header;
