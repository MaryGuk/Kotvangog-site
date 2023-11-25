import './processMobileTitle.css';
import brashSrc from '../../../../images/brashes/brash7.svg';

const ProcessMobileTitle = () => {
  return (
    <div className="process-mobile__title-wrapper">
      <div className="process-mobile__title-first">
        <div className="process-mobile-page__title-background">
          <img
            className="process-mobile__title-background-image"
            src={brashSrc}
          />
        </div>
        <div className="process-mobile__title">Как дизайнер рисует портрет</div>
      </div>
    </div>
  );
};

export default ProcessMobileTitle;
