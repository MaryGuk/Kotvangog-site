import "./working-page.css";

const WorkingPage = () => {
  return (
    <div className="working-page">
      <div className="working-page__title">
        Дизайнер вручную отрисовывает вашу фотографию в течение 4-8 часов
      </div>
      <div className="working-page__container">
        <div className="working-page__content">
          <img className="working-image" src="/images/1.png" alt="" />
          <span className="working-text1"> Выполняет черновой эскиз </span>
          <span className="working-text2"> и высылает на согласование </span>
        </div>
        <div className="working-page__content">
          <img className="working-image" src="/images/2.png" alt="" />
          <span className="working-text1">
            После согласования отрисовывает <br /> портрет в выбраннной технике
          </span>
        </div>
        <div className="working-page__content">
          <img className="working-image" src="/images/3.png" alt="" />
          <span className="working-text1">
            По окончанию высылает <br /> готовый портрет
          </span>
          <span className="working-text2">
            вы можете внести любое количество правок
          </span>
        </div>
      </div>
      <div className="work-information">
        <img className="work-ava" src="/images/Люба Photo.png" alt="" />
        <h1 className="work-inf__text">Посмотрите 60-секундное</h1>
        <img className="work-arrow" src="/images/arrow.png" alt="" />
        <h2 className="work-inf__text2"> видео и узнайте,</h2>
        <h3 className="work-inf__text3">
          как художник <br />
          нарисует вашу картину
        </h3>
        <video
          className="work-video"
          src="/images/video/FLEXBOX. Учимся верстать на флексах. Флексбокс уроки. Часть вторая - свойства flex-элементов.mp4"
          controls="controls"
        ></video>
        <div className="work-author">
          <img
            className="work-author_name"
            src="/images/Художник мастерской KOTVANGOG.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default WorkingPage;
