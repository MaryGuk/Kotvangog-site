import { useTranslation } from "react-i18next";
import "./ProcessTitle.css";

const ProcessTitle = () => {
  const { t } = useTranslation();
  return (
    <div className="process-page__title-wrapper">
      <div className="process-page__title-first">
        <div className="process-page__title">{t("processPage.title1")}</div>
        <div className="process-page__title-background">
          <img
            className="process-page__title-background-image"
            src="/images/background/Фон заголовок2 — копия.png"
          />
        </div>
      </div>
      <div className="process-page__title">{t("processPage.title2")}</div>
    </div>
  );
};

export default ProcessTitle;
