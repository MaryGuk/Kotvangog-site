import {addRedirectLink, normalizeDropBoxLink} from "../../utils/linkUtils";
import {productPageData} from "../mainConstants";

export const mainSlideFramesGallery = [
  "https://www.dropbox.com/scl/fi/i4b4rcjckexudbasgc9xf/0007_750px.png?rlkey=3z81c1j4dun5pob4453c67kl6&dl=0",
  "https://www.dropbox.com/scl/fi/n42wefk3qlo20oyigfxw5/0008_750px.png?rlkey=l4mgaf36autdvc2406tlhl3zc&dl=0",
  "https://www.dropbox.com/scl/fi/l9o4a8097p67fvvpaz4ca/0009_750px.png?rlkey=oz8t52dvqamjfcouylbcl2tcc&dl=0",
  "https://www.dropbox.com/scl/fi/scg4024lsw6uhmi2h14kv/00010_750px.png?rlkey=b8nj0i1ii11atbizhsg6isgj2&dl=0",
  "https://www.dropbox.com/scl/fi/xh7b71oj3zv9ni2k1o3lz/00011_750px.png?rlkey=lk58et701rajag48gwb38i7ek&dl=0"
].map(normalizeDropBoxLink);

export const oilSlideFramesGallery = [
  'https://www.dropbox.com/scl/fi/mxk5lhv9ja2ul96dm4xrb/00001_1000px.jpg?rlkey=y547lm60lmzp936a2utpmw26m&dl=0',
  'https://www.dropbox.com/scl/fi/5dj46ji8211ep2891api9/00002_1000px.jpg?rlkey=j2r1pvtumv9wnbbk0ft5vsa4t&dl=0',
  'https://www.dropbox.com/scl/fi/4o7vsccrjxmbhbsd8evjt/00003_1000px.jpg?rlkey=g8pufcy7bqjv0gssekcbeem7w&dl=0',
  'https://www.dropbox.com/scl/fi/z3qsc0auuhidt5x1wgsje/00004_1000px.jpg?rlkey=4agu7q1qf05uyljh0pv41dyqk&dl=0',
  'https://www.dropbox.com/scl/fi/417kd8sad6ex4me2w0ojv/00005_1000px.jpg?rlkey=nijnnck3gy9xrm78iz8iiu8mt&dl=0',
  'https://www.dropbox.com/scl/fi/evkdavpe9v3wxjkkgh923/00006_1000px.jpg?rlkey=09b7t39khwh3lxmkn5v8qiqca&dl=0',
].map(normalizeDropBoxLink).map(addRedirectLink('/oil-portrait'));

export const presentSlideImages = [
  'https://www.dropbox.com/scl/fi/jn6w5avgebxupxma9da7d/IMG_5213_400px.jpg?rlkey=8pp2y8ggl4ginppycc2pkzjt1&dl=0',
  'https://www.dropbox.com/scl/fi/xk1v3xvtshnbqpl8uojus/IMG_5543_400px.jpg?rlkey=k5dsdx09p7r6031j83m33nqyy&dl=0',
  'https://www.dropbox.com/scl/fi/qbqaiud2iow9h4kmomtfd/IMG_5550_400px.jpg?rlkey=quiyb4na5c15tikhi18cv1b2b&dl=0',
].map(normalizeDropBoxLink);

export const canvasSlideGallery = [
  'https://www.dropbox.com/scl/fi/geqahq16woarcnka1smge/0_-_1000px.jpg?rlkey=6tq18hgpofyr4vt6376wlfb4b&dl=0',
  'https://www.dropbox.com/scl/fi/erssszpkb3z4ceobz8fet/1_-_1000px.jpg?rlkey=j7xv49cbx1yjp4c5moilbrh3q&dl=0',
  'https://www.dropbox.com/scl/fi/qrg2x7544344dziyvpecv/2_-_1000px.jpg?rlkey=clb92pqp4cvch735t5zl24mqu&dl=0',
  'https://www.dropbox.com/scl/fi/vfx0bw8y685cbw8tyi2h7/4_-23-_1000px.jpg?rlkey=ldl9wtnzh7lnsmry7ke29b2b6&dl=0',
  'https://www.dropbox.com/scl/fi/7nj870v3gwrcaov9yv2rr/5_-_1000px.jpg?rlkey=75hwe50ya12ctdsgruwfvu0sf&dl=0',
  'https://www.dropbox.com/scl/fi/77ry0ylbwa16u7ap6er8u/6_-_1000px.jpg?rlkey=ohhj8bv0ygt2hr0kj0qev11fo&dl=0',
].map(normalizeDropBoxLink).map(addRedirectLink(`/products#${Object.values(productPageData)[0].imageId}`));
