import "./fusion-art.css";
import ImageFusion from "./Image-fusion";

const FusionArt = () => {
  return (
    <div className="fusion-art__page">
      <div className="fusion-art__general">
        <div id="fusion-art" className="fusion-art__container">
          <div>
            <img
              className="fusion-art__photo"
              src="/images/styles/Фьюжн/фьюжн.jpg"
              alt=""
            />
          </div>

          <div className="fusion-art__information">
            <div className="fusion-art__title"> Фьюжн </div>
            <div className="fusion-art__price"> От 1890 руб. </div>
            <div className="fusion-art__description">
              Стиль «Фьюжн» всё больше набирает популярность, и, наверное, уже
              стал классикой. Особенность этого стиля в смелых пастозных мазках.
              Фон предоставляем на Ваш выбор. Портрет отлично работает в тандеме
              с услугой «арт-гель», придающей объём картине. Печать на холсте
              или портрет маслом на холсте —«Фюжн» превосходен в любом виде…
            </div>
            <div>
              <a href="#">
                <button className="fusion-art__button" type="submit">
                  Получить консультацию
                </button>
              </a>
            </div>
          </div>
        </div>

        <ImageFusion />
      </div>
    </div>
  );
};
export default FusionArt;
