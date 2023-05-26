import { isMobile } from "react-device-detect";

const AdvantageItem = ({
  imageSrc,
  description,
  newDescription,
  newDescription2,
}) => {
  return (
    <div className="advantage-item__wrapper">
      <div className="ellipse-container">
        <div className="advantage-item__container">
          <img className="advantages-img" src={imageSrc} alt="" />
        </div>
        <div className="advantages-text">{description}</div>
      </div>

      <div className="advantages-new-text">{newDescription}</div>
      <div className="advantages-new-text2">{newDescription2}</div>
    </div>
  );
};

export default AdvantageItem;
