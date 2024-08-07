import { isMobile } from 'react-device-detect';

const modernImagesRaw = [
  {
    previewSrc:
      ' https://www.dropbox.com/scl/fi/p84hmae5iwscj36fn9u6n/750_78637387.jpg?rlkey=d7wbme1zfdj9jncl5c8sq96gc&dl=0&raw=1',
    fullSrc:
      'https://www.dropbox.com/s/7i4edocw0ch8y5n/1%20%D1%81%D0%BE%D0%B2.jpg?raw=1',
  },
  {
    previewSrc:
      'https://www.dropbox.com/scl/fi/lujxpoqxr4ghd17pqy00a/750_1200_60-60.jpg?rlkey=hwfrmaqpfib36b46ykja5mvz8&dl=0&raw=1',
    fullSrc:
      'https://www.dropbox.com/s/8vzgpzgwl1pfgvy/2%20%D1%81%D0%BE%D0%B2.jpg?raw=1',
  },
  {
    previewSrc:
      'https://www.dropbox.com/scl/fi/e3e83ort0jyeu71ojcpb8/750_1655897.jpg?rlkey=j9wx06dt4q94qc9jmr4e4vlke&dl=0&raw=1',
    fullSrc:
      'https://www.dropbox.com/s/v7aex39jw4sns2h/3%20%D1%81%D0%BE%D0%B2.jpg?raw=1',
  },
  {
    previewSrc:
      'https://www.dropbox.com/scl/fi/txn5x08eejhb9p5d07ycd/750_7863838.jpg?rlkey=00ech5hkj36dtih3qccfefgma&dl=0&raw=1',
    fullSrc:
      'https://www.dropbox.com/s/nfocse5n3f8r5wn/4%20%D1%81%D0%BE%D0%B2.jpg?raw=1',
  },
  {
    previewSrc:
      'https://www.dropbox.com/scl/fi/ppjd3affimjwjqac37alu/750_25454.jpg?rlkey=z9tt3p7pdk05csje5as7d389t&dl=0&raw=1',
    fullSrc:
      'https://www.dropbox.com/s/xtg7uqnpd6oyut1/5%20%D1%81%D0%BE%D0%B2.jpg?raw=1',
  },
  {
    previewSrc:
      'https://www.dropbox.com/scl/fi/2uwh4sbdds876ktb9i80o/750_6066_40-60.jpg?rlkey=akpaj2o6nf6bvpmjjedcau10j&dl=0&raw=1',
    fullSrc:
      'https://www.dropbox.com/s/a00yuvwfr6fjw5c/6%20%D1%81%D0%BE%D0%B2.jpg?raw=1',
  },
  {
    previewSrc:
      'https://www.dropbox.com/scl/fi/jmkxygfdo0odhbo40f3te/750_4757838.jpg?rlkey=f4tx0o33a3lwsxr4g62soh7h2&dl=0&raw=1',
    fullSrc:
      'https://www.dropbox.com/s/evbhunwxe5nl81n/7%20%D1%81%D0%BE%D0%B2.jpg?raw=1',
  },
  {
    previewSrc:
      'https://www.dropbox.com/scl/fi/fcj90u2ls6qw1a25cm8a3/750_Rodriguez-2MasterJpeg9557JSWfile-753x1024.jpg?rlkey=jx0d5wzol7v3vpdhfe0redthl&dl=0&raw=1',
    fullSrc:
      'https://www.dropbox.com/s/6i3f5tidhq14km3/8%20%D1%81%D0%BE%D0%B2.jpg?raw=1',
  },
  {
    previewSrc:
      'https://www.dropbox.com/scl/fi/e30t2i7p08n256vmrt07x/750_5190_50-701.jpg?rlkey=g6603dp2yarfa5g1hdx4ndo08&dl=0&raw=1',
    fullSrc:
      'https://www.dropbox.com/s/8r33qryxtf521xm/9%20%D1%81%D0%BE%D0%B2.jpg?raw=1',
  },
  {
    previewSrc:
      'https://www.dropbox.com/scl/fi/1mbeye1tpff1lqagx78t2/750_563783.jpg?rlkey=dianlg5wtic7yuhkn7uvv4knf&dl=0&raw=1',
    fullSrc:
      'https://www.dropbox.com/s/n0adj33in80mxtu/10%20%D1%81%D0%BE%D0%B2.jpg?raw=1',
  },
  {
    previewSrc:
      'https://www.dropbox.com/scl/fi/fl5zwkpdf6tarkjq8bcyy/750_42402b882aaa5309efcde742.jpg?rlkey=8j7sk5yii42vyka2dydd83o9s&dl=0&raw=1',
    fullSrc:
      'https://www.dropbox.com/s/8gw5jispducmchu/11%20%D1%81%D0%BE%D0%B2.jpg?raw=1',
  },
  {
    previewSrc:
      'https://www.dropbox.com/scl/fi/lwz3qio8gbq0xhzzax8m6/370_a4d4dca9a7e79172ece7be5.jpg?rlkey=chjom0q0vrx0cnfz4013bpnj4&dl=0&raw=1',
    fullSrc:
      'https://www.dropbox.com/s/7aw7yemyybpt1m0/12%20%D1%81%D0%BE%D0%B2.jpg?raw=1',
  },
];

export const modernImages = isMobile
  ? [0, 2, 4, 5, 8, 10, 1, 3, 6, 7, 9, 11].map((i) => modernImagesRaw[i])
  : modernImagesRaw;
