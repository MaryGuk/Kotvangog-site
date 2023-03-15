import "./ProcessTitle.css";

const ProcessTitle = () => {
  return (
    <div className="process-page__title-wrapper">
      <div className="process-page__title-first">
        <div className="process-page__title">
          Дизайнер вручную отрисовывает вашу фотографию
        </div>
        <div className="process-page__title-background">
          <img
            className="process-page__title-background-image"
            src="/images/background/Фон заголовок2 — копия.png"
          />
        </div>
      </div>
      <div className="process-page__title">в течение 4-8 часов</div>
    </div>
  );
};

export default ProcessTitle;
