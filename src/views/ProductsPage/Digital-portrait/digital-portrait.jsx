import "./digital-portrait.css";

const DigitalPortrait = () => {
  return (
    <div className="digital-art__page">
      <div className="digital-art__container">
        <div className="digital-art__information">
          <div className="digital-art__title">Диджитал-портрет</div>
          <div className="digital-art__price"> От 2800 руб. </div>
          <div className="digital-art__description">
            Яркий и беспрецедентный — именно такой портрет в стиле «Диджитал».
            Если Вы искали особенный, ни на что не похожий стиль, то он перед
            Вами. В этом стиле художник проявляет себя, не ограничивая
            привычными рамками. Стиль «Диджитал» — это концентрация громких
            восторгов и обескураживающих эмоций. Мы гарантируем, что результат
            будет ослепительным.
          </div>
          <div>
            <a href="#">
              <button className="digital-art__button" type="submit">
                Получить консультацию
              </button>
            </a>
          </div>
          <div className="digital-art__gallery">
            <img
              className="digital-art__image"
              src="/images/styles/Диджитал/1d.jpg"
              alt=""
            />
            <img
              className="digital-art__image"
              src="/images/styles/Диджитал/2d.jpg"
              alt=""
            />
            <img
              className="digital-art__image"
              src="/images/styles/Диджитал/3d.jpg"
              alt=""
            />
            <img
              className="digital-art__image"
              src="/images/styles/Диджитал/4d.jpg"
              alt=""
            />
          </div>
        </div>
        <img
          className="digital-art__photo"
          src="/images/styles/Диджитал/диджитал.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default DigitalPortrait;
