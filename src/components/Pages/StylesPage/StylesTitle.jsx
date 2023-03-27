import { useTranslation } from "react-i18next";
import "./StylesTitle.css";

const StylesTitle = () => {
  const { t } = useTranslation();
  return (
    <div className="styles-page__title-wrapper">
      <div className="styles-page__title-first">
        <div className="styles-page__title">{t("stylesPage.title")}</div>
        <div className="styles-page-page__title-background">
          <img
            className="styles-page__title-background-image"
            src="/images/background/Фон заголовок2 — копия.png"
          />
        </div>
      </div>
    </div>
  );
};

export default StylesTitle;
