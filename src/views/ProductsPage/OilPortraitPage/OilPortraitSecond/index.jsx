import {
  OilPortraitSecondGeneral,
  OilPortraitSecondWrapper,
  OilPortraitSecondContent,
  OilPortraitSecondContentImages,
  OilPortraitSecondContentMain,
  OilMobileSecondContent,
  OilMobileSecondText1,
  OilMobileSecondText2,
  OilMobileSecondText3,
} from './styled';
import TitleWaveOil from './title-wave-oil';
import { isMobile } from 'react-device-detect';

const OilPortraitSecond = () => {
  return (
    <OilPortraitSecondWrapper>
      <OilPortraitSecondGeneral>
        <TitleWaveOil />
        <OilMobileSecondContent>
          <OilMobileSecondText1>
            Мы уделяем особое внимание деталям в портрете, чтобы
          </OilMobileSecondText1>
          <OilMobileSecondText2>
            каждая черта и особенность была
          </OilMobileSecondText2>
          <OilMobileSecondText3>передана в точности.</OilMobileSecondText3>
        </OilMobileSecondContent>
        <OilPortraitSecondContentMain>
          <OilPortraitSecondContent>
            <OilPortraitSecondContentImages>
              <img
                width={isMobile ? '176px' : '350px'}
                height="auto"
                src={
                  isMobile
                    ? 'https://www.dropbox.com/s/iwenr9p620ukemo/%D0%BF%D0%B5%D1%80%D0%B2%D0%B0%D1%8F%20%D0%BC%D0%BE%D0%B1.jpg?raw=1'
                    : 'https://www.dropbox.com/scl/fi/mgwwjqq8yzfrc45rewgsj/159752.png?rlkey=8poo4s90b425c6mwhb2ajjdg1&dl=0&raw=1'
                }
                loading="lazy"
                decoding="async"
                alt=""
              />
            </OilPortraitSecondContentImages>
            <OilPortraitSecondContentImages>
              <img
                width="auto"
                height={isMobile ? '169px' : '325px'}
                src={
                  isMobile
                    ? 'https://www.dropbox.com/s/4qs2pjkrk76qq75/%D0%B2%D1%82%D0%BE%D1%80%D0%B0%D1%8F%20%D0%BC%D0%BE%D0%B1.jpg?raw=1'
                    : 'https://www.dropbox.com/scl/fi/lgqo677en9b5nd2t9ifwn/1597523.png?rlkey=ynovq69sbh4ipfdbnfjju4bvt&dl=0&raw=1'
                }
                loading="lazy"
                decoding="async"
                alt=""
              />
            </OilPortraitSecondContentImages>

            {!isMobile && (
              <OilPortraitSecondContentImages>
                <img
                  width="auto"
                  height="326px"
                  src="https://www.dropbox.com/scl/fi/a9xzb8cfb9d6qgr72he2b/615_418941561.png?rlkey=4t27f7j65kc0a8uqyrs59kyq1&dl=0&raw=1"
                  loading="lazy"
                  decoding="async"
                  alt=""
                />
              </OilPortraitSecondContentImages>
            )}
          </OilPortraitSecondContent>
        </OilPortraitSecondContentMain>
      </OilPortraitSecondGeneral>
    </OilPortraitSecondWrapper>
  );
};

export default OilPortraitSecond;
