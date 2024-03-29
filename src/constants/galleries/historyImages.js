import { isMobile } from 'react-device-detect';

const historyImagesRaw = [
  {
    previewSrc:
      'https://www.dropbox.com/s/bcwhbs8pncgpad1/1654_60%D1%8580.jpg?raw=1',
    fullSrc:
      'https://www.dropbox.com/s/muvrowlrzhvdg9a/1%20%D0%B8%D1%81%D1%82.jpg?raw=1',
  },
  {
    previewSrc:
      'https://www.dropbox.com/s/kdf106tt6z2plyj/1770_30%D1%85400%20%D0%BC%D0%B0%D1%81%D0%BB%D0%BE.jpg?raw=1',
    fullSrc:
      'https://www.dropbox.com/s/pls8nplo3nddkyb/2%20%D0%B8%D1%81%D1%82.jpg?raw=1',
  },
  {
    previewSrc:
      'https://www.dropbox.com/s/fboc9n7cxliycjv/1867_50%D1%8570.jpg?raw=1',
    fullSrc:
      'https://www.dropbox.com/s/b4otc7aidisaeyp/3%20%D0%B8%D1%81%D1%82.jpg?raw=1',
  },
  {
    previewSrc:
      'https://www.dropbox.com/s/7nxhairbqipbztm/Women%20geem2364.jpg?raw=1',
    fullSrc:
      'https://www.dropbox.com/s/plb6hyv460qrsk5/4%20%D0%B8%D1%81%D1%82.jpg?raw=1',
  },
  {
    previewSrc: 'https://www.dropbox.com/s/8oz61zneaz34j0c/45353453.jpg?raw=1',
    fullSrc:
      'https://www.dropbox.com/s/whmxhghnbso9tr0/5%20%D0%B8%D1%81%D1%82.jpg?raw=1',
  },
  {
    previewSrc:
      'https://www.dropbox.com/s/7um38jn3alo4zgh/5646_60%D1%8580.jpg?raw=1',
    fullSrc:
      'https://www.dropbox.com/s/8ibssqm4gi2r39e/6%20%D0%B8%D1%81%D1%82.jpg?raw=1',
  },
  {
    previewSrc:
      'https://www.dropbox.com/s/d8zylbi6lvpdy11/5958_50%D1%8570%20%D1%86%D0%B0%D1%80%D1%8C%20%D0%B3%D0%BE%D1%82%D0%BE%D0%B2%D0%BE.jpg?raw=1',
    fullSrc:
      'https://www.dropbox.com/s/fuizg3zurzac7m5/7%20%D0%B8%D1%81%D1%82.jpg?raw=1',
  },
  {
    previewSrc:
      'https://www.dropbox.com/s/aeauo89a8g52xe4/25385_30%D1%8540.jpg?raw=1',
    fullSrc:
      'https://www.dropbox.com/s/y6101yhohffuo5i/8%20%D0%B8%D1%81%D1%82.jpg?raw=1',
  },
  {
    previewSrc:
      'https://www.dropbox.com/s/fxt11vl3q0jjpsc/9489416136.jpg?raw=1',
    fullSrc:
      'https://www.dropbox.com/s/0zor4ss7y0jiep5/9%20%D0%B8%D1%81%D1%82.jpg?raw=1',
  },
  {
    previewSrc:
      'https://www.dropbox.com/s/2rdviezsohw40ld/00029D09FD0B0D180D18.jpg?raw=1',
    fullSrc:
      'https://www.dropbox.com/s/i7hbg7pio1x2o3e/10%20%D0%B8%D1%81%D1%82.jpg?raw=1',
  },
  {
    previewSrc:
      'https://www.dropbox.com/s/mgsvnp6992zdo4r/Berran_51_copy_master.jpg?raw=1',

    fullSrc:
      'https://www.dropbox.com/s/nrtgaj66843p0hv/11%20%D0%B8%D1%81%D1%82.jpg?raw=1',
  },
  {
    previewSrc:
      'https://www.dropbox.com/s/hohuc573b5uzakb/1545258747736.jpg?raw=1',
    fullSrc:
      'https://www.dropbox.com/s/lqtbxxxmimtgtx3/12%20%D0%B8%D1%81%D1%82.jpg?raw=1',
  },
];

export const historyImages = isMobile
  ? [0, 1, 5, 4, 11, 9, 2, 3, 6, 7, 8, 10].map((i) => historyImagesRaw[i])
  : historyImagesRaw;
