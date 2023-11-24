import { addRedirectLink, normalizeDropBoxLink } from '../../utils/linkUtils';
import { productPageData } from '../mainConstants';

export const likenessPhotos = [
  'https://www.dropbox.com/scl/fi/cfb41sbbc2s60a0mmv2pl/2_4353_1000px.jpg?rlkey=5cwipkeunlqwj7ul53drjs6ck&dl=0',
  'https://www.dropbox.com/scl/fi/rnw90qht49vnu5kflbf1x/2_453453_1000px_progressive.jpg?rlkey=162fyydmciy03zvrn20qi486t&dl=0',
  'https://www.dropbox.com/scl/fi/rnw90qht49vnu5kflbf1x/2_453453_1000px_progressive.jpg?rlkey=162fyydmciy03zvrn20qi486t&dl=0',
  'https://www.dropbox.com/scl/fi/t07dk6psv1zx2wd9w9kpp/4242_1000px_progressive.jpg?rlkey=5p0r0ddhy7k3h5ffn8o55uixa&dl=0',
  'https://www.dropbox.com/scl/fi/rewbj0ywpjdmnjipivzim/5463543_1000px_progressive.jpg?rlkey=crxh08nnbbsk0rsxqmhyor7de&dl=0',
]
  .map(normalizeDropBoxLink)
  .map(addRedirectLink('/products#likeness-art'));

export const petsPhotos = [
  'https://www.dropbox.com/scl/fi/6aelbpps3h9fmhep3kjof/1_57675365_1000px_progressive.jpg?rlkey=ir75o1i1n0lrsvx7nwku3sdho&dl=0',
  'https://www.dropbox.com/scl/fi/bnnxu9mksauzc5tgj0fk1/2_75757_1000px_progressive.jpg?rlkey=mq8oql0qhxnukb74lo4nlpf8m&dl=0',
  'https://www.dropbox.com/scl/fi/85oryb72fsgknzcvj3tnw/3_42473_1000px_progressive.jpg?rlkey=bxrjtlugwo0trmp505rxh910o&dl=0',
]
  .map(normalizeDropBoxLink)
  .map(addRedirectLink('/products#animal-art'));

const hiddenStylesOnMainPage = ['petPortrait', 'likenessPortrait'];

export const artStylesData = Object.keys(productPageData).reduce((acc, key) => {
  if (hiddenStylesOnMainPage.includes(key)) {
    return acc;
  }

  const currentStyle = productPageData[key];

  acc.push({
    imageSrc: currentStyle.srcAfter,
    redirectTo: `/products#${currentStyle.imageId}`,
    description: [currentStyle.portraitTitle, currentStyle.portraitPrice],
  });

  return acc;
}, []);
