import {normalizeDropBoxLink} from "../../utils/linkUtils";
import {productPageData} from "../mainConstants";

const addRedirectLink = (redirectTo) => ((imageSrc) => ({
  imageSrc,
  redirectTo
}));

export const likenessPhotos = [
  "https://www.dropbox.com/scl/fi/cfb41sbbc2s60a0mmv2pl/2_4353_1000px.jpg?rlkey=5cwipkeunlqwj7ul53drjs6ck&dl=0",
  "https://www.dropbox.com/scl/fi/gn91v0ph1km3zeqvuvs45/2_453453_1000px.jpg?rlkey=9d9l2x1jjlw15c410waqiebwv&dl=0",
  "https://www.dropbox.com/scl/fi/mkja3bwmbzqkmusezirw6/4224_1000px.jpg?rlkey=7iuhy3z6iav5z5ehq2vqdxn4p&dl=0",
  "https://www.dropbox.com/scl/fi/ey93hwzv301spew154jm5/4242_1000px.jpg?rlkey=cmooycidpjn4mkgc8esouksv9&dl=0",
  "https://www.dropbox.com/scl/fi/sq2sjkewk8fwq86afk46h/5463543_1000px.jpg?rlkey=1oj08gom4snve2yuqjpqp6kg9&dl=0",
].map(normalizeDropBoxLink).map(addRedirectLink('/products#likeness-art'));

export const petsPhotos = [
  'https://www.dropbox.com/scl/fi/aglsn7l7a92li55ei1dd0/1_57675365_1000px.jpg?rlkey=xxv5hsqecfrj6ld32cmvw1yfh&dl=0',
  'https://www.dropbox.com/scl/fi/1pb7pk75cdo6w013kpog0/2_75757_1000px.jpg?rlkey=o2uegifb8vyirfh7br4rufglc&dl=0',
  'https://www.dropbox.com/scl/fi/hjswvhvre4bef8tkvgugr/3_42473_1000px.jpg?rlkey=c4ipjyr8dbm5tpr4m6rmlcn14&dl=0',
].map(normalizeDropBoxLink).map(addRedirectLink('/products#animal-art'));

const hiddenStylesOnMainPage = ['petPortrait',  'likenessPortrait'];

export const artStylesData = Object.keys(productPageData).reduce((acc, key) => {
  if (hiddenStylesOnMainPage.includes(key)) {
    return acc;
  }

  const currentStyle = productPageData[key];

  acc.push({
    imageSrc: currentStyle.srcAfter,
    redirectTo: `/products#${currentStyle.imageId}`,
    description: [currentStyle.portraitTitle, currentStyle.portraitPrice]
  });

  return acc;
}, []);