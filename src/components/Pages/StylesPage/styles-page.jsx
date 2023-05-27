import "./styles-page.css";
import { HashLink as Link } from "react-router-hash-link";
import { MainPageItemWrapper } from "../../../views/MainPage/styled";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";
import StylesTitle from "./StylesPageTitle/StylesTitle";
import StylesButton from "../../Button/StylesButton";
import { isMobile } from "react-device-detect";

const StylesPage = () => {
  const { t } = useTranslation();
  return (
    <div className="styles-page">
      <MainPageItemWrapper>
        <div className="styles-page__general">
          <StylesTitle />
          {/* <div className="styles-art">
            <div className="styles__item">
              <Link to="/products#beauty-art">
                <img
                  className="styles__image"
                  src="https://www.dropbox.com/s/a94m1xtnisprbih/%D0%91%D0%B5%D0%B7%20%D0%B8%D0%BC%D0%B5%D0%BD%D0%B8-2.jpg?raw=1"
                  loading="lazy"
                  decoding="async"
                  alt=""
                />
              </Link>
              <div className="styles-name">{t("stylesPage.styles_name1")}</div>
              <div className="styles-price">
                {i18n.language === "en" ? "From 20$" : "От 1590 руб."}
              </div>
              {isMobile ? <StylesButton /> : null}
            </div>

            <div className="styles__item">
              <Link to="/products#digital">
                <img
                  className="styles__image"
                  src="https://www.dropbox.com/s/luzmhad1mcshcs6/%D0%B4%D0%B8%D0%B4%D0%B6%D0%B8%D1%82%D0%B0%D0%BB.jpg?raw=1"
                  loading="lazy"
                  decoding="async"
                  alt=""
                />
              </Link>

              <div className="styles-name"> {t("stylesPage.styles_name2")}</div>
              <div className="styles-price">
                {i18n.language === "en" ? "From 36$" : "От 2800 руб."}
              </div>
              {isMobile ? <StylesButton /> : null}
            </div>

            <div className="styles__item">
              <Link to="/products#oli-art">
                <img
                  className="styles__image"
                  src="https://www.dropbox.com/s/cvlw53p8e70z4nb/%D0%BC%D0%B0%D1%81%D0%BB%D0%BE.jpg?raw=1"
                  loading="lazy"
                  decoding="async"
                  alt=""
                />
              </Link>

              <div className="styles-name">{t("stylesPage.styles_name3")}</div>
              <div className="styles-price">
                {i18n.language === "en" ? "From 13$" : "От 950 руб."}
              </div>
              {isMobile ? <StylesButton /> : null}
            </div>

            <div className="styles__item">
              <Link to="/products#likeness-art">
                <img
                  className="styles__image"
                  src="https://www.dropbox.com/s/tnvtxrp1envbyxs/%D0%B2%20%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%B5.jpg?raw=1"
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
              {isMobile ? <StylesButton /> : null}
            </div>

            <div className="styles__item">
              <Link to="/products#fusion-art">
                <img
                  className="styles__image"
                  src="https://www.dropbox.com/s/f76r4m9lq1wfld2/%D1%84%D1%8C%D1%8E%D0%B6%D0%BD.jpg?raw=1"
                  loading="lazy"
                  decoding="async"
                  alt=""
                />
              </Link>
              <div className="styles-name">{t("stylesPage.styles_name5")}</div>
              <div className="styles-price">
                {i18n.language === "en" ? "From 25$" : "От 1890 руб."}
              </div>
              {isMobile ? <StylesButton /> : null}
            </div>

            <div className="styles__item">
              <Link to="/products#pencil-art">
                <img
                  className="styles__image"
                  src="https://www.dropbox.com/s/8ri23fmdqpm2ohg/%D0%BA%D0%B0%D1%80%D0%B0%D0%BD%D0%B4%D0%B0%D1%88.jpg?raw=1"
                  loading="lazy"
                  decoding="async"
                  alt=""
                />
              </Link>

              <div className="styles-name">{t("stylesPage.styles_name6")}</div>
              <div className="styles-price">
                {i18n.language === "en" ? "From 24$" : "От 1790 руб."}
              </div>
              {isMobile ? <StylesButton /> : null}
            </div>

            <div className="styles__item">
              <Link to="/products#infiniti-art">
                <img
                  className="styles__image"
                  src="https://www.dropbox.com/s/lnozal12n008by6/%D0%B8%D0%BD%D1%84%D0%B8%D0%BD%D0%B8%D1%82%D0%B8.jpg?raw=1"
                  loading="lazy"
                  decoding="async"
                  alt=""
                />
              </Link>

              <div className="styles-name">{t("stylesPage.styles_name7")}</div>
              <div className="styles-price">
                {i18n.language === "en" ? "From 38$" : "От 2900 руб."}
              </div>
              {isMobile ? <StylesButton /> : null}
            </div>

            <div className="styles__item">
              <Link to="/products#mastihin-art">
                <img
                  className="styles__image"
                  src="https://www.dropbox.com/s/5ynsuojxk042ixy/%D0%BC%D0%B0%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%BD.jpg?raw=1"
                  loading="lazy"
                  decoding="async"
                  alt=""
                />
              </Link>
              <div className="styles-name">{t("stylesPage.styles_name8")} </div>
              <div className="styles-price">
                {i18n.language === "en" ? "From 38$" : "От 2900 руб."}
              </div>
              {isMobile ? <StylesButton /> : null}
            </div>

            <div className="styles__item">
              <Link to="/products#animal-art">
                <img
                  className="styles__image"
                  src="https://www.dropbox.com/s/vpr1251sr1pn0fh/%D0%BF%D0%B8%D1%82%D0%BE%D0%BC%D0%B5%D1%86.jpg?raw=1"
                  loading="lazy"
                  decoding="async"
                  alt=""
                />
              </Link>

              <div className="styles-name">{t("stylesPage.styles_name9")}</div>
              <div className="styles-price">
                {i18n.language === "en" ? "From 20$" : "От 1490 руб."}
              </div>
              {isMobile ? <StylesButton /> : null}
            </div>
          </div> */}
        </div>
      </MainPageItemWrapper>
    </div>
  );
};

export default StylesPage;
