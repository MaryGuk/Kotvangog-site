import './PortraitSizesTitle.css';
import { isMobile } from 'react-device-detect';

const PortraitSizesTitle = () => {
  return (
    <div className="portrait-sizes__title-wrapper">
      <div className="portrait-sizes__title-first">
        <div className="portrait-sizes-page__title-background">
          <img
            className="portrait-sizes__title-background-image"
            src={
              isMobile
                ? '/images/background/size wave.png'
                : '/images/background/waveOne1.png'
            }
          />
        </div>
        <div className="portrait-sizes__title">Размеры и цены</div>
      </div>
    </div>
  );
};

export default PortraitSizesTitle;
