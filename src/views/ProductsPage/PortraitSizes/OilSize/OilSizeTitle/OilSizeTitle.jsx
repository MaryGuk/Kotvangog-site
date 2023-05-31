import "./OilSizeTitle.css";
import { isMobile } from "react-device-detect";

const OilSizeTitle = () => {
  return (
    <div className="oil-sizes__title-wrapper">
      <div className="oil-sizes__title-first">
        <div className="oil-sizes-page__title-background">
          <img
            className="oil-sizes__title-background-image"
            src={
              isMobile
                ? "/images/background/размеры масло.png"
                : "/images/background/waveOne1.png"
            }
          />
        </div>
        <div className="oil-sizes__title">Размеры и цены</div>
      </div>
    </div>
  );
};

export default OilSizeTitle;
