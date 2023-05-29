import "./process-page.css";
import ProcessItem from "./ProcessItem";
import { MainPageItemWrapper } from "../../../views/MainPage/styled";
import {
  MasterInfoWrapper,
  ProcessMobileContent,
  ProcessMobileText,
  ProcessMobileTextOne,
} from "./styled";
import { useTranslation } from "react-i18next";
import ProcessPageTitle from "./ProcessPageTitle/ProcessPageTitle";
import ProcessMobileTitle from "./ProcessMobileTitle/processMobileTitle";
import { isMobile } from "react-device-detect";

const ProcessPage = () => {
  const { t } = useTranslation();
  return (
    <div className="process-page">
      <MainPageItemWrapper>
        <div className="process-page__general">
          <ProcessPageTitle />
          <ProcessMobileContent>
            <ProcessMobileTitle />

            <ProcessMobileText>
              <ProcessMobileTextOne>
                Дизайнер вручную отрисовывает вашу фотографию в течение 4-8
                часов
              </ProcessMobileTextOne>
            </ProcessMobileText>
          </ProcessMobileContent>
          <div className="process-page__container">
            {[
              {
                imageSrc:
                  "https://www.dropbox.com/s/cgjugtfpi1l0jnr/1%20process.jpg?raw=1",
                mainDescription: t("processPage.stepOne.mainDescription"),
                secondaryDescription: t(
                  "processPage.stepOne.secondaryDescription"
                ),
              },
              {
                imageSrc:
                  "https://www.dropbox.com/s/b2iezkzwafj66nf/2%20process.jpg?raw=1",
                mainDescription: t("processPage.stepTwo.mainDescription"),
              },
              {
                imageSrc:
                  "https://www.dropbox.com/s/e1bn05qvyhublf9/3%20process.jpg?raw=1",
                mainDescription: t("processPage.stepThree.mainDescription"),
                secondaryDescription: t(
                  "processPage.stepThree.secondaryDescription"
                ),
              },
            ].map((processItemProps, idx) => (
              <ProcessItem key={idx} {...processItemProps} />
            ))}
          </div>

          {!isMobile && (
            <div className="process-page__information">
              <MasterInfoWrapper>
                <img
                  className="process-ava"
                  src="https://www.dropbox.com/s/fubn96wj2g9p0wu/%D0%9B%D1%8E%D0%B1%D0%B0%20ph2.jpg?raw=1"
                  loading="lazy"
                  decoding="async"
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
                  <img
                    className="process-arrow"
                    src="/images/arrow.png"
                    alt=""
                  />
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
              <div className="process-author">
                <a href="https://www.instagram.com/nen_nenad/" target="_blank">
                  <div className="process-author__name">
                    {t("processPage.author-name")}
                  </div>
                  <div className="author-name__color">
                    {t("processPage.author-name__color")}
                  </div>
                </a>
              </div>
            </div>
          )}
        </div>
      </MainPageItemWrapper>
    </div>
  );
};

export default ProcessPage;
