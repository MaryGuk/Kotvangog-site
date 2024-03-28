import './process-page.css';
import ProcessItem from './ProcessItem';
import { MainPageItemWrapper } from '../../../views/MainPage/styled';
import { ProcessMobileContent } from './styled';
import { useTranslation } from 'react-i18next';
import ProcessPageTitle from './ProcessPageTitle/ProcessPageTitle';
import BrashTitle from '../../Autumn2023Update/BrashTitle';
import brashSrc from '../../../images/brashes/brash7.svg';
import { Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const ProcessPage = () => {
  const { t } = useTranslation();
  const { palette } = useTheme();

  return (
    <Box className="process-page" bgcolor={palette.background.default}>
      <MainPageItemWrapper>
        <div className="process-page__general">
          <ProcessPageTitle />
          <ProcessMobileContent>
            <BrashTitle
              brashSrc={brashSrc}
              brashWidth="20rem"
              translateY={-6}
              translateX={6}
            >
              <Typography variant="h4">Как дизайнер рисует портрет</Typography>
            </BrashTitle>
          </ProcessMobileContent>

          <div className="process-page__container">
            {[
              {
                imageSrc:
                  'https://www.dropbox.com/scl/fi/7p95fd7ftqku8mtrfyflu/1.png?rlkey=tjj6h9zctzhy9rfgfuymvqqmy&dl=0&raw=1',
                mainDescription: t('processPage.stepOne.mainDescription'),
                secondaryDescription: t(
                  'processPage.stepOne.secondaryDescription'
                ),
              },
              {
                imageSrc:
                  'https://www.dropbox.com/scl/fi/cgjiqcvq23gmg2m1kykim/2.png?rlkey=t9mi18pf180dqmyhb08wejxn6&dl=0&raw=1',
                mainDescription: t('processPage.stepTwo.mainDescription'),
                secondaryDescription: t(
                  'processPage.stepTwo.secondaryDescription'
                ),
              },
              {
                imageSrc:
                  'https://www.dropbox.com/scl/fi/q1zznh7009qcfxdnuwc2n/3.png?rlkey=crto2g5pbfowvn7zvb2zxyfls&dl=0&raw=1',
                mainDescription: t('processPage.stepThree.mainDescription'),
                secondaryDescription: t(
                  'processPage.stepThree.secondaryDescription'
                ),
              },
            ].map((processItemProps, idx) => (
              <ProcessItem key={idx} {...processItemProps} number={idx + 1} />
            ))}
          </div>
        </div>
      </MainPageItemWrapper>
    </Box>
  );
};

export default ProcessPage;
