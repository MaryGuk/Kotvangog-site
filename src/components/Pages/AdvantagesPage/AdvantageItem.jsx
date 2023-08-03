const AdvantageItem = ({ imageSrc, description, newDescription }) => {
  return (
    <div className="advantages-wrapper">
      <div className="advantage-item__wrapper">
        <div className="ellipse-container">
          <div className="advantage-item__container">
            <img className="advantages-img" src={imageSrc} alt="" />
          </div>
          <div className="advantages-text">{description}</div>
        </div>
      </div>

      <div className="advantages-new-text">{newDescription}</div>
    </div>
  );
};

export default AdvantageItem;
