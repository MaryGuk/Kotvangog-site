import './process-page.css';
import ProcessItem from './ProcessItem';
import { MainPageItemWrapper } from '../../../views/MainPage/styled';
import { MasterInfoWrapper, ProcessMobileContent } from './styled';
import { useTranslation } from 'react-i18next';
import ProcessPageTitle from './ProcessPageTitle/ProcessPageTitle';
import { isMobile } from 'react-device-detect';
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
            <BrashTitle brashSrc={brashSrc} brashWidth="20rem" translateY={-16}>
              <Typography variant="h4" color={palette.text.secondary}>
                Как дизайнер рисует портрет
              </Typography>
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

          {!isMobile && (
            <div className="process-page__information">
              <MasterInfoWrapper>
                <img
                  className="process-ava"
                  src="https://www.dropbox.com/scl/fi/0e6ki42jrovkd8pyh8596/1100_.png?rlkey=06ccss6335lv26nd5psf0yog3&dl=0&raw=1"
                  loading="lazy"
                  decoding="async"
                  alt="Любовь Ненадовец"
                />
              </MasterInfoWrapper>

              <div className="process-text__container">
                <div className="process-inf__text">
                  {t('processPage.info_text1')}
                </div>

                <div className="process-inf__text2">
                  {t('processPage.info_text2')}
                </div>

                <div className="process-inf__text3">
                  {t('processPage.info_text3')}
                </div>

                <div className="process-arrow__container">
                  <img
                    className="process-arrow"
                    src="/images/arrow.png"
                    alt=""
                  />
                </div>
              </div>

              <div className="process-video">
                <iframe
                  className="process-video"
                  src="https://www.youtube.com/embed/Ml7CWmrXmsE?autoplay=0"
                  title="Портрет Энид Синклер из сериала Уэнсдей"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="process-author">
                <a
                  href="https://www.instagram.com/nen_nenad/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="process-author__name">
                    {t('processPage.author-name')}
                  </div>
                  <div className="author-name__color">
                    {t('processPage.author-name__color')}
                  </div>
                </a>
              </div>
            </div>
          )}
        </div>
      </MainPageItemWrapper>
    </Box>
  );
};

export default ProcessPage;
