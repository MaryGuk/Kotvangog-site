import { isMobile } from "react-device-detect";

const AdvantageItem = ({ imageSrc, description }) => {
  return (
    <div className="advantage-item__wrapper">
      {isMobile ? (
        <div className="ellipse-container">
          <div className="advantage-item__container">
            <img className="advantages-img" src={imageSrc} alt="" />
          </div>

          <div className="advantages-text">{description}</div>
        </div>
      ) : null}
    </div>
  );
};

export default AdvantageItem;
