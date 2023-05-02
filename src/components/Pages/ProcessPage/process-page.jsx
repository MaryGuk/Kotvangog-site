import "./process-page.css";
import ProcessItem from "./ProcessItem";
import { MainPageItemWrapper } from "../../../views/MainPage/styled";
import { MasterInfoWrapper } from "./styled";
import { useTranslation } from "react-i18next";
import ProcessPageTitle from "./ProcessPageTitle/ProcessPageTitle";

const ProcessPage = () => {
  const { t } = useTranslation();
  return (
    <div className="process-page">
      <MainPageItemWrapper>
        <div className="process-page__general">
          <ProcessPageTitle />

          <div className="process-page__container">
            {[
              {
                imageSrc:
                  "https://www.dropbox.com/s/uia57lylhf4upo2/1.png?raw=1",
                mainDescription: t("processPage.stepOne.mainDescription"),
                secondaryDescription: t(
                  "processPage.stepOne.secondaryDescription"
                ),
              },
              {
                imageSrc:
                  "https://www.dropbox.com/s/elovw829eert1aa/2.png?raw=1",
                mainDescription: t("processPage.stepTwo.mainDescription"),
              },
              {
                imageSrc:
                  "https://www.dropbox.com/s/fa38cg0xdhqhllm/3.png?raw=1",
                mainDescription: t("processPage.stepThree.mainDescription"),
                secondaryDescription: t(
                  "processPage.stepThree.secondaryDescription"
                ),
              },
            ].map((processItemProps, idx) => (
              <ProcessItem key={idx} {...processItemProps} />
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
              <div className="process-inf__text">
                {t("processPage.info_text1")}
              </div>

              <div className="process-inf__text2">
                {t("processPage.info_text2")}
              </div>

              <div className="process-inf__text3">
                {t("processPage.info_text3")}
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
            <div className="process-author__name">
              {t("processPage.author-name")}
            </div>
            <div className="author-name__color">
              {t("processPage.author-name__color")}
            </div>
          </div>
        </div>
      </MainPageItemWrapper>
    </div>
  );
};

export default ProcessPage;
