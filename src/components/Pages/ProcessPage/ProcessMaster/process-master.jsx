import "./process-master.css";
import { MasterInfoWrapper } from "../styled";
import { useTranslation } from "react-i18next";
import MasterName from "../MasterName/master-name";

const ProcessMaster = () => {
  const { t } = useTranslation();
  return (
    <div className="process-master__wrapper">
      <div className="master-name">
        <MasterName />
      </div>

      <div className="process-page__information">
        <MasterInfoWrapper>
          <img
            className="process-ava"
            src="https://www.dropbox.com/scl/fi/27c826d7m8vuw7zygbth2/900_.png?rlkey=2yutlcjoozkt3u7kfl7vmf9nv&dl=0&raw=1"
            loading="lazy"
            decoding="async"
            alt="Любовь Ненадовец"
          />
        </MasterInfoWrapper>

        <div className="process-text__container">
          <div className="process-inf__text">{t("processPage.info_text1")}</div>

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
          <iframe
            className="process-video"
            src="https://www.youtube.com/embed/Ml7CWmrXmsE?autoplay=0"
            title="Портрет Энид Синклер из сериала Уэнсдей"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};
export default ProcessMaster;
