import "./likeness-title.css";

const LikenessTitle = () => {
  return (
    <div className="likeness__title-wrapper">
      <div className="likeness__title-first">
        <div className="likeness-page__title-background">
          <img
            className="likeness__title-background-image"
            src="/images/background/green wive.png"
          />
        </div>
        <div className="likeness__title">Портрет в образе</div>
      </div>
    </div>
  );
};

export default LikenessTitle;
