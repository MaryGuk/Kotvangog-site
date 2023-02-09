import "./pencil-art.css";

const PencilArt = () => {
  return (
    <div className="pencil-art__page">
      <div id="pencil-art" className="pencil-art__container">
        <div className="pencil-art__inf">
          <div className="pencil-art__title">Карандаш</div>
          <div className="pencil-art__price"> От 1790 руб. </div>
          <div className="pencil-art__description">
            Портрет карандашом - любимый всеми классический портрет, который
            будет актуальным и стильным всегда. Художник-дизайнер на планшете с
            нуля рисует портрет на основе предоставленной фотографии. Далее
            макет можно перенести на холст любого размера.
          </div>
          <div>
            <a href="">
              <button className="pencil-art__button" type="submit">
                Получить консультацию
              </button>
            </a>
          </div>
        </div>

        <div>
          <img
            className="pencil-art__photo"
            src="/images/styles/Карандаш/карандаш.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="pencil-art__gallery">
        <img
          className="pencil-art__image"
          src="/images/styles/Портрет в образе/1o.jpg"
          alt=""
        />
        <img
          className="pencil-art__image"
          src="/images/styles/Портрет в образе/2o.jpg"
          alt=""
        />
        <img
          className="pencil-art__image"
          src="/images/styles/Портрет в образе/3o.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default PencilArt;
