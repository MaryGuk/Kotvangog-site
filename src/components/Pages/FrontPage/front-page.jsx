import "./front-page.css";

const FrontPage = () => {
  return (
    <div className="front-page">
      <div className="front-page__content">
        <div className="front-page__title">
          Арт портрет с печатью на холсте за три дня
          <div className="front-page__subtitle">
            Вернем деньги, если не успеем в оговоренные сроки или не <br />
            понравится результат
          </div>
          <div className="front-page__text">
            Получите консультацию профессионального художника прямо сейчас
          </div>
          <div className="front-page__message">
            Нажмите кнопку! Свяжемся с Вами в течение 5 минут
          </div>
          <a href="#">
            <button className="front-page__button" type="submit">
              Получить консультацию
            </button>
          </a>
        </div>

        <img className="main-image" src="/images/112(1).jpg" alt="" />
      </div>
    </div>
  );
};

export default FrontPage;
