import "./styles-page.css";
import { HashLink as Link } from "react-router-hash-link";
import StylesTitle from "./StylesTitle";
import { MainPageItemWrapper } from "../../../views/MainPage/styled";

const StylesPage = () => {
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
                  src="https://www.dropbox.com/s/4t6rmbk8blkspky/%D0%B1%D1%8C%D1%8E%D1%82%D0%B8-%D0%B0%D1%80%D1%82.jpg?raw=1"
                  alt=""
                />
              </Link>
              <div className="styles-name"> Бьюти-арт портрет</div>
              <div className="styles-price">От 1590 руб.</div>
            </div>

            <div className="styles__item">
              <Link to="/products#digital">
                <img
                  className="styles__image"
                  src="https://www.dropbox.com/s/ixvvr1vlzi2np23/%D0%B4%D0%B8%D0%B4%D0%B6%D0%B8%D1%82%D0%B0%D0%BB.jpg?raw=1"
                  alt=""
                />
              </Link>

              <div className="styles-name"> Диджитал-портрет</div>
              <div className="styles-price"> От 2800 руб.</div>
            </div>

            <div className="styles__item">
              <Link to="/products#oli-art">
                <img
                  className="styles__image"
                  src="https://www.dropbox.com/s/jdcwizrzmf18k7t/%D0%BF%D0%B5%D1%80%D0%B2%D0%BE%D0%B5%20%D1%84%D0%BE%D1%82%D0%BE.jpg?raw=1"
                  alt=""
                />
              </Link>

              <div className="styles-name"> Имитация масла </div>
              <div className="styles-price"> От 950 руб.</div>
            </div>

            <div className="styles__item">
              <Link to="/products#likeness-art">
                <img
                  className="styles__image"
                  src="https://www.dropbox.com/s/b0y9xrrtunboanr/%D0%BF%D0%B5%D1%80%D0%B2%D0%B0%D1%8F%20%D0%BF%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82%20%D0%B2%20%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%B5.jpg?raw=1"
                  alt=""
                />
              </Link>
              <div className="styles-name">Портрет в образе </div>
              <div className="styles-price"> От 1090 руб.</div>
            </div>

            <div className="styles__item">
              <Link to="/products#fusion-art">
                <img
                  className="styles__image"
                  src="https://www.dropbox.com/s/xt1t90u0x9ozhhl/f2.jpg?raw=1"
                  alt=""
                />
              </Link>
              <div className="styles-name"> Фьюжн </div>
              <div className="styles-price"> От 1890 руб.</div>
            </div>

            <div className="styles__item">
              <Link to="/products#pencil-art">
                <img
                  className="styles__image"
                  src="https://www.dropbox.com/s/3kvp7r831dciy9z/%D0%BA%D0%B0%D1%80%D0%B0%D0%BD%D0%B4%D0%B0%D1%88.jpg?raw=1"
                  alt=""
                />
              </Link>

              <div className="styles-name"> Карандаш </div>
              <div className="styles-price"> От 1790 руб.</div>
            </div>

            <div className="styles__item">
              <Link to="/products#infiniti-art">
                <img
                  className="styles__image"
                  src="https://www.dropbox.com/s/vvu7jzpn8q6sjnd/%D0%B8%D0%BD%D1%84%D0%B8%D0%BD%D0%B8%D1%82%D0%B8.jpg?raw=1"
                  alt=""
                />
              </Link>

              <div className="styles-name"> Инфинити </div>
              <div className="styles-price"> От 2900 руб.</div>
            </div>

            <div className="styles__item">
              <Link to="/products#mastihin-art">
                <img
                  className="styles__image"
                  src="https://www.dropbox.com/s/7gw3cutyn5vwt89/%D0%BC%D0%B0%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%BD.jpg?raw=1"
                  alt=""
                />
              </Link>
              <div className="styles-name">Мастихин </div>
              <div className="styles-price"> От 2900 руб.</div>
            </div>

            <div className="styles__item">
              <Link to="/products#animal-art">
                <img
                  className="styles__image"
                  src="https://www.dropbox.com/s/bhpspsqdi381wkl/%D0%BF%D0%B8%D1%82%D0%BE%D0%BC%D0%B5%D1%86%20%D0%BF%D0%B5%D1%80%D0%B2%D0%BE%D0%B5.jpg?raw=1"
                  alt=""
                />
              </Link>

              <div className="styles-name">Портрет питомца </div>
              <div className="styles-price"> От 1490 руб.</div>
            </div>
          </div>
        </div>
      </MainPageItemWrapper>
    </div>
  );
};

export default StylesPage;
