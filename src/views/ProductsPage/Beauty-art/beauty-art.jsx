import "./beauty-art.css";

const BeautyArt = () => {
  return (
    <div className="beauty-art__page">
      <div id="beauty-art" className="beauty-art__container">
        <img
          className="beauty-art__photo"
          src="/images/styles/Бьюти-арт/бьюти-арт.jpg"
          alt=""
        />

        <div className="beauty-art__information">
          <div className="beauty-art__title"> Бьюти-арт портрет </div>
          <div className="beauty-art__price"> От 1590 руб. </div>
          <div className="beauty-art__description">
            Гладкость и блеск — главный принцип стиля. Он представляет собой
            нежный, роскошный образ. Особенностью стиля является детальная
            прорисовка портрета. Самый популярный вид исполнения - печать на
            холсте, она хорошо сочетается с текстурным гелем.
          </div>
          <div>
            <a href="#">
              <button className="beauty-art__button" type="submit">
                Получить консультацию
              </button>
            </a>
          </div>
          <div className="beauty-art__gallery">
            <img
              className="beauty-art__image"
              src="/images/styles/Бьюти-арт/1 ba.jpg"
              alt=""
            />
            <img
              className="beauty-art__image"
              src="/images/styles/Бьюти-арт/2 ba.jpg"
              alt=""
            />
            <img
              className="beauty-art__image"
              src="/images/styles/Бьюти-арт/3 ba.jpg"
              alt=""
            />
            <img
              className="beauty-art__image"
              src="/images/styles/Бьюти-арт/4 ba.jpg"
              alt=""
            />
            <img
              className="beauty-art__image"
              src="/images/styles/Бьюти-арт/5 ba.jpg"
              alt=""
            />
            <img
              className="beauty-art__image"
              src="/images/styles/Бьюти-арт/6 ba.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeautyArt;
