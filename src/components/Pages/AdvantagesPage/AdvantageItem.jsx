const AdvantageItem = ({ imageSrc, description }) => {
  return (
    <div className="advantage-item__wrapper">
      <div className="advantage-item__container">
        <img className="advantages-img" src={imageSrc} alt="" />
      </div>

      <div className="advantages-text">{description}</div>
    </div>
  );
};

export default AdvantageItem;
