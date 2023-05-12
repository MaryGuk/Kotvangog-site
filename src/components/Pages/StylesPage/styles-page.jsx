import "./styles-page.css";
import { HashLink as Link } from "react-router-hash-link";
import { MainPageItemWrapper } from "../../../views/MainPage/styled";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";
import StylesTitle from "./StylesPageTitle/StylesTitle";

const StylesPage = () => {
  const { t } = useTranslation();
  return (
    <div className="styles-page">
      <MainPageItemWrapper>
        <div className="advantages-page__general">
          <StylesTitle />
          <div className="styles-art">
            <div className="styles__item">
              <Link to="/products#beauty-art">
                <img
                  className="styles__image"
                  src="https://www.dropbox.com/s/f5ro9dpipwy88ks/%D0%B1%D1%8C%D1%8E%D1%82%D0%B8-%D0%B0%D1%80%D1%82.jpg?raw=1"
                  width="203px"
                  height="270px"
                  loading="lazy"
                  decoding="async"
                  alt=""
                />
              </Link>
              <div className="styles-name">{t("stylesPage.styles_name1")}</div>
              <div className="styles-price">
                {i18n.language === "en" ? "From 20$" : "От 1590 руб."}
              </div>
            </div>

            <div className="styles__item">
              <Link to="/products#digital">
                <img
                  className="styles__image"
                  src="https://www.dropbox.com/s/tvt6zr7l4ndykjh/%D0%B4%D0%B8%D0%B4%D0%B6%D0%B8%D1%82%D0%B0%D0%BB.jpg?raw=1"
                  width="203px"
                  height="270px"
                  loading="lazy"
                  decoding="async"
                  alt=""
                />
              </Link>

              <div className="styles-name"> {t("stylesPage.styles_name2")}</div>
              <div className="styles-price">
                {i18n.language === "en" ? "From 36$" : "От 2800 руб."}
              </div>
            </div>

            <div className="styles__item">
              <Link to="/products#oli-art">
                <img
                  className="styles__image"
                  src="https://www.dropbox.com/s/vgf0qskz3572kdz/%D0%BF%D0%B5%D1%80%D0%B2%D0%BE%D0%B5%20%D1%84%D0%BE%D1%82%D0%BE.jpg?raw=1"
                  width="203px"
                  height="270px"
                  loading="lazy"
                  decoding="async"
                  alt=""
                />
              </Link>

              <div className="styles-name">{t("stylesPage.styles_name3")}</div>
              <div className="styles-price">
                {i18n.language === "en" ? "From 13$" : "От 950 руб."}
              </div>
            </div>

            <div className="styles__item">
              <Link to="/products#likeness-art">
                <img
                  className="styles__image"
                  src="https://www.dropbox.com/s/h36y4hq48ho71fo/%D0%BF%D0%B5%D1%80%D0%B2%D0%B0%D1%8F%20%D0%BF%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82%20%D0%B2%20%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%B5.jpg?raw=1"
                  width="205px"
                  height="270px"
                  loading="lazy"
                  decoding="async"
                  alt=""
                />
              </Link>
              <div className="styles-name">{t("stylesPage.styles_name4")}</div>
              <div className="styles-price">
                {" "}
                {i18n.language === "en" ? "From 20$" : "От 1490 руб."}
              </div>
            </div>

            <div className="styles__item">
              <Link to="/products#fusion-art">
                <img
                  className="styles__image"
                  src="https://www.dropbox.com/s/zngo6oxynwekxv4/f2.jpg?raw=1"
                  width="203px"
                  height="270px"
                  loading="lazy"
                  decoding="async"
                  alt=""
                />
              </Link>
              <div className="styles-name">{t("stylesPage.styles_name5")}</div>
              <div className="styles-price">
                {i18n.language === "en" ? "From 25$" : "От 1890 руб."}
              </div>
            </div>

            <div className="styles__item">
              <Link to="/products#pencil-art">
                <img
                  className="styles__image"
                  src="https://www.dropbox.com/s/2c60dhamrkhr8f0/%D0%BA%D0%B0%D1%80%D0%B0%D0%BD%D0%B4%D0%B0%D1%88.jpg?raw=1"
                  width="203px"
                  height="270px"
                  loading="lazy"
                  decoding="async"
                  alt=""
                />
              </Link>

              <div className="styles-name">{t("stylesPage.styles_name6")}</div>
              <div className="styles-price">
                {i18n.language === "en" ? "From 24$" : "От 1790 руб."}
              </div>
            </div>

            <div className="styles__item">
              <Link to="/products#infiniti-art">
                <img
                  className="styles__image"
                  src="https://www.dropbox.com/s/h862mn8chv24fo4/%D0%B8%D0%BD%D1%84%D0%B8%D0%BD%D0%B8%D1%82%D0%B8.jpg?raw=1"
                  width="193px"
                  height="270px"
                  loading="lazy"
                  decoding="async"
                  alt=""
                />
              </Link>

              <div className="styles-name">{t("stylesPage.styles_name7")}</div>
              <div className="styles-price">
                {i18n.language === "en" ? "From 38$" : "От 2900 руб."}
              </div>
            </div>

            <div className="styles__item">
              <Link to="/products#mastihin-art">
                <img
                  className="styles__image"
                  src="https://www.dropbox.com/s/2r2w3krmavwcphv/%D0%BC%D0%B0%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%BD.jpg?raw=1"
                  width="180px"
                  height="270px"
                  loading="lazy"
                  decoding="async"
                  alt=""
                />
              </Link>
              <div className="styles-name">{t("stylesPage.styles_name8")} </div>
              <div className="styles-price">
                {i18n.language === "en" ? "From 38$" : "От 2900 руб."}
              </div>
            </div>

            <div className="styles__item">
              <Link to="/products#animal-art">
                <img
                  className="styles__image"
                  src="https://www.dropbox.com/s/9cb9p5pjy8ubnfy/%D0%BF%D0%B8%D1%82%D0%BE%D0%BC%D0%B5%D1%86%20%D0%BF%D0%B5%D1%80%D0%B2%D0%BE%D0%B5.jpg?raw=1"
                  width="203px"
                  height="270px"
                  loading="lazy"
                  decoding="async"
                  alt=""
                />
              </Link>

              <div className="styles-name">{t("stylesPage.styles_name9")}</div>
              <div className="styles-price">
                {i18n.language === "en" ? "From 20$" : "От 1490 руб."}
              </div>
            </div>
          </div>
        </div>
      </MainPageItemWrapper>
    </div>
  );
};

export default StylesPage;
