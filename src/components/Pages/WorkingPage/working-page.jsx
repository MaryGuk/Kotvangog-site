import "./working-page.css";

const WorkingPage = () => {
  return (
    <div className="working-page">
      <div className="working-page__title">
        Дизайнер вручную отрисовывает вашу фотографию в течение 4-8 часов
      </div>
      <div className="working-page__container">
        <div className="working-page__content">
          <img className="working-image" src="/images/rectangle1.png" alt="" />
          <span className="working-text1"> Выполняет черновой эскиз </span>
          <span className="working-text2"> и высылает на согласование </span>
        </div>
        <div className="working-page__content">
          <img className="working-image" src="/images/rectangle2.png" alt="" />
          <span className="working-text1">
            После согласования отрисовывает <br /> портрет в выбраннной технике
          </span>
        </div>
        <div className="working-page__content">
          <img className="working-image" src="/images/rectangle3.png" alt="" />
          <span className="working-text1">
            По окончанию высылает <br /> готовый портрет
          </span>
          <span className="working-text2">
            вы можете внести любое количество правок
          </span>
        </div>
      </div>
    </div>
  );
};

export default WorkingPage;
