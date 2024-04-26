import './processMobileTitle.css';
import brushSrc from '../../../../images/brushes/brush7.svg';

const ProcessMobileTitle = () => {
  return (
    <div className="process-mobile__title-wrapper">
      <div className="process-mobile__title-first">
        <div className="process-mobile-page__title-background">
          <img
            className="process-mobile__title-background-image"
            src={brushSrc}
            alt=""
          />
        </div>
        <div className="process-mobile__title">Как дизайнер рисует портрет</div>
      </div>
    </div>
  );
};

export default ProcessMobileTitle;
