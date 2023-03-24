import "./process-page.css";
import ProcessItem from "./ProcessItem";
import ProcessTitle from "./ProcessTitle";
import { MainPageItemWrapper } from "../../../views/MainPage/styled";
import { MasterInfoWrapper } from "./styled";

const ProcessPage = () => {
  return (
    <div className="process-page">
      <MainPageItemWrapper>
        <div className="process-page__general">
          <ProcessTitle />

          <div className="process-page__container">
            {[
              {
                imageSrc:
                  "https://www.dropbox.com/s/uia57lylhf4upo2/1.png?raw=1",
                description: `Выполняет черновой эскиз и высылает на согласование`,
              },
              {
                imageSrc:
                  "https://www.dropbox.com/s/elovw829eert1aa/2.png?raw=1",
                description: `После согласования отрисовывает портрет в выбраннной
              технике`,
              },
              {
                imageSrc:
                  "https://www.dropbox.com/s/fa38cg0xdhqhllm/3.png?raw=1",
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
            <MasterInfoWrapper>
              <img
                className="process-ava"
                src="https://www.dropbox.com/s/dgvp57lyybndi0w/%D0%9B%D1%8E%D0%B1%D0%B0%20ph.png?raw=1"
                alt="Любовь Ненадовец"
              />
            </MasterInfoWrapper>

            <div className="process-text__container">
              <div className="process-inf__text">Посмотрите 60-секундное</div>

              <div className="process-inf__text2">видео и узнайте,</div>

              <div className="process-inf__text3">
                как художник нарисует вашу картину
              </div>

              <div className="process-arrow__container">
                <img className="process-arrow" src="/images/arrow.png" alt="" />
              </div>
            </div>

            <div className="process-video">
              <video
                className="work-video"
                src="/Портрет Энид Синклер с сериала _Уэнсдей_.mp4"
                controls="controls"
                poster="/images/wrapper-video.jpg"
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
      </MainPageItemWrapper>
    </div>
  );
};

export default ProcessPage;
