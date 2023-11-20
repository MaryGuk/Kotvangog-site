import "./process-master.css";
import {
  ProcessItemStepVideoWrapper,
  ProcessItemVideoStepWrapper,
  ProcessSlideWrapper,
  ProcessVideoStepsWrapper
} from "../styled";
import {Typography} from "@mui/material";
import {processVideoStepsData} from "../../../../constants/mainConstants";
import MasterInfoBlock from "./MasterInfoBlock";

const ProcessMaster = () => {
  return (
    <ProcessSlideWrapper>
      <ProcessVideoStepsWrapper>
        <Typography variant="h4" textAlign="left">Посмотрите 60-секундное видео</Typography>

        {processVideoStepsData.map(({ videoSrc, videoTitle, description }, idx) => (
          <ProcessItemVideoStepWrapper key={idx}>
            <Typography variant="body2" textAlign="left">{description}</Typography>

            <ProcessItemStepVideoWrapper>
              <iframe
                src={videoSrc}
                title={videoTitle}
                allowFullScreen
              />
            </ProcessItemStepVideoWrapper>
          </ProcessItemVideoStepWrapper>
        ))}
      </ProcessVideoStepsWrapper>

      <MasterInfoBlock />
    </ProcessSlideWrapper>
  );
};
export default ProcessMaster;
