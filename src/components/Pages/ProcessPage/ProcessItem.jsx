const ProcessItem = ({ imageSrc, description }) => {
  return (
    <div className="process-item__wrapper">
      <div className="process-item__container">
        <img className="process-img" src={imageSrc} alt="" />
      </div>

      <div className="process-text">{description}</div>
    </div>
  );
};

export default ProcessItem;
