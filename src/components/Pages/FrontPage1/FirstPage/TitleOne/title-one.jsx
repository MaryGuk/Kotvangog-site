import "./title-one.css";

const TitleOne = () => {
  return (
    <div className="title-one__title-wrapper">
      <div className="title-one__title-first">
        <div className="title-one-page__title-background">
          <img
            className="title-one__title-background-image"
            src="/images/background/waveOne1.png"
          />
        </div>
        <div className="title-one__title">Уникальные портреты и картины</div>
      </div>
    </div>
  );
};

export default TitleOne;
