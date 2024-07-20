import { addRedirectLink, normalizeDropBoxLink } from '../../utils/linkUtils';
import { productPageData } from '../mainConstants';

export const mainSlideFramesGallery = [
  'https://www.dropbox.com/scl/fi/i4b4rcjckexudbasgc9xf/0007_750px.png?rlkey=3z81c1j4dun5pob4453c67kl6&dl=0',
  'https://www.dropbox.com/scl/fi/n42wefk3qlo20oyigfxw5/0008_750px.png?rlkey=l4mgaf36autdvc2406tlhl3zc&dl=0',
  'https://www.dropbox.com/scl/fi/l9o4a8097p67fvvpaz4ca/0009_750px.png?rlkey=oz8t52dvqamjfcouylbcl2tcc&dl=0',
  'https://www.dropbox.com/scl/fi/scg4024lsw6uhmi2h14kv/00010_750px.png?rlkey=b8nj0i1ii11atbizhsg6isgj2&dl=0',
  'https://www.dropbox.com/scl/fi/xh7b71oj3zv9ni2k1o3lz/00011_750px.png?rlkey=lk58et701rajag48gwb38i7ek&dl=0',
].map(normalizeDropBoxLink);

export const mainSlideFramesGalleryCloudinary = [
  'kot-vangog/main-page/1-main-slide/axqqq3ine0ooj458oqwy',
  'kot-vangog/main-page/1-main-slide/hph9ij9bqwbtv8sr7g0a',
  'kot-vangog/main-page/1-main-slide/ahevgvleiutadcyqemk1',
  'kot-vangog/main-page/1-main-slide/p7tblpkourpeqkiabzsp',
  'kot-vangog/main-page/1-main-slide/el1ynmhpphku8wyyhpdv',
];

// TODO : add 500px for PC OilCanvasGrid
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
      'https://www.dropbox.com/scl/fi/hiqvoe8zniag2dq1g6w7a/0_.jpg?rlkey=elyh84cib5yw3lhz8whvfyrwn&dl=0',
    imageSrc_1000:
      'https://www.dropbox.com/scl/fi/qgatcdxvkek4tx1q3unmv/0_-_1000px_progressive.jpg?rlkey=54tyhtzxqlg6qkli0oum1uz2t&dl=0',
    imageSrc_500:
      'https://www.dropbox.com/scl/fi/hiza7onsu7vfax2itonuw/0_-_500px_progressive.jpg?rlkey=1j96g5nmk70pydfokcqn8l1yf&dl=0',
    cloudinaryId: 'kot-vangog/main-page/2-events-slide/hrpuk92zth8lxljijoom',
    description: 'Портрет на день рождения',
  },
  {
    imageSrc:
      'https://www.dropbox.com/scl/fi/ad3h5lm3nkzvjyam2mhxp/1_.jpg?rlkey=9mf61kf8lz964o391rnsougjx&dl=0',
    imageSrc_1000:
      'https://www.dropbox.com/scl/fi/ij59j7pn7emn3qu84nxek/1_-_1000px_progressive.jpg?rlkey=jn4ocihsf4gtz95xm61zs29mb&dl=0',
    imageSrc_500:
      'https://www.dropbox.com/scl/fi/pmgh7c618unxuj6zm9yuz/1_-_500px_progressive.jpg?rlkey=fw2w83p0i4hkqa9vsotjcuk3l&dl=0',
    cloudinaryId: 'kot-vangog/main-page/2-events-slide/nmlsemg2kyqpji3acp2v',
    description: 'Портрет на  новый год',
  },
  {
    imageSrc:
      'https://www.dropbox.com/scl/fi/qsv4z6n2n9qlmk42q0gd6/2_.jpg?rlkey=l0gyu3o6odkmt623p8m5kn8cp&dl=0',
    imageSrc_1000:
      'https://www.dropbox.com/scl/fi/p0ib5lvv56zf8267bfr5j/2_-_1000px_progressive.jpg?rlkey=uesdedv2gnryra699bpmbur09&dl=0',
    imageSrc_500:
      'https://www.dropbox.com/scl/fi/yhckfquxc8yubcshesn5e/2_-_500px_progressive.jpg?rlkey=6cinnuv5jsdfgf79m51geidco&dl=0',
    cloudinaryId: 'kot-vangog/main-page/2-events-slide/gseroanicmr3uhu3we1t',
    description: 'Портрет на  день влюбленных',
  },
  {
    imageSrc:
      'https://www.dropbox.com/scl/fi/tmc8ronxwvmxwh3f8ker1/4_-23.jpg?rlkey=1buxdoeh2nys3vv70gzzfhv0j&dl=0',
    imageSrc_1000:
      'https://www.dropbox.com/scl/fi/gohhwf8uaml6zkhf4ka05/4_-23-_1000px_progressive.jpg?rlkey=jyqccz3pz9v7cfwqvtqrupyei&dl=0',
    imageSrc_500:
      'https://www.dropbox.com/scl/fi/ozrhl1mzb7j7vhmw3g3pf/4_-23-_500px_progressive.jpg?rlkey=q1l9edlw98o3yuh8yeugndyvx&dl=0',
    cloudinaryId: 'kot-vangog/main-page/2-events-slide/c4pvoffsakos0rlqbvut',
    description: 'Портрет на  23 февраля',
  },
  {
    imageSrc:
      'https://www.dropbox.com/scl/fi/wcuah4uuckcv43bi2of64/5_.jpg?rlkey=7boj0e1l4lfl38htix9fl69wf&dl=0',
    imageSrc_1000:
      'https://www.dropbox.com/scl/fi/ketfebruhiikdiud34hjj/5_-_1000px_progressive.jpg?rlkey=2qk1w0d2e3hmm1gjh1bhl1v4g&dl=0',
    imageSrc_500:
      'https://www.dropbox.com/scl/fi/u0qo7zccuxi1jk73zt2lp/5_-_500px_progressive.jpg?rlkey=0fobp7app3hgaa2olqlhv65xv&dl=0',
    cloudinaryId: 'kot-vangog/main-page/2-events-slide/q6qtc0bkr3gavuxjyvem',
    description: 'Портрет для питомца',
  },
  {
    imageSrc:
      'https://www.dropbox.com/scl/fi/2notowjz0sxbuqa6ps2jk/6_.jpg?rlkey=369cyfzsplcswxjssv859a4wg&dl=0',
    imageSrc_1000:
      'https://www.dropbox.com/scl/fi/dhc1ljlrjmhukgxidr95w/6_-_1000px_progressive.jpg?rlkey=nd2yviqzftw3ly7u9skjk3n4t&dl=0',
    imageSrc_500:
      'https://www.dropbox.com/scl/fi/tcbicgphrxw5j81sri1ju/6_-_500px_progressive.jpg?rlkey=0ws6vr9mupwkzipnivsn2tmkf&dl=0',
    cloudinaryId: 'kot-vangog/main-page/2-events-slide/luasmdh5bpyqn5bucnvq',
    description: 'Портрет на  память',
  },
].map(
  ({ imageSrc, imageSrc_1000, imageSrc_500, description, cloudinaryId }) => ({
    imageSrc: normalizeDropBoxLink(imageSrc),
    imageSrc_1000: normalizeDropBoxLink(imageSrc_1000),
    imageSrc_500: normalizeDropBoxLink(imageSrc_500),
    cloudinaryId,
    description,
  })
);

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
