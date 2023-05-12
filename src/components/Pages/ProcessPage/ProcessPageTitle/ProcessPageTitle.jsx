import "./ProcessPageTitle.css";

const ProcessPageTitle = () => {
  return (
    <div className="process-page__title-wrapper">
      <div className="process-page__title-first">
        <div className="process-page-page__title-background">
          <img
            className="process-page__title-background-image"
            src="/images/background/waveTwo1.png"
          />
        </div>
        <div className="process-page__title">
          Дизайнер вручную отрисовывает вашу фотографию в течение 4-8 часов
        </div>
      </div>
    </div>
  );
};

export default ProcessPageTitle;
