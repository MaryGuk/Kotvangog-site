import "./animal-art.css";

const AnimalArt = () => {
  return (
    <div className="animal-art__page">
      <div id="animal-art" className="animal-art__container">
        <div>
          <img
            className="animal-art__photo"
            src="/images/styles/Портрет питомца/питомец первое.jpg"
            alt=""
          />
        </div>

        <div className="animal-art__information">
          <div className="animal-art__title"> Портрет питомца</div>
          <div className="animal-art__price"> От 1490 руб. </div>
          <div className="animal-art__description">
            Выразите свою любовь к своей собаке или кошке путём превращения
            своего домашнего питомца в произведение искусства! Нужно лишь
            выбрать образ: исторический, современный или известное произведение
            мировых художников.
          </div>
          <div>
            <a href="#">
              <button className="animal-art__button" type="submit">
                Получить консультацию
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="animal-art__gallery">
        <img
          className="animal-art__image"
          src="/images/styles/Портрет питомца/1 p.jpg"
          alt=""
        />
        <img
          className="animal-art__image"
          src="/images/styles/Портрет питомца/2 p.jpg"
          alt=""
        />
        <img
          className="animal-art__horizontal"
          src="/images/styles/Портрет питомца/3 p.jpg"
          alt=""
        />
        <img
          className="animal-art__image"
          src="/images/styles/Портрет питомца/4 p.jpg"
          alt=""
        />
        <img
          className="animal-art__image"
          src="/images/styles/Портрет питомца/5 p.jpg"
          alt=""
        />
        <img
          className="oli-art__image"
          src="/images/styles/Портрет питомца/6 p.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default AnimalArt;
