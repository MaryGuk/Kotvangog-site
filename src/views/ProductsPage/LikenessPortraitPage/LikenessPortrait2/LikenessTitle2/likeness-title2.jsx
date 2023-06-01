import { isMobile } from "react-device-detect";
import "./likeness-title2.css";

const LikenessTitle2 = () => {
  return (
    <div className="likeness__title-wrapper2">
      <div className="likeness__title-first2">
        <div className="likeness-page__title-background2">
          <img
            className="likeness__title-background-image2"
            src={
              isMobile
                ? "/images/background/примеры моб.png"
                : "/images/background/Мазок волна.png"
            }
          />
        </div>
        <div className="likeness__title2">Портрет в образе</div>
      </div>
    </div>
  );
};

export default LikenessTitle2;
