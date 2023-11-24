import './title-frame.css';

const FrameTitle = () => {
  return (
    <div className="title-frame__title-wrapper">
      <div className="title-frame__title-first">
        <div className="title-frame__title-background">
          <img
            className="title-frame__title-background-image"
            src="/images/frame title.png"
          />
        </div>

        <div className="title-frame__title">Примеры в раме</div>
      </div>
    </div>
  );
};

export default FrameTitle;
