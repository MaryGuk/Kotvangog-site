import './title-examples.css';
import { isMobile } from 'react-device-detect';

const TitleExamples = () => {
  return (
    <div className="examples-text__title-wrapper">
      <div className="examples-text__title-first">
        <div className="examples-text__title-background">
          <img
            className="examples-text__title-background-image"
            src={
              isMobile
                ? '/images/background/примеры моб.png'
                : 'https://www.dropbox.com/scl/fi/ungyc09uwmyb183idhjcx/.png?rlkey=06vxly6c5oo0h729a31w7n2e2&dl=0&raw=1'
            }
          />
        </div>
        <div className="examples-text__title">Примеры1</div>
      </div>
    </div>
  );
};

export default TitleExamples;
