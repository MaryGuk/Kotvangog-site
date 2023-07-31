import "./styles-page.css";
import { HashLink as Link } from "react-router-hash-link";
import { MainPageItemWrapper } from "../../../views/MainPage/styled";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";
import StylesTitle from "./StylesPageTitle/StylesTitle";
import StylesButton from "../../Button/StylesButton";
import { isMobile } from "react-device-detect";

const stylesData = [
  {
    nameKey: "stylesPage.styles_name1",
    imgSrc: "https://www.dropbox.com/s/a94m1xtnisprbih/%D0%91%D0%B5%D0%B7%20%D0%B8%D0%BC%D0%B5%D0%BD%D0%B8-2.jpg?raw=1",
    enPrice: "From 20$",
    ruPrice: "От 1590 руб.",
    linkTo: "/products#beauty-art",
  },
  {
    nameKey: "stylesPage.styles_name2",
    imgSrc: "https://www.dropbox.com/s/luzmhad1mcshcs6/%D0%B4%D0%B8%D0%B4%D0%B6%D0%B8%D1%82%D0%B0%D0%BB.jpg?raw=1",
    enPrice: "From 36$",
    ruPrice: "От 2800 руб.",
    linkTo: "/products#digital",
  },
  {
    nameKey: "stylesPage.styles_name3",
    imgSrc: "https://www.dropbox.com/s/cvlw53p8e70z4nb/%D0%BC%D0%B0%D1%81%D0%BB%D0%BE.jpg?raw=1",
    enPrice: "From 13$",
    ruPrice: "От 950 руб.",
    linkTo: "/products#oli-art",
  },
  {
    nameKey: "stylesPage.styles_name4",
    imgSrc: "https://www.dropbox.com/s/tnvtxrp1envbyxs/%D0%B2%20%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%B5.jpg?raw=1",
    enPrice: "From 20$",
    ruPrice: "От 1490 руб.",
    linkTo: "/products#likeness-art",
  },
  {
    nameKey: "stylesPage.styles_name5",
    imgSrc: "https://www.dropbox.com/s/f76r4m9lq1wfld2/%D1%84%D1%8C%D1%8E%D0%B6%D0%BD.jpg?raw=1",
    enPrice: "From 25$",
    ruPrice: "От 1890 руб.",
    linkTo: "/products#fusion-art",
  },
  {
    nameKey: "stylesPage.styles_name6",
    imgSrc: "https://www.dropbox.com/s/8ri23fmdqpm2ohg/%D0%BA%D0%B0%D1%80%D0%B0%D0%BD%D0%B4%D0%B0%D1%88.jpg?raw=1",
    enPrice: "From 24$",
    ruPrice: "От 1790 руб.",
    linkTo: "/products#pencil-art",
  },
  {
    nameKey: "stylesPage.styles_name7",
    imgSrc: "https://www.dropbox.com/s/lnozal12n008by6/%D0%B8%D0%BD%D1%84%D0%B8%D0%BD%D0%B8%D1%82%D0%B8.jpg?raw=1",
    enPrice: "From 38$",
    ruPrice: "От 2900 руб.",
    linkTo: "/products#infiniti-art",
  },
  {
    nameKey: "stylesPage.styles_name8",
    imgSrc: "https://www.dropbox.com/s/5ynsuojxk042ixy/%D0%BC%D0%B0%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%BD.jpg?raw=1",
    enPrice: "From 38$",
    ruPrice: "От 2900 руб.",
    linkTo: "/products#mastihin-art",
  },
  {
    nameKey: "stylesPage.styles_name9",
    imgSrc: "https://www.dropbox.com/s/vpr1251sr1pn0fh/%D0%BF%D0%B8%D1%82%D0%BE%D0%BC%D0%B5%D1%86.jpg?raw=1",
    enPrice: "From 20$",
    ruPrice: "От 1490 руб.",
    linkTo: "/products#animal-art",
  },
];

const StylesPage = () => {
  const { t } = useTranslation();
  return (
    <div className="styles-page">
      <MainPageItemWrapper>
        <div className="styles-page__general">
          <StylesTitle />
          <div className="styles-art">
            {stylesData.map(({ nameKey, imgSrc, enPrice, ruPrice, linkTo }, index) => (
                <div className="styles__item" key={index}>
                  <Link to={linkTo}>
                    <img
                        className="styles__image"
                        src={imgSrc}
                        loading="lazy"
                        decoding="async"
                        alt=""
                        width="100%"
                        height="auto"
                    />
                  </Link>
                  <div className="styles-name">{t(nameKey)}</div>
                  <div className="styles-price">
                    {i18n.language === "en" ? enPrice : ruPrice}
                  </div>
                  {isMobile ? <StylesButton /> : null}
                </div>
            ))}
          </div>
        </div>
      </MainPageItemWrapper>
    </div>
  );
};

export default StylesPage;
