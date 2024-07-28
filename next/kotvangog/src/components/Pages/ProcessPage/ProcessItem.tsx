import {
  ProcessItemDescriptionWrapper,
  StepNumber,
  StepNumberText,
} from './styled';
import { Typography } from '@mui/material';

const ProcessItem = ({
                       imageSrc,
                       mainDescription,
                       secondaryDescription,
                       number,
                     }) => {
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
        <Typography mt="6px" variant="body2">
          {mainDescription}
        </Typography>
        <Typography fontWeight="700" variant="body2">
          {secondaryDescription}
        </Typography>
      </ProcessItemDescriptionWrapper>
    </div>
  );
};

export default ProcessItem;
