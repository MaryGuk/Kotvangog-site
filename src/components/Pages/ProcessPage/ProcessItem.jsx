import { ProcessItemDescriptionWrapper, StepNumber, StepNumberText } from "./styled";


const ProcessItem = ({ imageSrc, mainDescription, secondaryDescription, number }) => {
  return (
    <div className="process-item__wrapper">
      <div className="process-item__container">
        <img
          className="process-img"
          src={imageSrc}
          loading="lazy"
          decoding="async"
          alt=""
        />

        <StepNumber>
            <StepNumberText>{number}</StepNumberText>
        </StepNumber>
      </div>
      <ProcessItemDescriptionWrapper>
        <div className="process-main-description">{mainDescription}</div>
        <div className="process-secondary-description">
          {secondaryDescription}
        </div>
      </ProcessItemDescriptionWrapper>
    </div>
  );
};

export default ProcessItem;
