import { isMobile } from 'react-device-detect';
import './title-modern.css';

const TitleModern = () => {
  return (
    <div className="modern-text__title-wrapper">
      <div className="modern-text__title-first">
        <div className="modern-text__title-background">
          <img
            className="modern-text__title-background-image"
            src={
              isMobile
                ? '/images/frame title.png'
                : '/images/background/Examples.png'
            }
            alt=""
          />
        </div>
        <div className="modern-text__title">Современные образы</div>
      </div>
    </div>
  );
};

export default TitleModern;
