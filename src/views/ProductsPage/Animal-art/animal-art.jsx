import "./animal-art.css";
import ImageAnimal from "./Image-animal";

const AnimalArt = () => {
  return (
    <div className="animal-art__page">
      <div className="animal-art__general">
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
              выбрать образ: исторический, современный или известное
              произведение мировых художников.
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
        <ImageAnimal />
      </div>
    </div>
  );
};

export default AnimalArt;
