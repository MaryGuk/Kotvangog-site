import './process-master.css';
import {
  ProcessItemStepVideoWrapper,
  ProcessItemVideoStepWrapper,
  ProcessSlideInternalWrapper,
  ProcessSlideWrapper,
  ProcessVideoStepsTitleWrapper,
  ProcessVideoStepsWrapper,
} from '../styled';
import { Typography } from '@mui/material';
import { processVideoStepsData } from '../../../../constants/mainConstants';
import MasterInfoBlock from './MasterInfoBlock';
import { isMobile } from 'react-device-detect';

const ProcessMaster = () => {
  return (
    <ProcessSlideWrapper>
      <ProcessSlideInternalWrapper>
        <ProcessVideoStepsTitleWrapper>
          <Typography variant="h4" textAlign={isMobile ? 'left' : 'center'}>
            Посмотрите 60-секундное видео
          </Typography>

          <ProcessVideoStepsWrapper>
            {processVideoStepsData.map(
              ({ videoSrc, videoTitle, description }, idx) => (
                <ProcessItemVideoStepWrapper
                  key={idx}
                  width={idx || isMobile ? 'auto' : '50%'}
                >
                  <Typography
                    variant="body2"
                    textAlign={isMobile ? 'left' : 'center'}
                  >
                    {description}
                  </Typography>

                  <ProcessItemStepVideoWrapper>
                    <iframe src={videoSrc} title={videoTitle} allowFullScreen />
                  </ProcessItemStepVideoWrapper>
                </ProcessItemVideoStepWrapper>
              )
            )}
          </ProcessVideoStepsWrapper>
        </ProcessVideoStepsTitleWrapper>

        <MasterInfoBlock />
      </ProcessSlideInternalWrapper>
    </ProcessSlideWrapper>
  );
};
export default ProcessMaster;
