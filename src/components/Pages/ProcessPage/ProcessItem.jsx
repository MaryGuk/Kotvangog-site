const ProcessItem = ({ imageSrc, mainDescription, secondaryDescription }) => {
  return (
    <div className="process-item__wrapper">
      <div className="process-item__container">
        <img
          className="process-img"
          src={imageSrc}
          loading="lazy"
          decoding="async"
          alt=""
        />
      </div>
      <div>
        <div className="process-main-description">{mainDescription}</div>
        <div className="process-secondary-description">
          {secondaryDescription}
        </div>
      </div>
    </div>
  );
};

export default ProcessItem;
