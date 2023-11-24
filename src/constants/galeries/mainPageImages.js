import { addRedirectLink, normalizeDropBoxLink } from '../../utils/linkUtils';
import { productPageData } from '../mainConstants';

export const mainSlideFramesGallery = [
  'https://www.dropbox.com/scl/fi/i4b4rcjckexudbasgc9xf/0007_750px.png?rlkey=3z81c1j4dun5pob4453c67kl6&dl=0',
  'https://www.dropbox.com/scl/fi/n42wefk3qlo20oyigfxw5/0008_750px.png?rlkey=l4mgaf36autdvc2406tlhl3zc&dl=0',
  'https://www.dropbox.com/scl/fi/l9o4a8097p67fvvpaz4ca/0009_750px.png?rlkey=oz8t52dvqamjfcouylbcl2tcc&dl=0',
  'https://www.dropbox.com/scl/fi/scg4024lsw6uhmi2h14kv/00010_750px.png?rlkey=b8nj0i1ii11atbizhsg6isgj2&dl=0',
  'https://www.dropbox.com/scl/fi/xh7b71oj3zv9ni2k1o3lz/00011_750px.png?rlkey=lk58et701rajag48gwb38i7ek&dl=0',
].map(normalizeDropBoxLink);

export const oilSlideFramesGallery = [
  'https://www.dropbox.com/scl/fi/mn8fa7t724hzl452r862y/00001_1000px_progressive.jpg?rlkey=wwuxtfni2vlvdt3pqx30x7wzv&dl=0',
  'https://www.dropbox.com/scl/fi/g7gnzy4xe9k174chj4azx/00002_1000px_progressive.jpg?rlkey=ur6gdsjtnxxfgo6nwxdb52ba5&dl=0',
  'https://www.dropbox.com/scl/fi/nqxdeh46o7k9bkleenapx/00003_1000px_progressive.jpg?rlkey=gaps5hpsb7yquu3zevm0f2tl5&dl=0',
  'https://www.dropbox.com/scl/fi/9lvo60877jzv96deq6wdv/00004_1000px_progressive.jpg?rlkey=9su8p8709eycktyy3pc0zabnm&dl=0',
  'https://www.dropbox.com/scl/fi/j0zmzufg9g3508pmd8o2v/00005_1000px_progressive.jpg?rlkey=jnqye4wfxmazu3v0ujbxkthxq&dl=0',
  'https://www.dropbox.com/scl/fi/ldewdlolwccu3c6sj5r3w/00006_1000px_progressive.jpg?rlkey=ffuyac7g5dtvdy7t01furjbnn&dl=0',
]
  .map(normalizeDropBoxLink)
  .map(addRedirectLink('/oil-portrait'));

export const presentSlideImages = [
  'https://www.dropbox.com/scl/fi/3iyzchqxez8o4acffvzj4/IMG_5213_400px_progressive.jpg?rlkey=a7k3nqll5wjzfdjfuiulujroc&dl=0',
  'https://www.dropbox.com/scl/fi/l2tnv9bu1cu3zkgw0uswd/IMG_5543_400px_progressive.jpg?rlkey=jrn6jrwoixaqkchpty671ivsc&dl=0',
  'https://www.dropbox.com/scl/fi/3xxekf95nprcdxe7qqn69/IMG_5550_400px_progressive.jpg?rlkey=f003mx3rz141osunmap3xcu8a&dl=0',
].map(normalizeDropBoxLink);

