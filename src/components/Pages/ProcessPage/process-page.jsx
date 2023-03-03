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
              description: `По окончанию высылает готовый портрет.Вы можете внести любое количество правок`,
            },
          ].map(({ imageSrc, description }, idx) => (
            <ProcessItem
              key={idx}
              imageSrc={imageSrc}
              description={description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessPage;
