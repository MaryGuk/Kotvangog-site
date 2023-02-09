import "./infiniti-art.css";

const InfinitiArt = () => {
  return (
    <div className="infiniti-art__page">
      <div id="infiniti-art" className="infiniti-art__container">
        <div>
          <img
            className="infiniti-art__photo"
            src="/images/styles/Инфинити/инфинити.jpg"
            alt=""
          />
        </div>

        <div className="infiniti-art__information">
          <div className="infiniti-art__title"> Инфинити</div>
          <div className="infiniti-art__price"> От 2900 руб. </div>
          <div className="infiniti-art__description">
            На стиль «Инфинити» можно смотреть бесконечно. Он объединяет в себе
            два направления: черно-белый портрет и яркий граффити стиль.
            Вздорный фон и грамотные сочные акценты создают целостную картину,
            которая точно порадует своего получателя.
          </div>
          <div>
            <a href="#">
              <button className="infiniti-art__button" type="submit">
                Получить консультацию
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="infiniti-art__gallery">
        <img
          className="infiniti-art__image"
          src="/images/styles/Инфинити/1 i.jpg"
          alt=""
        />
        <img
          className="infiniti-art__image"
          src="/images/styles/Инфинити/2 i.jpg"
          alt=""
        />
        <img
          className="infiniti-art__image"
          src="/images/styles/Инфинити/4 i.jpg"
          alt=""
        />
        <img
          className="infiniti-art__image"
          src="/images/styles/Инфинити/1 i.jpg"
          alt=""
        />
        <img
          className="infiniti-art__image"
          src="/images/styles/Инфинити/5 i.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default InfinitiArt;
