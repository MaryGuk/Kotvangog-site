import "./styles-page.css";
import { HashLink as Link } from "react-router-hash-link";
import StylesTitle from "./StylesTitle";
import {MainPageItemWrapper} from "../../../views/MainPage/styled";

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
                src="/images/styles/Бьюти-арт/бьюти-арт.jpg"
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
                src="/images/styles/Диджитал/диджитал.jpg"
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
                src="/images/styles/Имитация масла/первое фото.jpg"
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
                src="/images/styles/Портрет в образе/первая портрет в образе.jpg"
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
                src="/images/styles/Фьюжн/f2.jpg"
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
                src="/images/styles/Карандаш/карандаш.jpg"
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
                src="/images/styles/Инфинити/инфинити.jpg"
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
                src="/images/styles/Мастихин/04.jpg"
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
                src="/images/styles/Портрет питомца/питомец первое.jpg"
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
