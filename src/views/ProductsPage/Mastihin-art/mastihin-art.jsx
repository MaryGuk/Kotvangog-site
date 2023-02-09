import "./mastihin-art.css";

const MastihinArt = () => {
  return (
    <div className="mastihin-art__page">
      <div id="mastihin-art" className="mastihin-art__container">
        <div className="mastihin-art__inf">
          <div className="mastihin-art__title">Мастихин</div>
          <div className="mastihin-art__price"> От 2900 руб. </div>
          <div className="mastihin-art__description">
            Такой стиль в портретном искусстве достаточно редок, но абсолютно
            точно - ярок и оригинален. Если Вы готовы уйти от фотографичности,
            довериться творческому полету наших дизайнеров, то данный вид
            портрета именно для Вас. Готовьтесь собрать возгласы "WOW", ведь это
            самый-самый арт. Портрет может быть выполнен как в спокойных тонах,
            так и в ярких, ослепительных тонах. Печать на холсте или портрет
            маслом в исполнении художника? Решать Вам - и в одном, и в другом
            исполнении этот вид портрета не оставит никого равнодушным.
          </div>
          <div>
            <a href="">
              <button className="mastihin-art__button" type="submit">
                Получить консультацию
              </button>
            </a>
          </div>
        </div>

        <div>
          <img
            className="mastihin-art__photo"
            src="/images/styles/Мастихин/мастихин.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="mastihin-art__gallery">
        <img
          className="mastihin-art__image"
          src="/images/styles/Мастихин/01.jpg"
          alt=""
        />
        <img
          className="mastihin-art__image"
          src="/images/styles/Мастихин/02.jpg"
          alt=""
        />
        <img
          className="mastihin-art__image"
          src="/images/styles/Мастихин/03.jpg"
          alt=""
        />
        <img
          className="mastihin-art__horizontal"
          src="/images/styles/Мастихин/05.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default MastihinArt;
