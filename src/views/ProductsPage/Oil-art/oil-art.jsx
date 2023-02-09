import "./oil-art.css";

const OliArt = () => {
  return (
    <div className="oli-art__page">
      <div id="oli-art" className="oli-art__container">
        <img
          className="oli-art__photo"
          src="/images/styles/Имитация масла/первое фото.jpg"
          alt=""
        />

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
          <div className="oli-art__gallery">
            <img
              className="oli-art__image"
              src="/images/styles/Имитация масла/2im.jpg"
              alt=""
            />
            <img
              className="oli-art__image"
              src="/images/styles/Имитация масла/14im.jpg"
              alt=""
            />
            <img
              className="oli-art__image"
              src="/images/styles/Имитация масла/8im.jpg"
              alt=""
            />
            <img
              className="oli-art__image"
              src="/images/styles/Имитация масла/9im.jpg"
              alt=""
            />
            <img
              className="oli-art__image"
              src="/images/styles/Имитация масла/10im.jpg"
              alt=""
            />
            <img
              className="oli-art__image"
              src="/images/styles/Имитация масла/12im.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OliArt;
