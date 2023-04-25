import { useTranslation } from "react-i18next";
import "./AdvantagesTitle.css";
const AdvantagesTitle = () => {
  const { t } = useTranslation();

  return (
    <div className="advantages-page__title-wrapper">
      <div className="advantages-page__title-first">
        <div className="advantages-page__title">
          {t("advantagesPage.title1")}
        </div>
        <div className="advantages-page__title-background">
          <img
            className="advantages-page__title-background-image"
            src="/images/background/Фон заголовок2 — копия.png"
          />
        </div>
      </div>

      <div className="advantages-page__title">{t("advantagesPage.title2")}</div>
    </div>
  );
};

export default AdvantagesTitle;
