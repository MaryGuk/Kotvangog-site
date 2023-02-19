import ImageInfiniti from "./Image-infiniti";
import "./infiniti-art.css";

const InfinitiArt = () => {
  return (
    <div className="infiniti-art__page">
      <div className="infiniti-art__general">
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
              На стиль «Инфинити» можно смотреть бесконечно. Он объединяет в
              себе два направления: черно-белый портрет и яркий граффити стиль.
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

        <ImageInfiniti />
      </div>
    </div>
  );
};

export default InfinitiArt;
