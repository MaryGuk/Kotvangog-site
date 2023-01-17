import AdvantagesPage from "./AdvantagesPage/advantages-page";
import FrontPage from "./FrontPage/front-page";
import "./home-page.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <FrontPage />
      <AdvantagesPage />
    </div>
  );
};
export default HomePage;
