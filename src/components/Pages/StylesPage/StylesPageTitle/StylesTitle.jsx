import "./StylesTitle.css";

const StylesTitle = () => {
  return (
    <div className="styles__title-wrapper">
      <div className="styles__title-first">
        <div className="styles-page__title-background">
          <img
            className="styles__title-background-image"
            src="/images/background/green wave.png"
          />
        </div>
        <div className="styles__title">Стили и цены</div>
      </div>
    </div>
  );
};

export default StylesTitle;