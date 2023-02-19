import "./digital-portrait.css";
import ImageDigital from "./Image-digital";

const DigitalPortrait = () => {
  return (
    <div className="digital-art__page">
      <div className="digital-art__general">
        <div id="digital" className="digital-art__container">
          <div className="digital-art__inf">
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
              <a href="">
                <button className="digital-art__button" type="submit">
                  Получить консультацию
                </button>
              </a>
            </div>
          </div>

          <div>
            <img
              className="digital-art__photo"
              src="/images/styles/Диджитал/диджитал.jpg"
              alt=""
            />
          </div>
        </div>
        <ImageDigital />
      </div>
    </div>
  );
};

export default DigitalPortrait;
