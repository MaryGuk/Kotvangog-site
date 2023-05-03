import React from "react";
import { Dialog } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

import BeautyArt from "./Beauty-art/beauty-art";

import ProductPageItem from "./PortraitPage/portrait-page";
import Footer from "../../components/Pages/Footer/footer";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import ArtStylesSize from "./PortraitSizes/ArtStylesSize";

const ProductsPage = () => {
  const [fullImageSrc, setFullImageSrc] = useState(null);
  const { t } = useTranslation();

  return (
    <div className="products-page__wrapper">
      {[
        {
          portraitTitle: t("productsPage.title_beauty"),
          portraitPrice: i18n.language === "en" ? "From 20$" : "От 1590 руб.",
          portraitDescription: t("productsPage.portraitDescription.part1"),
          srcAfter:
            "https://www.dropbox.com/s/1e8dhooirot7u2n/%D0%B1%D1%8C%D1%8E%D1%82%D0%B8-%D0%B0%D1%80%D1%82.jpg?raw=1",
          srcBefore:
            "https://www.dropbox.com/s/snhdeiwisgi3o7f/%D0%B4%D0%BE%20%D0%B1%D1%8C%D1%8E%D1%82%D0%B8-%D0%B0%D1%80%D1%82.jpg?raw=1",
          galleryImages: [
            {
              previewSrc:
                "https://www.dropbox.com/s/fy2i1bwsfzo627k/1%20ba.jpg?raw=1",
              fullSrc:
                "https://www.dropbox.com/s/wa73gaqrxygfvky/1%20ba.jpg?raw=1",
            },
            {
              previewSrc:
                "https://www.dropbox.com/s/qb3otskgaux2w4m/2%20ba.jpg?raw=1",
              fullSrc:
                "https://www.dropbox.com/s/sxquz0ubp9f15ge/2%20ba.jpg?raw=1",
            },
            {
              previewSrc:
                "https://www.dropbox.com/s/g4dzxs8593ikffk/3%20ba.jpg?raw=1",
              fullSrc:
                "https://www.dropbox.com/s/eevclioq349ieu2/3%20ba.jpg?raw=1",
            },
            {
              previewSrc:
                "https://www.dropbox.com/s/lyeysfane94es9d/4%20ba.jpg?raw=1",
              fullSrc:
                "https://www.dropbox.com/s/8ba6zihttcjogah/4%20ba.jpg?raw=1",
            },
            {
              previewSrc:
                "https://www.dropbox.com/s/4ebhagxfqqwlnt8/5%20ba.jpg?raw=1",
              fullSrc:
                "https://www.dropbox.com/s/45s1o4yq23wlcwy/5%20ba.jpg?raw=1",
            },
            {
              previewSrc:
                "https://www.dropbox.com/s/709e0p1l4h6700s/6%20ba.jpg?raw=1",
              fullSrc:
                "https://www.dropbox.com/s/twbrhy62bet5g84/6%20ba.jpg?raw=1",
            },
          ],
          imageId: "beauty-art",
        },
        {
          portraitTitle: t("productsPage.title_digital"),
          portraitPrice: i18n.language === "en" ? "From 20$" : "От 2800 руб.",
          portraitDescription: t("productsPage.portraitDescription.part2"),
          srcAfter:
            "https://www.dropbox.com/s/hu0obrvq9uhrxgv/%D0%B4%D0%B8%D0%B4%D0%B6%D0%B8%D1%82%D0%B0%D0%BB.jpg?raw=1",
          srcBefore:
            "https://www.dropbox.com/s/zae6536in1rxoso/%D0%B4%D0%BE%20%D0%B4%D0%B8%D0%B4%D0%B6%D0%B8%D1%82%D0%B0%D0%BB.jpg?raw=1",
          galleryImages: [
            {
              previewSrc:
                "https://www.dropbox.com/s/4asi26pi2f9i75s/1d.jpg?raw=1",
              fullSrc: "https://www.dropbox.com/s/autv48b21fuukli/1d.jpg?raw=1",
            },
            {
              previewSrc:
                "https://www.dropbox.com/s/roxi4j721ocylg8/2d.jpg?raw=1",
              fullSrc: "https://www.dropbox.com/s/46vyngjezvay4ke/2d.jpg?raw=1",
            },
            {
              previewSrc:
                "https://www.dropbox.com/s/k3y3q98ku07q6uv/3d.jpg?raw=1",
              fullSrc: "https://www.dropbox.com/s/xmu8t69415sgcse/3d.jpg?raw=1",
            },
            {
              previewSrc:
                "https://www.dropbox.com/s/68314819vl5tnib/4d.jpg?raw=1",
              fullSrc: "https://www.dropbox.com/s/fosuvhz9b8l3tk5/4d.jpg?raw=1",
            },
          ],
          reverse: true,
          imageId: "digital",
        },
        {
          portraitTitle: t("productsPage.title_oli"),
          portraitPrice: i18n.language === "en" ? "From 20$" : "От 950 руб.",
          portraitDescription: t("productsPage.portraitDescription.part3"),
          srcAfter:
            "https://www.dropbox.com/s/4hgiygld9zytc3z/%D0%BF%D0%B5%D1%80%D0%B2%D0%BE%D0%B5%20%D1%84%D0%BE%D1%82%D0%BE.jpg?raw=1",
          srcBefore:
            "https://www.dropbox.com/s/1eu6uvt56ipspy5/%D0%B8%D0%BC%D0%B8%D1%82%D0%B0%D1%86%D0%B8%D1%8F%20%D0%BC%D0%B0%D1%81%D0%BB%D0%B0--%D0%B4%D0%BE.jpg?raw=1",
          galleryImages: [
            {
              previewSrc:
                "https://www.dropbox.com/s/sjzn8yms2h36qrx/1im.jpg?raw=1",
              fullSrc:
                "https://www.dropbox.com/s/e7egjk1z4oijv4j/1im.jpg?raw=1",
            },
            {
              previewSrc:
                "https://www.dropbox.com/s/md921isin5z6ou4/2im.jpg?raw=1",
              fullSrc:
                "https://www.dropbox.com/s/4brtfw26cg1s8jj/2im.jpg?raw=1",
            },
            {
              previewSrc:
                "https://www.dropbox.com/s/vq61c1i648pvp16/3im.jpg?raw=1",
              fullSrc:
                "https://www.dropbox.com/s/3ygbzzxbbkg3uio/3im.jpg?raw=1",
            },
            {
              previewSrc:
                "https://www.dropbox.com/s/iw9uv3e0dfajdb0/4im.jpg?raw=1",
              fullSrc:
                "https://www.dropbox.com/s/azdomccdvb1zffg/4im.jpg?raw=1",
            },
            {
              previewSrc:
                "https://www.dropbox.com/s/dmqt7xtl9xcj39p/14im.jpg?raw=1",
              fullSrc:
                "https://www.dropbox.com/s/9ldb07rhlsn4pv7/14im.jpg?raw=1",
            },
            {
              previewSrc:
                "https://www.dropbox.com/s/gur64wet8t455xw/6im.jpg?raw=1",
              fullSrc:
                "https://www.dropbox.com/s/nhvm5k84xl961ir/6im.jpg?raw=1",
            },
            {
              previewSrc:
                "https://www.dropbox.com/s/cbhqrchx5rgv912/7im.jpg?raw=1",
              fullSrc:
                "https://www.dropbox.com/s/uz3g2hlpoburd6a/7im.jpg?raw=1",
            },
            {
              previewSrc:
                "https://www.dropbox.com/s/hg4f2zgwmgqto31/8im.jpg?raw=1",
              fullSrc:
                "https://www.dropbox.com/s/px80jn98w498f96/8im.jpg?raw=1",
            },
            {
              previewSrc:
                "https://www.dropbox.com/s/nbk1u6be228k20n/9im.jpg?raw=1",
              fullSrc:
                "https://www.dropbox.com/s/jevib06oe9ya8nb/9im.jpg?raw=1",
            },
            {
              previewSrc:
                "https://www.dropbox.com/s/xjrsm91dubbpi2d/10im.jpg?raw=1",
              fullSrc:
                "https://www.dropbox.com/s/vj1mgyujf0volzs/10im.jpg?raw=1",
            },
            {
              previewSrc:
                "https://www.dropbox.com/s/u38xg0dk4hz8lc5/11im.jpg?raw=1",
              fullSrc:
                "https://www.dropbox.com/s/zo1otl8djylojo4/11im.jpg?raw=1",
            },
            {
              previewSrc:
                "https://www.dropbox.com/s/jsboeevd7ie6pvz/12im.jpg?raw=1",
              fullSrc:
                "https://www.dropbox.com/s/byjhw0axjdq8xq9/12im.jpg?raw=1",
            },
            {
              previewSrc:
                "https://www.dropbox.com/s/sq5bfv0a1dochic/13im.jpg?raw=1",
              fullSrc:
                "https://www.dropbox.com/s/rhmd8vlgbegu2wb/13im.jpg?raw=1",
            },
            {
              previewSrc:
                "https://www.dropbox.com/s/zlldkqeydifjcqz/5im.jpg?raw=1",
              fullSrc:
                "https://www.dropbox.com/s/xna5is0w6mducct/5im.jpg?raw=1",
            },
          ],

          imageId: "oli-art",
        },
        {
          portraitTitle: t("productsPage.title_image"),
          portraitPrice: i18n.language === "en" ? "From 20$" : "От 1090 руб.",
          portraitDescription: t("productsPage.portraitDescription.part4"),
          srcAfter:
            "https://www.dropbox.com/s/676076wuy1b87jh/%D0%BF%D0%B5%D1%80%D0%B2%D0%B0%D1%8F%20%D0%BF%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82%20%D0%B2%20%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%B5.jpg?raw=1",
          srcBefore:
            "https://www.dropbox.com/s/676076wuy1b87jh/%D0%BF%D0%B5%D1%80%D0%B2%D0%B0%D1%8F%20%D0%BF%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82%20%D0%B2%20%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%B5.jpg?raw=1",
          galleryImages: [
            {
              previewSrc:
                "https://www.dropbox.com/s/1rjj624q41czarc/2o.jpg?raw=1",
              fullSrc: "https://www.dropbox.com/s/vhvi4pe11jemgip/2o.jpg?raw=1",
            },
            {
              previewSrc:
                "https://www.dropbox.com/s/jb6xzhh9guyeqg0/3o.jpg?raw=1",
              fullSrc: "https://www.dropbox.com/s/16ojbl3v0igfpks/3o.jpg?raw=1",
            },
            {
              previewSrc:
                "https://www.dropbox.com/s/3x1rfk4v035hcye/4o.jpg?raw=1",
              fullSrc: "https://www.dropbox.com/s/vps5nyb7ks8b2uv/4o.jpg?raw=1",
            },
            {
              previewSrc:
                "https://www.dropbox.com/s/1gi68kanxn3o0xz/6o.jpg?raw=1",
              fullSrc: "https://www.dropbox.com/s/wh1snofbv47mx2u/6o.jpg?raw=1",
            },
            {
              previewSrc:
                "https://www.dropbox.com/s/u28e449fde99pgg/7o.jpg?raw=1",
              fullSrc: "https://www.dropbox.com/s/9f2m60ffpho7yhs/7o.jpg?raw=1",
            },
            {
              previewSrc:
                "https://www.dropbox.com/s/ubqpjvtohr8e73y/11o.jpg?raw=1",
              fullSrc:
                "https://www.dropbox.com/s/0rgl7e5wmh1gcc5/11o.jpg?raw=1",
            },
            {
              previewSrc:
                "https://www.dropbox.com/s/bfi274erbk8lcmh/5o-2.jpg?raw=1",
              fullSrc:
                "https://www.dropbox.com/s/myl01nhsamxqpac/5o-2.jpg?raw=1",
            },
            {
              previewSrc:
                "https://www.dropbox.com/s/tpgqyk3pcozh9rf/1o.jpg?raw=1",
              fullSrc: "https://www.dropbox.com/s/0t489rlmr93tzrt/1o.jpg?raw=1",
            },
          ],
          reverse: true,
          imageId: "likeness-art",
        },
        {
          portraitTitle: t("productsPage.title_fusion"),
          portraitPrice: i18n.language === "en" ? "From 20$" : "От 1890 руб.",
          portraitDescription: t("productsPage.portraitDescription.part5"),
          srcAfter:
            "https://www.dropbox.com/s/7vutdm2i5avc4kn/%D1%84%D1%8C%D1%8E%D0%B6%D0%BD.jpg?raw=1",
          srcBefore:
            "https://www.dropbox.com/s/wz4tkqulm16x0m2/%D0%B4%D0%BE-%D0%BF%D0%B5%D1%80%D0%B2%D0%BE%D0%B5.jpg?raw=1",
          galleryImages: [
            {
              previewSrc:
                "https://www.dropbox.com/s/yz6s5dpv8o5znxv/f1.jpg?raw=1",
              fullSrc: "https://www.dropbox.com/s/rruecqdil0480wp/f1.jpg?raw=1",
            },
            {
              previewSrc:
                "https://www.dropbox.com/s/zm4i3ih3kpbi2dr/f2.jpg?raw=1",
              fullSrc: "https://www.dropbox.com/s/xt1t90u0x9ozhhl/f2.jpg?raw=1",
            },
            {
              previewSrc:
                "https://www.dropbox.com/s/e5kx6abynnylkw9/f3.jpg?raw=1",
              fullSrc: "https://www.dropbox.com/s/m79y4nmoyev5h1a/f3.jpg?raw=1",
            },
            {
              previewSrc:
                "https://www.dropbox.com/s/ldxs983pxi0n7x2/f4.jpg?raw=1",
              fullSrc: "https://www.dropbox.com/s/3polsu9g4dio8sk/f4.jpg?raw=1",
            },
            {
              previewSrc:
                "https://www.dropbox.com/s/ib7ghk0omfdinl6/f5.jpg?raw=1",
              fullSrc: "https://www.dropbox.com/s/yq16ugdt8xzdp32/f5.jpg?raw=1",
            },
            {
              previewSrc:
                "https://www.dropbox.com/s/4t3c9am1q553msi/f6.jpg?raw=1",
              fullSrc: "https://www.dropbox.com/s/3uktao3peylqarg/f6.jpg?raw=1",
            },
          ],
          imageId: "fusion-art",
        },
        {
          portraitTitle: t("productsPage.title_pencil"),
          portraitPrice: i18n.language === "en" ? "From 20$" : "От 1790 руб.",
          portraitDescription: t("productsPage.portraitDescription.part6"),
          srcAfter:
            "https://www.dropbox.com/s/238fhoefmgwy3no/%D0%BA%D0%B0%D1%80%D0%B0%D0%BD%D0%B4%D0%B0%D1%88.jpg?raw=1",
          srcBefore:
            "https://www.dropbox.com/s/bohiqq5xtdzawe9/%D0%B4%D0%BE%20-%20%D0%BA%D0%B0%D1%80%D0%B0%D0%BD%D0%B4%D0%B0%D1%88.jpg?raw=1",
          galleryImages: [
            {
              previewSrc:
                "https://www.dropbox.com/s/sg0d3zf76mjwxwi/3%20k.jpg?raw=1",
              fullSrc:
                "https://www.dropbox.com/s/wk4oojqw27z5o1p/3%20k.jpg?raw=1",
            },
            {
              previewSrc:
                "https://www.dropbox.com/s/meaaxzfhpnfzx8l/1%20k.jpg?raw=1",
              fullSrc:
                "https://www.dropbox.com/s/o0jjjvftp7xfrg7/1%20k.jpg?raw=1",
            },
            {
              previewSrc:
                "https://www.dropbox.com/s/pcxustzd0pgg17f/2%20k.jpg?raw=1",
              fullSrc:
                "https://www.dropbox.com/s/fikgfjl834rdcv9/2%20k.jpg?raw=1",
            },
          ],
          reverse: true,
          imageId: "pencil-art",
        },
        {
          portraitTitle: t("productsPage.title_infiniti"),
          portraitPrice: i18n.language === "en" ? "From 20$" : "От 2900 руб.",
          portraitDescription: t("productsPage.portraitDescription.part7"),
          srcAfter:
            "https://www.dropbox.com/s/5zi7kl8tbqkbw3a/%D0%B8%D0%BD%D1%84%D0%B8%D0%BD%D0%B8%D1%82%D0%B8.jpg?raw=1",
          srcBefore:
            "https://www.dropbox.com/s/8h7xjadn2luo0co/%D0%B4%D0%BE--%D0%B8%D0%BD%D1%84%D0%B8%D0%BD%D0%B8%D1%82%D0%B8.jpg?raw=1",
          galleryImages: [
            {
              previewSrc:
                "https://www.dropbox.com/s/v1d47s7ld5z5dug/1%20i.jpg?raw=1",
              fullSrc:
                "https://www.dropbox.com/s/h08aa4mmil5tiqy/1%20i.jpg?raw=1",
            },
            {
              previewSrc:
                "https://www.dropbox.com/s/nzf58hfz9tesf0z/2%20i.jpg?raw=1",
              fullSrc:
                "https://www.dropbox.com/s/m6iscvy8xkl7qzf/1%20ba.jpg?raw=1",
            },
            {
              previewSrc:
                "https://www.dropbox.com/s/q5a6mnmx2a6y1xm/3%20i.jpg?raw=1",
              fullSrc:
                "https://www.dropbox.com/s/3t553txganma7c7/3%20i.jpg?raw=1",
            },
            {
              previewSrc:
                "https://www.dropbox.com/s/8u6bt1kx425qfus/4%20i.jpg?raw=1",
              fullSrc:
                "https://www.dropbox.com/s/kf55aciow4r4k6q/4%20i.jpg?raw=1",
            },
            {
              previewSrc:
                "https://www.dropbox.com/s/hr6lgw0il67xk9w/5%20i.jpg?raw=1",
              fullSrc:
                "https://www.dropbox.com/s/x7dpswpvavdqtkw/5%20i.jpg?raw=1",
            },
          ],
          imageId: "infiniti-art",
        },
        {
          portraitTitle: t("productsPage.title_mastichin"),
          portraitPrice: i18n.language === "en" ? "From 20$" : "От 2900 руб.",
          portraitDescription: t("productsPage.portraitDescription.part8"),
          srcAfter:
            "https://www.dropbox.com/s/71gj7mjdtgqx91g/%D0%BC%D0%B0%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%BD.jpg?raw=1",
          srcBefore:
            "https://www.dropbox.com/s/pkhbrznknmw88hw/%D0%B4%D0%BE--%D0%BC%D0%B0%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%BD.jpg?raw=1",
          galleryImages: [
            {
              previewSrc:
                "https://www.dropbox.com/s/thywh36q2wkc4vr/01.jpg?raw=1",
              fullSrc: "https://www.dropbox.com/s/8s8t7zh75cjm2sc/01.jpg?raw=1",
            },
            {
              previewSrc:
                "https://www.dropbox.com/s/7dx7op24lulneqh/02.jpg?raw=1",
              fullSrc: "https://www.dropbox.com/s/xhrwk1gj5tkywyv/02.jpg?raw=1",
            },
            {
              previewSrc:
                "https://www.dropbox.com/s/mahxbtx77b0z4d0/03.jpg?raw=1",
              fullSrc: "https://www.dropbox.com/s/29qi44pib0uq8i1/03.jpg?raw=1",
            },
            {
              previewSrc:
                "https://www.dropbox.com/s/1ow52s2dlqs0qir/04.jpg?raw=1",
              fullSrc: "https://www.dropbox.com/s/gfwb6nc2gp6f6nc/04.jpg?raw=1",
            },
            {
              previewSrc:
                "https://www.dropbox.com/s/p855sdjht1ahd5u/05.jpg?raw=1",
              fullSrc: "https://www.dropbox.com/s/49nk3a1jsb0blqv/05.jpg?raw=1",
            },
          ],
          reverse: true,
          imageId: "mastihin-art",
        },
        {
          portraitTitle: t("productsPage.title_pet"),
          portraitPrice: i18n.language === "en" ? "From 20$" : "От 1490 руб.",
          portraitDescription: t("productsPage.portraitDescription.part9"),
          srcAfter:
            "https://www.dropbox.com/s/bhpspsqdi381wkl/%D0%BF%D0%B8%D1%82%D0%BE%D0%BC%D0%B5%D1%86%20%D0%BF%D0%B5%D1%80%D0%B2%D0%BE%D0%B5.jpg?raw=1",
          srcBefore:
            "https://www.dropbox.com/s/bhpspsqdi381wkl/%D0%BF%D0%B8%D1%82%D0%BE%D0%BC%D0%B5%D1%86%20%D0%BF%D0%B5%D1%80%D0%B2%D0%BE%D0%B5.jpg?raw=1",
          galleryImages: [
            {
              previewSrc:
                "https://www.dropbox.com/s/awi9ok80zk1rrlq/1%20p.jpg?raw=1",
              fullSrc:
                "https://www.dropbox.com/s/vakqodtc2ljmm4l/1%20p.jpg?raw=1",
            },
            {
              previewSrc:
                "https://www.dropbox.com/s/jrgxcjwxz4h83t6/2%20p.jpg?raw=1",
              fullSrc:
                "https://www.dropbox.com/s/z885bxzdf7wyic6/2%20p.jpg?raw=1",
            },
            {
              previewSrc:
                "https://www.dropbox.com/s/4rn9k55smwp08bk/3%20p.jpg?raw=1",
              fullSrc:
                "https://www.dropbox.com/s/ckklzid1n4f5566/3%20p.jpg?raw=1",
            },
            {
              previewSrc:
                "https://www.dropbox.com/s/714ynlzuhbznwmd/4%20p.jpg?raw=1",
              fullSrc:
                "https://www.dropbox.com/s/pqckbk4qbu8uiws/4%20p.jpg?raw=1",
            },
            {
              previewSrc:
                "https://www.dropbox.com/s/st896unugrvz8cq/6%20p.jpg?raw=1",
              fullSrc:
                "https://www.dropbox.com/s/9tisrmqtcdgwl8j/6%20p.jpg?raw=1",
            },
            {
              previewSrc:
                "https://www.dropbox.com/s/amj2kchltwd30xq/5%20p.jpg?raw=1",
              fullSrc:
                "https://www.dropbox.com/s/p3xq5ztf5i5i2iq/5%20p.jpg?raw=1",
            },
          ],
          imageId: "animal-art",
        },
      ].map((props, idx) => (
        <ProductPageItem {...props} setFullImage={setFullImageSrc} key={idx} />
      ))}
      {/* <BeautyArt /> */}
      <ArtStylesSize />
      <Footer />
      <Dialog open={!!fullImageSrc} onClose={() => setFullImageSrc(null)}>
        <Box height="500px" overflow="hidden">
          <img height="100%" src={fullImageSrc} alt="" />
        </Box>
      </Dialog>
    </div>
  );
};

export default ProductsPage;
