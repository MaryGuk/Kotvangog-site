import "./styles-page.css";

const StylesPage = () => {
  return (
    <div className="styles-page">
      <div className="styles-page__title">Стили и цены</div>
      <div className="styles-art">
        <div className="styles__item">
          <a href="#">
            <img className="styles__image" src="/images/styles/01.png" alt="" />
          </a>
          <span className="styles-name"> Бьюти-арт портрет</span>
          <span className="styles-price">От 1590 руб.</span>
        </div>

        <div className="styles__item">
          <a href="#">
            <img className="styles__image" src="/images/styles/01.png" alt="" />
          </a>
          <span className="styles-name"> Диджитал-портрет</span>
          <span className="styles-price"> От 2800 руб.</span>
        </div>

        <div className="styles__item">
          <a href="#">
            <img className="styles__image" src="/images/styles/01.png" alt="" />
          </a>
          <span className="styles-name"> Имитация масла </span>
          <span className="styles-price"> От 950 руб.</span>
        </div>

        <div className="styles__item">
          <a href="#">
            <img className="styles__image" src="/images/styles/01.png" alt="" />
          </a>
          <span className="styles-name">Портрет в образе </span>
          <span className="styles-price"> От 1090 руб.</span>
        </div>

        <div className="styles__item">
          <a href="#">
            <img className="styles__image" src="/images/styles/01.png" alt="" />
          </a>
          <span className="styles-name"> Фьюжн </span>
          <span className="styles-price"> От 2400 руб.</span>
        </div>

        <div className="styles__item">
          <a href="#">
            <img className="styles__image" src="/images/styles/01.png" alt="" />
          </a>
          <span className="styles-name"> Домашнее животное </span>
          <span className="styles-price"> в образе</span>
        </div>
        <div className="styles__item">
          <a href="#">
            <img className="styles__image" src="/images/styles/01.png" alt="" />
          </a>
          <span className="styles-name"> Портрет карандашом </span>
          <span className="styles-price"> От 1750 руб.</span>
        </div>
        <div className="styles__item">
          <a href="#">
            <img className="styles__image" src="/images/styles/01.png" alt="" />
          </a>
          <span className="styles-name"> Инфинити</span>
          <span className="styles-price"> От 2900 руб.</span>
        </div>
        <div className="styles__item">
          <a href="#">
            <img className="styles__image" src="/images/styles/01.png" alt="" />
          </a>
          <span className="styles-name">Мастихин </span>
          <span className="styles-price"> От 3100 руб.</span>
        </div>
      </div>
    </div>
  );
};

export default StylesPage;
