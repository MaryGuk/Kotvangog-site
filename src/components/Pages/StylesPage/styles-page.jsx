import './styles-page.css';
import { HashLink as Link } from 'react-router-hash-link';
import { MainPageItemWrapper } from '../../../views/MainPage/styled';
import { useTranslation } from 'react-i18next';
import i18n from '../../../i18n';
import StylesTitle from './StylesPageTitle/StylesTitle';
import StylesButton from '../../Button/StylesButton';
import { isMobile } from 'react-device-detect';
import { StylesImageWrapper } from './styled';

const stylesData = [
  {
    nameKey: 'stylesPage.styles_name1',
    imgSrc:
      'https://www.dropbox.com/scl/fi/a8lm54p9m1znbp7985oyr/900_1.jpg?rlkey=at7xqluge1jccvkq463en3ks1&dl=0&raw=1',
    enPrice: 'From 20$',
    ruPrice: 'От 1590 руб.',
    linkTo: '/products#beauty-art',
  },
  {
    nameKey: 'stylesPage.styles_name2',
    imgSrc:
      'https://www.dropbox.com/scl/fi/8qn76yd336nalsogrnn06/900_2.jpg?rlkey=0x8o4ubvn16j1z38gvtnw5cum&dl=0&raw=1',
    enPrice: 'From 36$',
    ruPrice: 'От 2800 руб.',
    linkTo: '/products#digital',
  },
  {
    nameKey: 'stylesPage.styles_name3',
    imgSrc:
      'https://www.dropbox.com/scl/fi/gooat8u1dmhwjabmeuas6/900_3.jpg?rlkey=7bppj4vw6lrowuq42jkl2w0eq&dl=0&raw=1',
    enPrice: 'From 13$',
    ruPrice: 'От 950 руб.',
    linkTo: '/products#oli-art',
  },
  {
    nameKey: 'stylesPage.styles_name4',
    imgSrc:
      'https://www.dropbox.com/scl/fi/kmzgcynori8l3xb5dsvip/900_4.jpg?rlkey=9r9bdc1otwtgpg7nlp94mt3bq&dl=0&raw=1',
    enPrice: 'From 20$',
    ruPrice: 'От 1490 руб.',
    linkTo: '/products#likeness-art',
  },
  {
    nameKey: 'stylesPage.styles_name5',
    imgSrc:
      'https://www.dropbox.com/scl/fi/tca9ul923ntj2mcizyyf5/900_5.jpg?rlkey=5z9l4gazyw9814pdoe4ip6mto&dl=0&raw=1',
    enPrice: 'From 25$',
    ruPrice: 'От 1890 руб.',
    linkTo: '/products#fusion-art',
  },
  {
    nameKey: 'stylesPage.styles_name6',
    imgSrc:
      'https://www.dropbox.com/scl/fi/3khx20ncl39798ngzaf2b/900_.jpg?rlkey=0xxerqnlxn4vhvnvzp5smvyed&dl=0&raw=1',
    enPrice: 'From 24$',
    ruPrice: 'От 1790 руб.',
    linkTo: '/products#pencil-art',
  },
  {
    nameKey: 'stylesPage.styles_name7',
    imgSrc:
      'https://www.dropbox.com/scl/fi/2o9mjm6n6ukis64k524ey/900_7.jpg?rlkey=vwzahv7mrai4fm5kpm8fna3xt&dl=0&raw=1',
    enPrice: 'From 38$',
    ruPrice: 'От 2900 руб.',
    linkTo: '/products#infiniti-art',
  },
  {
    nameKey: 'stylesPage.styles_name8',
    imgSrc:
      'https://www.dropbox.com/scl/fi/ogebbva9f978gvcizjvga/900_8_cutted.jpg?rlkey=3ckdlb3ljlmmkrvdf9r9q5yif&dl=0&raw=1',
    enPrice: 'From 38$',
    ruPrice: 'От 2900 руб.',
    linkTo: '/products#mastihin-art',
  },
  {
    nameKey: 'stylesPage.styles_name9',
    imgSrc:
      'https://www.dropbox.com/scl/fi/wttl1mkapko5609kju7ff/900_9.jpg?rlkey=ztfbhbefh3u4kf3ls3093wyts&dl=0&raw=1',
    enPrice: 'From 20$',
    ruPrice: 'От 1490 руб.',
    linkTo: '/products#animal-art',
  },
];

const StylesPage = () => {
  const { t } = useTranslation();
  return (
    <div className="styles-page">
      <MainPageItemWrapper>
        <div className="styles-page__general">
          <StylesTitle />
          <div className="styles-art">
            {stylesData.map(
              ({ nameKey, imgSrc, enPrice, ruPrice, linkTo }, index) => (
                <div className="styles__item" key={index}>
                  <Link to={linkTo}>
                    <div className="styles__image">
                      <StylesImageWrapper>
                        <img
                          src={imgSrc}
                          loading="lazy"
                          decoding="async"
                          alt=""
                          width="100%"
                        />
                      </StylesImageWrapper>
                    </div>
                  </Link>
                  <div className="styles-name">{t(nameKey)}</div>
                  <div className="styles-price">
                    {i18n.language === 'en' ? enPrice : ruPrice}
                  </div>
                  {isMobile ? <StylesButton /> : null}
                </div>
              )
            )}
          </div>
        </div>
      </MainPageItemWrapper>
    </div>
  );
};

export default StylesPage;
