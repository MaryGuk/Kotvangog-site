import "./styles-page.css";
import { HashLink as Link } from "react-router-hash-link";
import StylesTitle from "./StylesTitle";
import { MainPageItemWrapper } from "../../../views/MainPage/styled";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";

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
                  src="https://www.dropbox.com/s/x4rwflkvopzsp16/%D0%B1%D1%8C%D1%8E%D1%82%D0%B8-%D0%B0%D1%80%D1%82.jpg?raw=1"
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
                  src="https://www.dropbox.com/s/twifuq7e8e3w71a/%D0%B4%D0%B8%D0%B4%D0%B6%D0%B8%D1%82%D0%B0%D0%BB.jpg?raw=1"
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
                  src="https://www.dropbox.com/s/khvqml3yfktv3em/%D0%BF%D0%B5%D1%80%D0%B2%D0%BE%D0%B5%20%D1%84%D0%BE%D1%82%D0%BE.jpg?raw=1"
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
                  src="https://www.dropbox.com/s/dxenq58vgby6n67/%D0%BF%D0%B5%D1%80%D0%B2%D0%B0%D1%8F%20%D0%BF%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82%20%D0%B2%20%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%B5.jpg?raw=1"
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
                  src="https://www.dropbox.com/s/b2zcovmten1jml0/f2.jpg?raw=1"
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
                  src="https://www.dropbox.com/s/akpbrhxswe7hli1/%D0%BA%D0%B0%D1%80%D0%B0%D0%BD%D0%B4%D0%B0%D1%88.jpg?raw=1"
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
                  src="https://www.dropbox.com/s/rmwzm2ox6bdo5jw/%D0%B8%D0%BD%D1%84%D0%B8%D0%BD%D0%B8%D1%82%D0%B8.jpg?raw=1"
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
                  src="https://www.dropbox.com/s/10eo80lcq4orhuf/%D0%BC%D0%B0%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%BD.jpg?raw=1"
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
                  src="https://www.dropbox.com/s/3f707oug54pnpeo/%D0%BF%D0%B8%D1%82%D0%BE%D0%BC%D0%B5%D1%86%20%D0%BF%D0%B5%D1%80%D0%B2%D0%BE%D0%B5.jpg?raw=1"
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
