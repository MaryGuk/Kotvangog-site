import "./title-history.css";

const LikenessTitle = ({text}) => {
  return (
    <div className="history-text__title-wrapper">
      <div className="history-text__title-first">
        <div className="history-text__title-background">
          <img
            className="history-text__title-background-image"
            src="/images/background/Pink wave reverse.png"
          />
        </div>
        <div className="history-text__title">{text}</div>
      </div>
    </div>
  );
};

export default LikenessTitle;
