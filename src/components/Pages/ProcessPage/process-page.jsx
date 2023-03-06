import "./process-page.css";
import ProcessItem from "./ProcessItem";
import ProcessTitle from "./ProcessTitle";

const ProcessPage = () => {
  return (
    <div className="process-page">
      <div className="process-page__general">
        <ProcessTitle />

        <div className="process-page__container">
          {[
            {
              imageSrc: "/images/1.png",
              description: `Выполняет черновой эскиз и высылает на согласование`,
            },
            {
              imageSrc: "/images/2.png",
              description: `После согласования отрисовывает портрет в выбраннной
              технике`,
            },
            {
              imageSrc: "/images/3.png",
              description: `По окончанию высылает готовый портрет`,
            },
          ].map(({ imageSrc, description }, idx) => (
            <ProcessItem
              key={idx}
              imageSrc={imageSrc}
              description={description}
            />
          ))}
        </div>

        <div className="process-page__information">
          <div>
            <img
              className="process-ava"
              src="/images/Люба ph.png"
              alt="Любовь Ненадовец"
            />
          </div>

          <div process-text__container>
            <div className="process-inf__text">Посмотрите 60-секундное</div>

            <div className="process_text__general">
              <div className="process-inf__text2">видео и узнайте,</div>
              <div className="process-inf__text3">
                как художник нарисует вашу картину
              </div>
            </div>

            <div className="process-arrow__container">
              <img className="process-arrow" src="/images/arrow.png" alt="" />
            </div>
          </div>

          <div className="process-video">
            <video
              className="work-video"
              src="/images/video/FLEXBOX. Учимся верстать на флексах. Флексбокс уроки. Часть вторая - свойства flex-элементов.mp4"
              controls="controls"
            ></video>
          </div>
        </div>

        <div className="process-author">
          <img
            className="process-author__name"
            src="/images/Художник мастерской KOTVANGOG.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ProcessPage;
