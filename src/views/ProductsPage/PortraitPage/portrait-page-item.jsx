import "./portrait-page-item.css";

const PortraitPageItem = ({
  portraitTitle,
  portraitPrice,
  portraitDescription,
}) => {
  return (
    <div className="beauty-art__information">
      <div className="beauty-art__information">
        <div className="beauty-art__title">{portraitTitle}</div>
        <div className="beauty-art__price">{`От ${portraitPrice} руб.`}</div>
        <div className="beauty-art__description">{portraitDescription}</div>
      </div>

      <div>
        <a href="#">
          <button className="beauty-art__button" type="submit">
            Получить консультацию
          </button>
        </a>
      </div>
    </div>
  );
};

export default PortraitPageItem;
