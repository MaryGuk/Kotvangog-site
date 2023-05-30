import "./oil-title2.css";
import { isMobile } from "react-device-detect";

const OilTitle2 = () => {
  return (
    <div className="oil__title2-wrapper">
      <div className="oil__title2-first">
        <div className="oil-page__title2-background">
          <img
            className="oil__title2-background-image"
            src={
              isMobile
                ? "/images/background/classic mobile.png"
                : "/images/background/Мазок волна.png"
            }
          />
        </div>
        <div className="oil__title2">Классический портрет маслом</div>
      </div>
    </div>
  );
};

export default OilTitle2;
