import "./likeness-art.css";

const LikenessArt = () => {
  return (
    <div className="likeness-art__page">
      <div id="likeness-art" className="likeness-art__container">
        <div className="likeness-art__inf">
          <div className="likeness-art__title">Портрет в образе</div>
          <div className="likeness-art__price"> От 1090 руб. </div>
          <div className="likeness-art__description">
            Портрет в образе - самое необычное перевоплощение! Лучший способ
            удивить и подарить не только портрет на долгую память, но и море
            улыбок. Если вам хочется большего, нежели перенос фото на холст —
            обратите внимание на эти работы. Яркий и беспрецедентный — именно
            такой портрет в стиле «Диджитал». Если Вы искали особенный, ни на
            что не похожий стиль, то он перед Вами. В этом стиле художник
            проявляет себя, не ограничивая привычными рамками. Стиль «Диджитал»
            — это концентрация громких восторгов и обескураживающих эмоций. Мы
            гарантируем, что результат будет ослепительным.
          </div>
          <div>
            <a href="">
              <button className="likeness-art__button" type="submit">
                Получить консультацию
              </button>
            </a>
          </div>
        </div>

        <div>
          <img
            className="likeness-art__photo"
            src="/images/styles/Портрет в образе/11o.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="likeness-art__gallery">
        <img
          className="likeness-art__image"
          src="/images/styles/Портрет в образе/1o.jpg"
          alt=""
        />
        <img
          className="likeness-art__image"
          src="/images/styles/Портрет в образе/2o.jpg"
          alt=""
        />
        <img
          className="likeness-art__image"
          src="/images/styles/Портрет в образе/3o.jpg"
          alt=""
        />
        <img
          className="likeness-art__image"
          src="/images/styles/Портрет в образе/4o.jpg"
          alt=""
        />
        <img
          className="likeness-art__image"
          src="/images/styles/Портрет в образе/6o.jpg"
          alt=""
        />
        <img
          className="likeness-art__image"
          src="/images/styles/Портрет в образе/7o.jpg"
          alt=""
        />
        <img
          className="likeness-art__horizontal"
          src="/images/styles/Портрет в образе/5o.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default LikenessArt;
