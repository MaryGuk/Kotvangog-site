import "./title-examples.css";
import { isMobile } from "react-device-detect";

const TitleExamples = () => {
  return (
    <div className="examples-text__title-wrapper">
      <div className="examples-text__title-first">
        <div className="examples-text__title-background">
          <img
            className="examples-text__title-background-image"
            src={
              isMobile
                ? "/images/background/примеры моб.png"
                : "/images/background/Examples.png"
            }
          />
        </div>
        <div className="examples-text__title">Примеры</div>
      </div>
    </div>
  );
};

export default TitleExamples;
