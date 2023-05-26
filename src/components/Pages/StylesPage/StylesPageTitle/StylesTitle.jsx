import "./StylesTitle.css";
import { isMobile } from "react-device-detect";

const StylesTitle = () => {
  return (
    <div className="styles__title-wrapper">
      <div className="styles__title-first">
        <div className="styles-page__title-background">
          <img
            className="styles__title-background-image"
            src={
              isMobile
                ? "/images/background/арт стили волна.png"
                : "/images/background/waveTwo1.png"
            }
          />
        </div>
        <div className="styles__title">
          {isMobile ? "Арт стили" : "Стили и цены"}
        </div>
      </div>
    </div>
  );
};

export default StylesTitle;
