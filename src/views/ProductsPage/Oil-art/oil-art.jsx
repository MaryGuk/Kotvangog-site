import ImageOli from "./Image-oli";
import "./oil-art.css";

const OliArt = () => {
  return (
    <div className="oli-art__page">
      <div className="oli-art__general">
        <div id="oli-art" className="oli-art__container">
          <div>
            <img
              className="oli-art__photo"
              src="/images/styles/Имитация масла/первое фото.jpg"
              alt=""
            />
          </div>

          <div className="oli-art__information">
            <div className="oli-art__title"> Имитация масла</div>
            <div className="oli-art__price"> От 950 руб. </div>
            <div className="oli-art__description">
              Данный вариант - прекрасная альтернатива классике. Дизайнер
              повторяет мазки, как в традиционной живописи, что создает
              впечатление картины, написанной маслом. Особенно хорошо подойдет
              «арт гель», который предаст мазкам выраженный текстурный объём
              поверх печати.
            </div>
            <div>
              <a href="#">
                <button className="oli-art__button" type="submit">
                  Получить консультацию
                </button>
              </a>
            </div>
          </div>
        </div>

        <ImageOli />
      </div>
    </div>
  );
};

export default OliArt;
