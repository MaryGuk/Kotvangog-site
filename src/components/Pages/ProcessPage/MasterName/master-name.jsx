import "./master-name.css";

const MasterName = () => {
  return (
    <div className="master-name__title-wrapper">
      <div className="master-name__title-first">
        <div className="master-name-page__title-background">
          <img
            className="master-name__title-background-image"
            src="/images/background/Master name.png"
          />
        </div>

        <div className="master-name__container">
          <div className="master-name__title">Любовь Ненадовец</div>
          <div className="master-name__title2">
            Художник мастерской KOTVANGOG
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasterName;
