import './likeness-title.css';
import { isMobile } from 'react-device-detect';

const LikenessTitle = () => {
  return (
    <div className="likeness__title-wrapper">
      <div className="likeness__title-first">
        <div className="likeness-page__title-background">
          <img
            className="likeness__title-background-image"
            src={
              isMobile
                ? '/images/background/розовый reverse mobile.png'
                : '/images/background/background new.png'
            }
          />
        </div>
        <div className="likeness__title">Портрет в образе</div>
      </div>
    </div>
  );
};

export default LikenessTitle;
