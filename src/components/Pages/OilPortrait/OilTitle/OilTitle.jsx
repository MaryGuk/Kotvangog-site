import './oil.css';

const OilTitle = ({ titleText }) => {
  return (
    <div className="oil__title-wrapper">
      <div className="oil__title-first">
        <div className="oil-page__title-background">
          <img
            className="oil__title-background-image"
            src="/images/background/background new.png"
            alt=""
          />
        </div>
        <div className="oil__title">{titleText}</div>
      </div>
    </div>
  );
};

export default OilTitle;
