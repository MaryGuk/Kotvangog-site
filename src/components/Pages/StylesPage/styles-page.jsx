import "./styles-page.css";
import { HashLink as Link } from "react-router-hash-link";

const StylesPage = () => {
  return (
    <div className="styles-page">
      <div className="styles-page__title">Стили и цены</div>
      <div className="styles-art">
        <div className="styles__item">
          <Link to="/products#beauty-art">
            <img
              className="styles__image"
              src="/images/styles/Бьюти-арт/бьюти-арт.jpg"
              alt=""
            />
          </Link>
          <span className="styles-name"> Бьюти-арт портрет</span>
          <span className="styles-price">От 1590 руб.</span>
        </div>

        <div className="styles__item">
          <Link to="/products#digital">
            <img
              className="styles__image"
              src="/images/styles/Диджитал/диджитал.jpg"
              alt=""
            />
          </Link>

          <span className="styles-name"> Диджитал-портрет</span>
          <span className="styles-price"> От 2800 руб.</span>
        </div>

        <div className="styles__item">
          <Link to="/products#oli-art">
            <img
              className="styles__image"
              src="/images/styles/Имитация масла/первое фото.jpg"
              alt=""
            />
          </Link>

          <span className="styles-name"> Имитация масла </span>
          <span className="styles-price"> От 950 руб.</span>
        </div>

        <div className="styles__item">
          <a href="#">
            <img
              className="styles__image"
              src="/images/styles/Портрет в образе/первая портрет в образе.jpg"
              alt=""
            />
          </a>
          <span className="styles-name">Портрет в образе </span>
          <span className="styles-price"> От 1090 руб.</span>
        </div>

        <div className="styles__item">
          <a href="#">
            <img
              className="styles__image"
              src="/images/styles/Фьюжн/002.jpg"
              alt=""
            />
          </a>
          <span className="styles-name"> Фьюжн </span>
          <span className="styles-price"> От 1890 руб.</span>
        </div>

        <div className="styles__item">
          <a href="#">
            <img
              className="styles__image"
              src="/images/styles/Карандаш/карандаш.jpg"
              alt=""
            />
          </a>
          <span className="styles-name"> Карандаш </span>
          <span className="styles-price"> От 1790 руб.</span>
        </div>

        <div className="styles__item">
          <a href="#">
            <img
              className="styles__image"
              src="/images/styles/Инфинити/инфинити.jpg"
              alt=""
            />
          </a>
          <span className="styles-name"> Инфинити </span>
          <span className="styles-price"> От 2900 руб.</span>
        </div>

        <div className="styles__item">
          <a href="#">
            <img
              className="styles__image"
              src="/images/styles/Мастихин/04.jpg"
              alt=""
            />
          </a>
          <span className="styles-name">Мастихин </span>
          <span className="styles-price"> От 2900 руб.</span>
        </div>

        <div className="styles__item">
          <a href="#">
            <img
              className="styles__image"
              src="/images/styles/Портрет питомца/питомец первое.jpg"
              alt=""
            />
          </a>
          <span className="styles-name">Портрет питомца </span>
          <span className="styles-price"> От 1490 руб.</span>
        </div>
      </div>
    </div>
  );
};

export default StylesPage;