export const eventsSlideGallery = [
  {
    imageSrc:
      'https://www.dropbox.com/scl/fi/yd8d436ztm5njoy0ynqup/0_-_1000px_progressive.jpg?rlkey=tplu9hvlf465swhg8dwopulzn&dl=0',
    imageSrc_1000:
      'https://www.dropbox.com/scl/fi/yd8d436ztm5njoy0ynqup/0_-_1000px_progressive.jpg?rlkey=tplu9hvlf465swhg8dwopulzn&dl=0',
    imageSrc_500:
      'https://www.dropbox.com/scl/fi/t0erzoqs0cfok85y4j20a/0_-_500px_progressive.jpg?rlkey=6sq2jyj1ox9ogzzsesu3t488u&dl=0',
    description: 'Портрет на день рождения',
  },
  {
    imageSrc:
      'https://www.dropbox.com/scl/fi/d49fx8czp4po5dhm0vafn/1_-_1000px_progressive.jpg?rlkey=l32ccvmo0ahk0jm2kzsok2355&dl=0',
    imageSrc_1000:
      'https://www.dropbox.com/scl/fi/d49fx8czp4po5dhm0vafn/1_-_1000px_progressive.jpg?rlkey=l32ccvmo0ahk0jm2kzsok2355&dl=0',
    imageSrc_500:
      'https://www.dropbox.com/scl/fi/rhzhdreslinsbi7krp8rp/1_-_500px_progressive.jpg?rlkey=ngfxhz1xvpegg30woq4h5u4gd&dl=0',
    description: 'Портрет на  новый год',
  },
  {
    imageSrc:
      'https://www.dropbox.com/scl/fi/xvnuxiyqc0eqech2jyx70/2_-_1000px_progressive.jpg?rlkey=t03hwkem638s6eqf9tv33w79a&dl=0',
    imageSrc_1000:
      'https://www.dropbox.com/scl/fi/xvnuxiyqc0eqech2jyx70/2_-_1000px_progressive.jpg?rlkey=t03hwkem638s6eqf9tv33w79a&dl=0',
    imageSrc_500:
      'https://www.dropbox.com/scl/fi/s8xcq0ugpivr0cm7cclm1/2_-_500px_progressive.jpg?rlkey=tlfs4pbkqvt0lp5fci6upq1tp&dl=0',
    description: 'Портрет на  день влюбленных',
  },
  {
    imageSrc:
      'https://www.dropbox.com/scl/fi/ccd0mg9nscb58mpvjcrqi/4_-23-_1000px_progressive.jpg?rlkey=dd3hu85cd2z019o7mn5umzzdu&dl=0',
    imageSrc_1000:
      'https://www.dropbox.com/scl/fi/ccd0mg9nscb58mpvjcrqi/4_-23-_1000px_progressive.jpg?rlkey=dd3hu85cd2z019o7mn5umzzdu&dl=0',
    imageSrc_500:
      'https://www.dropbox.com/scl/fi/qyz5rv83icysejivzzwf4/4_-23-_500px_progressive.jpg?rlkey=6bl9pkf0c78u6zwgu3tkd3df1&dl=0',
    description: 'Портрет на  23 февраля',
  },
  {
    imageSrc:
      'https://www.dropbox.com/scl/fi/tfgk7bv8excvgyz3ofrzb/5_-_1000px_progressive.jpg?rlkey=63s15z1dff3q8bo5kywk3048f&dl=0',
    imageSrc_1000:
      'https://www.dropbox.com/scl/fi/tfgk7bv8excvgyz3ofrzb/5_-_1000px_progressive.jpg?rlkey=63s15z1dff3q8bo5kywk3048f&dl=0',
    imageSrc_500:
      'https://www.dropbox.com/scl/fi/ejmcbbeavqsbxfp1zod1f/5_-_500px_progressive.jpg?rlkey=apboblxz3a7r6ka0z1kxy25dx&dl=0',
    description: 'Портрет для питомца',
  },
  {
    imageSrc:
      'https://www.dropbox.com/scl/fi/m3vlyxhtekax4yh43kqbj/6_-_1000px_progressive.jpg?rlkey=4gurs7mefsn3qz70jifmtspx0&dl=0',
    imageSrc_1000:
      'https://www.dropbox.com/scl/fi/m3vlyxhtekax4yh43kqbj/6_-_1000px_progressive.jpg?rlkey=4gurs7mefsn3qz70jifmtspx0&dl=0',
    imageSrc_500:
      'https://www.dropbox.com/scl/fi/tcbicgphrxw5j81sri1ju/6_-_500px_progressive.jpg?rlkey=0ws6vr9mupwkzipnivsn2tmkf&dl=0',
    description: 'Портрет на  память',
  },
].map(({ imageSrc, imageSrc_1000, imageSrc_500, description }) => ({
  imageSrc: normalizeDropBoxLink(imageSrc),
  imageSrc_1000: normalizeDropBoxLink(imageSrc_1000),
  imageSrc_500: normalizeDropBoxLink(imageSrc_500),
  description,
}));

export const newCanvasSlideGalleryDesktop = [
  'https://www.dropbox.com/scl/fi/cd45rc2cdllpwe6b3niak/1_5515641651_500px_progressive.jpg?rlkey=llc4fun5w7induwd52jr4j72b&dl=0',
  'https://www.dropbox.com/scl/fi/jfvthc69fagvgnmbcdv71/2_453453_500px_progressive.jpg?rlkey=o9540jq6i34cwlf8dam30mbnw&dl=0',
  'https://www.dropbox.com/scl/fi/fb0ztz8j10fdrcmxapxqj/3_4564_500px_progressive.jpg?rlkey=6cwutivfw3mup1xtnpd415huq&dl=0',
  'https://www.dropbox.com/scl/fi/78bfdaw4mdquoow45p13u/4_753735_500px_progressive.jpg?rlkey=nfpvo6ag5k5jopeafk4e03bha&dl=0',
  'https://www.dropbox.com/scl/fi/9i64p6a23haboh2n7zypz/5_56151_500px_progressive.jpg?rlkey=ikzlz72nr2unbhyvupp5nanag&dl=0',
  'https://www.dropbox.com/scl/fi/zvjej275lprkexqugph92/6_85451616_500px_progressive.jpg?rlkey=nv3dad5dc0z29kc0nfqv96hx4&dl=0',
]
  .map(normalizeDropBoxLink)
  .map(
    addRedirectLink(`/products#${Object.values(productPageData)[0].imageId}`)
  );

export const newCanvasSlideGallery = [
  'https://www.dropbox.com/scl/fi/edrz17cq169liodv3xsig/1_5515641651_1000px_progressive.jpg?rlkey=5o5hdhg609njcmr8m6aruk5s5&dl=0',
  'https://www.dropbox.com/scl/fi/pkr85wjutme81ovi42jyd/2_453453_1000px_progressive.jpg?rlkey=d2xmjd6j0o5bs83h1lihs2vaq&dl=0',
  'https://www.dropbox.com/scl/fi/58d5ogw5ickdgwroi1qgo/3_4564_1000px_progressive.jpg?rlkey=5dv1qyhch9hbya095nxzuz3cl&dl=0',
  'https://www.dropbox.com/scl/fi/2519mk2d853r5bt195ktq/4_753735_1000px_progressive.jpg?rlkey=7y37zom5yhjrun6npna7c1y2x&dl=0',
  'https://www.dropbox.com/scl/fi/zpzma0tkz22fx992l9qfx/5_56151_1000px_progressive.jpg?rlkey=1vcnddbrqnp3u5e9vz2qli25h&dl=0',
  'https://www.dropbox.com/scl/fi/xcklcxgns5x42uscy7j5h/6_85451616_1000px_progressive.jpg?rlkey=s7za4lxcgoq96s2wa8zzvq2ll&dl=0',
]
  .map(normalizeDropBoxLink)
  .map(
    addRedirectLink(`/products#${Object.values(productPageData)[0].imageId}`)
  );
