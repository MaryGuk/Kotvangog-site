import {
  OilStylesSizeWrapper,
  OilStylesSizeDescription,
  OilStylesSizeGeneral,
  OilSizeTextOneContainer,
  OilSizeTextOne,
  OilSizeTextOneOil2,
  OilSizeTextTwoContainer,
  OilSizeTextTwo,
  OilSizeContainer,
} from './styled';
import { isMobile } from 'react-device-detect';

import OilStylesSizeDesktopItem from './OilStylesSizeDesktopItem';
import OilStylesSizeMobileItem from './OilStylesSizeMobileItem';
import PortraitSizesTitle from '../ArtStylesSize/PortraitSizesTitle/PortraitSizesTitle';

const OilSize = () => {
  return (
    <OilStylesSizeWrapper>
      <OilStylesSizeGeneral>
        <PortraitSizesTitle />
        <OilStylesSizeDescription>
          <OilSizeTextOneContainer>
            <OilSizeTextOne>Портрет или картина маслом</OilSizeTextOne>
            <OilSizeTextOneOil2>(100% ручная работа) </OilSizeTextOneOil2>
          </OilSizeTextOneContainer>
          <OilSizeTextTwoContainer>
            <OilSizeTextTwo>
              Возможно изготовление любых размеров.{' '}
              <span
                style={{
                  fontSize: '12px',
                  color: '#414141',
                  fontFamily: 'Century Gothic',
                }}
              >
                Цены указаны без работы дизайнера
              </span>
            </OilSizeTextTwo>
          </OilSizeTextTwoContainer>
        </OilStylesSizeDescription>

        <OilSizeContainer>
          {[
            {
              imageSrc:
                'https://www.dropbox.com/scl/fi/66emeo7tqa3w78afqqgyj/g1.jpg?rlkey=57ovsy7x3l09pegdizqej5uxi&raw=1',
              imageSize: '30×40',
              oilDescription: 'От 5600 руб.',
            },
            {
              imageSrc:
                'https://www.dropbox.com/scl/fi/rg2fhz21m8rnv2cu45esy/g2.jpg?rlkey=fs4vdqj4rjb0oan8yqjl88ynt&raw=1',
              imageSize: '40×60',
              oilDescription: 'От 8800 руб.',
            },
            {
              imageSrc:
                'https://www.dropbox.com/scl/fi/hqqv1wyux6tqd87y7z6ab/g3-1.jpg?rlkey=4i7prdgtqlt9aq9qhtmj6yfvi&raw=1',
              imageSize: '50×70',
              oilDescription: 'От 11900 руб.',
            },
            {
              imageSrc:
                'https://www.dropbox.com/scl/fi/175cgekuvoog3oxe5jov6/g4.jpg?rlkey=6wj8yjmwg5y839wmh0xv3mwwl&raw=1',
              imageSize: '60×80',
              oilDescription: 'От 13700 руб.',
            },
            {
              imageSrc:
                'https://www.dropbox.com/scl/fi/wpwuzaj8hvdnoy0m6wbpp/g5.jpg?rlkey=tef9ai99q9yv5kjkjejs849jl&raw=1',
              imageSize: '70×90',
              oilDescription: 'От 19500 руб.',
            },
          ].map(({ imageSrc, imageSize, oilDescription }, idx, arr) =>
            isMobile ? (
              <OilStylesSizeMobileItem
                key={idx}
                imageSrc={imageSrc}
                imageSize={imageSize}
                oilDescription={oilDescription}
                idx={idx}
                lastItem={idx === arr.length - 1}
                columnCount={2}
              />
            ) : (
              <OilStylesSizeDesktopItem
                key={idx}
                imageSrc={imageSrc}
                imageSize={imageSize}
                oilDescription={oilDescription}
              />
            )
          )}
        </OilSizeContainer>
      </OilStylesSizeGeneral>
    </OilStylesSizeWrapper>
  );
};

export default OilSize;
