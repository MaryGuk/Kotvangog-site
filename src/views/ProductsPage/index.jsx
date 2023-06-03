import { Dialog } from "@mui/material";
import { useState } from "react";
import ProductPageItem from "./PortraitPage/portrait-page";
import Footer from "../../components/Pages/Footer/footer";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import ArtStylesSize from "./PortraitSizes/ArtStylesSize";
import ImageWithLoader from "../../components/ImageWithLoader";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  StyledIconButton,
  StyledIconButtonWrapper,
  GalleryPhotoBox,
} from "./styled";
import { useMemo } from "react";
import FooterMobile from "../../components/Pages/FooterMobile";
import { isMobile } from "react-device-detect";
import ContactsSticky from "../../components/Pages/ContactsSticky";

const ProductsPage = () => {
  const { t } = useTranslation();
  const pageData = [
    {
      portraitTitle: t("productsPage.title_beauty"),
      portraitPrice: i18n.language === "en" ? "From 20$" : "От 1590 руб.",
      portraitDescription: t("productsPage.portraitDescription.part1"),
      srcAfter:
        "https://www.dropbox.com/s/jzhvg5zawirl98j/%D0%B1%D1%8C%D1%8E%D1%82%D0%B8-%D0%B0%D1%80%D1%82.jpg?raw=1",
      srcBefore:
        "https://www.dropbox.com/s/1mrlrth8sap9rzi/%D0%B4%D0%BE%20%D0%B1%D1%8C%D1%8E%D1%82%D0%B8-%D0%B0%D1%80%D1%82.jpg?raw=1",
      galleryImages: [
        {
          previewSrc:
            "https://www.dropbox.com/s/vc80kvteumgzx4z/11%20ba.jpg?raw=1",
          fullSrc: "https://www.dropbox.com/s/ofkqxekkzrmvyqu/1%20ba.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/s/zn1re1hdgxouqnw/2%20ba.jpg?raw=1",
          fullSrc:
            "https://www.dropbox.com/s/75tt4p8uaqvx07e/2%20ba%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/s/791s1kuq9pz5gkp/3%20ba.jpg?raw=1",
          fullSrc:
            "https://www.dropbox.com/s/o794wha97seb778/3%20ba%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/s/vbibavxa4l92wg7/44%20ba.jpg?raw=1",
          fullSrc:
            "https://www.dropbox.com/s/gmdw93f2wzwnz9x/4%20ba%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/s/v8sm9jtwu1dh47r/5%20ba.jpg?raw=1",
          fullSrc:
            "https://www.dropbox.com/s/hko3gtyeoz4er36/5%20ba%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/s/u1507tv6ug0obl8/6%20ba.jpg?raw=1",
          fullSrc:
            "https://www.dropbox.com/s/d1ygygpi0w8kx9i/6%20ba%20full.jpg?raw=1",
        },
      ],
      imageId: "beauty-art",
    },
    {
      portraitTitle: t("productsPage.title_digital"),
      portraitPrice: i18n.language === "en" ? "From 20$" : "От 2800 руб.",
      portraitDescription: t("productsPage.portraitDescription.part2"),
      srcAfter:
        "https://www.dropbox.com/s/hjmr5r45we4wqi6/%D0%B4%D0%B8%D0%B4%D0%B6%D0%B8%D1%82%D0%B0%D0%BB%20%D0%BF%D0%BE%D1%81%D0%BB%D0%B5.jpg?raw=1",
      srcBefore:
        "https://www.dropbox.com/s/hsgw1vs94r6tlm9/%D0%B4%D0%BE%20%D0%B4%D0%B8%D0%B4%D0%B6%D0%B8%D1%82%D0%B0%D0%BB.jpg?raw=1",
      galleryImages: [
        {
          previewSrc: "https://www.dropbox.com/s/ecfq5a0wy4gj64r/1dd.jpg?raw=1",
          fullSrc:
            "https://www.dropbox.com/s/4kounumsmybbh70/1d%20full.jpg?raw=1",
        },
        {
          previewSrc: "https://www.dropbox.com/s/h6b4ris6tjxzk1h/2dd.jpg?raw=1",
          fullSrc:
            "https://www.dropbox.com/s/hp4eo64pfzcwy3g/2d%20full.jpg?raw=1",
        },
        {
          previewSrc: "https://www.dropbox.com/s/yv8bkiz2opoax74/3dd.jpg?raw=1",
          fullSrc:
            "https://www.dropbox.com/s/17vcoize8fr8rok/3d%20full.jpg?raw=1",
        },
        {
          previewSrc: "https://www.dropbox.com/s/s0tfl62topvu8qd/4dd.jpg?raw=1",
          fullSrc:
            "https://www.dropbox.com/s/gtie0qoggs9lowo/4d%20full.jpg?raw=1",
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
        "https://www.dropbox.com/s/qxfhx7o5ub08a5f/%D0%B8%D0%BC%D0%B8%D1%82%D0%B0%D1%86%D0%B8%D1%8F%20%D0%BF%D0%BE%D1%81%D0%BB%D0%B5.jpg?raw=1",
      srcBefore:
        "https://www.dropbox.com/s/9zyy20j9ayo3vg5/%D0%B8%D0%BC%D0%B8%D1%82%D0%B0%D1%86%D0%B8%D1%8F%20%D0%B4%D0%BE.jpg?raw=1",
      galleryImages: [
        {
          previewSrc: "https://www.dropbox.com/s/cii2jeanklnuum0/1im.jpg?raw=1",
          fullSrc:
            "https://www.dropbox.com/s/kn5i8q2fyx3ava2/1im%20full.jpg?raw=1",
        },
        {
          previewSrc: "https://www.dropbox.com/s/8llf1ssgbevturg/2im.jpg?raw=1",
          fullSrc:
            "https://www.dropbox.com/s/cz87yt6ctyqq3q9/2im%20full.jpg?raw=1",
        },
        {
          previewSrc: "https://www.dropbox.com/s/7si1pidvrw0mgdy/3im.jpg?raw=1",
          fullSrc:
            "https://www.dropbox.com/s/3fd0fjfhm94vx8j/3im%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/s/qy3kqlr96i3jzmw/4%20new.jpg?raw=1",
          fullSrc:
            "https://www.dropbox.com/s/925gjevbxei0fs7/4%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/s/9p0kp4liymma92k/5%20new.jpg?raw=1",
          fullSrc:
            "https://www.dropbox.com/s/wwhcigzg11d1ehk/5%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/s/k8ty94jb3ps07bv/6new.jpg?raw=1",
          fullSrc:
            "https://www.dropbox.com/s/7wh96gqw1r7aqy5/6%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/s/rigvnchpse608bg/7%20new.jpg?raw=1",
          fullSrc:
            "https://www.dropbox.com/s/tmaw3tfzf4215cq/7%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/s/b65werwb8tkx30i/8%20new.jpg?raw=1",
          fullSrc:
            "https://www.dropbox.com/s/kt8btfia4ebojbd/8%20full.jpg?raw=1",
        },
        {
          previewSrc: "https://www.dropbox.com/s/hrlqvm22k1w3s7l/4im.jpg?raw=1",
          fullSrc:
            "https://www.dropbox.com/s/ep2gbqhgendm8pv/4im%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/s/9d6b1jtkjquyco2/14im.jpg?raw=1",
          fullSrc:
            "https://www.dropbox.com/s/2zbbhim41gc2uc1/14im%20full.jpg?raw=1",
        },
        {
          previewSrc: "https://www.dropbox.com/s/co71t4fwgg44cyb/6im.jpg?raw=1",
          fullSrc:
            "https://www.dropbox.com/s/bgbwe3m4dsyser5/6im%20full%20.jpg?raw=1",
        },
        {
          previewSrc: "https://www.dropbox.com/s/o5i5paaynt3kva9/7im.jpg?raw=1",
          fullSrc:
            "https://www.dropbox.com/s/476ssc6p1kkjk6m/7im%20full.jpg?raw=1",
        },
        {
          previewSrc: "https://www.dropbox.com/s/rpnpuvorcrx6px8/8im.jpg?raw=1",
          fullSrc:
            "https://www.dropbox.com/s/sg3f4kxenph3ob7/8im%20full.jpg?raw=1",
        },
        {
          previewSrc: "https://www.dropbox.com/s/behb03wvp1bs7vp/9im.jpg?raw=1",
          fullSrc:
            "https://www.dropbox.com/s/3ubs1p653qcryig/9im%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/s/f51um0akcut5ts7/10im.jpg?raw=1",
          fullSrc:
            "https://www.dropbox.com/s/n8k154xpfnse4q7/10im%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/s/750lnceorramet9/11im.jpg?raw=1",
          fullSrc:
            "https://www.dropbox.com/s/7nptdazwbmm8vn6/11im%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/s/vc5k14mq7xtdf4f/12im.jpg?raw=1",
          fullSrc:
            "https://www.dropbox.com/s/doaar5xwwfusrhc/12im%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/s/lz407zzccyv0nqz/13im.jpg?raw=1",
          fullSrc:
            "https://www.dropbox.com/s/hy7q3sw71fy3f3a/13im%20full.jpg?raw=1",
        },
        {
          previewSrc: "https://www.dropbox.com/s/a56v65g8zwai3vb/5im.jpg?raw=1",
          fullSrc:
            "https://www.dropbox.com/s/3u9h8udmpuqo29g/5im%20full.jpg?raw=1",
        },
      ],

      imageId: "oli-art",
    },
    {
      portraitTitle: t("productsPage.title_image"),
      portraitPrice: i18n.language === "en" ? "From 20$" : "От 1090 руб.",
      portraitDescription: t("productsPage.portraitDescription.part4"),
      srcAfter:
        "https://www.dropbox.com/s/q493spz0qmsvtql/%D0%91%D0%B5%D0%B7%20%D0%B8%D0%BC%D0%B5%D0%BD%D0%B8-1.jpg?raw=1",
      galleryImages: [
        {
          previewSrc:
            "https://www.dropbox.com/s/rzpz80ttclcz5fd/1%20new.jpg?raw=1",
          fullSrc:
            "https://www.dropbox.com/s/t9y2qxo66mxg5bg/1%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/s/hp81s4h1dmgifws/1oooo.jpg?raw=1",
          fullSrc:
            "https://www.dropbox.com/s/s9fs6nmr3j6i6qa/1o%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/s/6fh7hgaeeiyylx2/3%20new.jpg?raw=1",
          fullSrc:
            "https://www.dropbox.com/s/25swnptbb0sji7q/3%20full.jpg?raw=1",
        },

        {
          previewSrc: "https://www.dropbox.com/s/zj0jvg2518r5in0/3o.jpg?raw=1",
          fullSrc:
            "https://www.dropbox.com/s/lpd95v2uln6vrjr/3o%20full.jpg?raw=1",
        },
        {
          previewSrc: "https://www.dropbox.com/s/dymh3qat4pczcro/4o.jpg?raw=1",
          fullSrc:
            "https://www.dropbox.com/s/eqpqbxmokqa80vl/4o%20full.jpg?raw=1",
        },
        {
          previewSrc: "https://www.dropbox.com/s/vjxcnc4dc23sp52/6o.jpg?raw=1",
          fullSrc:
            "https://www.dropbox.com/s/m90vaavlgvpl0y9/6o%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/s/dhgs6yub23uhpbj/7%20new.jpg?raw=1",
          fullSrc:
            "https://www.dropbox.com/s/24e3bclac1cyv9o/7%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/s/xf1asbmx48f4hig/8%20new.jpg?raw=1",
          fullSrc:
            "https://www.dropbox.com/s/2uy1zzvv422vs7y/8%20full.jpg?raw=1",
        },
        {
          previewSrc: "https://www.dropbox.com/s/tn65n8buma8e25r/7o.jpg?raw=1",
          fullSrc:
            "https://www.dropbox.com/s/ywf45ivbfai0gnr/7o%20full.jpg?raw=1",
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
        "https://www.dropbox.com/s/hbg1ebx3r9r7io0/%D1%84%D1%8C%D1%8E%D0%B6%D0%BD%20%D0%BF%D0%BE%D1%81%D0%BB%D0%B5.jpg?raw=1",
      srcBefore:
        "https://www.dropbox.com/s/3fc9k8gdq4b7p8p/%D0%B4%D0%BE-%D0%BF%D0%B5%D1%80%D0%B2%D0%BE%D0%B5.jpg?raw=1",
      galleryImages: [
        {
          previewSrc: "https://www.dropbox.com/s/s04dd1qjys78yof/f1.jpg?raw=1",
          fullSrc:
            "https://www.dropbox.com/s/ogmn03m77gmly9e/f1%20full.jpg?raw=1",
        },
        {
          previewSrc: "https://www.dropbox.com/s/r3g237fkp8ljihq/f2.jpg?raw=1",
          fullSrc:
            "https://www.dropbox.com/s/jijtfa0nwc1hk12/f2%20full.jpg?raw=1",
        },
        {
          previewSrc: "https://www.dropbox.com/s/n6ccgaemz939omo/f3.jpg?raw=1",
          fullSrc:
            "https://www.dropbox.com/s/9hy8pwvclxth8ro/f3%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/s/xn7nrju33dh0kgr/4%20new.jpg?raw=1",
          fullSrc:
            "https://www.dropbox.com/s/4iytwh90qozsjq2/4%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/s/dq94r7yrtwd3pjv/5%20new.jpg?raw=1",
          fullSrc:
            "https://www.dropbox.com/s/lbxtrg3nngty81x/5%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/s/jfq4g3ddcdt1h3d/6%20new.jpg?raw=1",
          fullSrc:
            "https://www.dropbox.com/s/v7y8jjd0l1z2t8r/6%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/s/fallezwtpgsxepv/7%20new.jpg?raw=1",
          fullSrc:
            "https://www.dropbox.com/s/gkw1cx455hjrd33/7%20full.jpg?raw=1",
        },
        {
          previewSrc: "https://www.dropbox.com/s/3ujnqgtr1lzzwcu/f4.jpg?raw=1",
          fullSrc:
            "https://www.dropbox.com/s/gefodwz51t4ziaf/f4%20full.jpg?raw=1",
        },
        {
          previewSrc: "https://www.dropbox.com/s/kmij9ewn0785nxl/f5.jpg?raw=1",
          fullSrc:
            "https://www.dropbox.com/s/5pvzmy8rbh63f1v/f5%20full.jpg?raw=1",
        },
        {
          previewSrc: "https://www.dropbox.com/s/wp5ip2yndg1z3f0/f6.jpg?raw=1",
          fullSrc:
            "https://www.dropbox.com/s/307f83vuzj5y8zs/f6%20full.jpg?raw=1",
        },
      ],
      imageId: "fusion-art",
    },
    {
      portraitTitle: t("productsPage.title_pencil"),
      portraitPrice: i18n.language === "en" ? "From 20$" : "От 1790 руб.",
      portraitDescription: t("productsPage.portraitDescription.part6"),
      srcAfter:
        "https://www.dropbox.com/s/7bquxqgg7vkt7e5/%D0%BA%D0%B0%D1%80%D0%B0%D0%BD%D0%B4%D0%B0%D1%88%20%D0%BF%D0%BE%D1%81%D0%BB%D0%B5.jpg?raw=1",
      srcBefore:
        "https://www.dropbox.com/s/dpkj6tjztkepcz3/%D0%BA%D0%B0%D1%80%D0%B0%D0%BD%D0%B4%D0%B0%D1%88%20%D0%B4%D0%BE.jpg?raw=1",
      galleryImages: [
        {
          previewSrc:
            "https://www.dropbox.com/s/5tefdbc17dxusf3/1%20new.jpg?raw=1",
          fullSrc:
            "https://www.dropbox.com/s/k3jr18ae5w2lchq/1%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/s/w1aftvjhm5l1124/3%20k.jpg?raw=1",
          fullSrc:
            "https://www.dropbox.com/s/aeg3webrmvgdaa0/3%20k%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/s/sgpc9thenuy3wya/2%20k.jpg?raw=1",
          fullSrc:
            "https://www.dropbox.com/s/onwwvynxu6azayo/2%20k%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/s/hxnos1tlnp905mu/1%20k.jpg?raw=1",
          fullSrc:
            "https://www.dropbox.com/s/c38ehh21z9dnoai/1%20k%20full.jpg?raw=1",
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
        "https://www.dropbox.com/s/e3g3owra567pc8o/%D0%B8%D0%BD%D1%84%D0%B8%D0%BD%D0%B8%D1%82%D0%B8.jpg?raw=1",
      srcBefore:
        "https://www.dropbox.com/s/byynotuoouqb05i/%D0%B4%D0%BE%20-%20%D0%B8%D0%BD%D1%84%D0%B8%D0%BD%D0%B8%D1%82%D0%B8.jpg?raw=1",
      galleryImages: [
        {
          previewSrc:
            "https://www.dropbox.com/s/tmmewgmytgbkdo2/1%20i.jpg?raw=1",
          fullSrc:
            "https://www.dropbox.com/s/5mwy9x2txnzbsla/1%20i%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/s/5yg3ftfhf5hvlrc/2%20new.jpg?raw=1",
          fullSrc:
            "https://www.dropbox.com/s/qxoiwvdpvwdqwm0/2%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/s/ul23e2nqjpciyd5/2%20i.jpg?raw=1",
          fullSrc:
            "https://www.dropbox.com/s/qdef3j2vv09a3dm/2%20i%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/s/xbqwuppujhocycu/3%20i.jpg?raw=1",
          fullSrc:
            "https://www.dropbox.com/s/jhoz3ynona85f9p/3%20i%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/s/e3c1xoao7mb5uvf/4%20i.jpg?raw=1",
          fullSrc:
            "https://www.dropbox.com/s/s70ehfdun5arqw5/4%20i%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/s/ue8dx5tqqpmp9vg/5%20i.jpg?raw=1",
          fullSrc:
            "https://www.dropbox.com/s/z0zzk9nc2m2ejqp/5%20i%20full.jpg?raw=1",
        },
      ],
      imageId: "infiniti-art",
    },
    {
      portraitTitle: t("productsPage.title_mastichin"),
      portraitPrice: i18n.language === "en" ? "From 20$" : "От 2900 руб.",
      portraitDescription: t("productsPage.portraitDescription.part8"),
      srcAfter:
        "https://www.dropbox.com/s/dnzj5feekxmmaf7/%D0%BC%D0%B0%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%BD.jpg?raw=1",
      srcBefore:
        "https://www.dropbox.com/s/6z6b5dx5t602ryd/%D0%B4%D0%BE%20-%20%D0%BC%D0%B0%D1%81%D1%82%D0%B8%D1%85%D0%B8%D0%BD.jpg?raw=1",
      galleryImages: [
        {
          previewSrc: "https://www.dropbox.com/s/v16uxasjtcd0uvw/01.jpg?raw=1",
          fullSrc:
            "https://www.dropbox.com/s/e6rdxhcwbs2me3m/01%20full.jpg?raw=1",
        },
        {
          previewSrc: "https://www.dropbox.com/s/wnbz4lqwn6vgi8p/02.jpg?raw=1",
          fullSrc:
            "https://www.dropbox.com/s/83jipv4jpj1mtnw/02%20full.jpg?raw=1",
        },
        {
          previewSrc: "https://www.dropbox.com/s/et6m1dj4gei5r57/03.jpg?raw=1",
          fullSrc:
            "https://www.dropbox.com/s/fzi9by4co2qjfwt/03%20full.jpg?raw=1",
        },
        {
          previewSrc: "https://www.dropbox.com/s/vj9bc1zggke6e8s/04.jpg?raw=1",
          fullSrc:
            "https://www.dropbox.com/s/ccg1n6kobqwsgz5/04%20full.jpg?raw=1",
        },
        {
          previewSrc: "https://www.dropbox.com/s/fnsum72zdv7y2tu/05.jpg?raw=1",
          fullSrc:
            "https://www.dropbox.com/s/6yiajqugwxoumhn/05%20full.jpg?raw=1",
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
        "https://www.dropbox.com/s/yrok0tjnq0n3x2i/%D0%BF%D0%B8%D1%82%D0%BE%D0%BC%D0%B5%D1%86%20%D0%BF%D0%B5%D1%80%D0%B2%D0%BE%D0%B5.jpg?raw=1",
      galleryImages: [
        {
          previewSrc:
            "https://www.dropbox.com/s/it9of6gmhvjqf1s/1%20p.jpg?raw=1",
          fullSrc:
            "https://www.dropbox.com/s/6t80pbu8pfgiequ/1%20p%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/s/ivi2yh3wcehaty3/2%20p.jpg?raw=1",
          fullSrc:
            "https://www.dropbox.com/s/qoyp5p6r768ajy4/2%20p%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/s/0tx13orr6d0ukji/3%20p.jpg?raw=1",
          fullSrc:
            "https://www.dropbox.com/s/8y9fisggar3z46v/3%20p%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/s/iy50xg2l5tbydsp/4%20p.jpg?raw=1",
          fullSrc:
            "https://www.dropbox.com/s/b42nccx1vhsypmf/4%20p%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/s/pp1bcwaesqu9ule/6%20p.jpg?raw=1",
          fullSrc:
            "https://www.dropbox.com/s/hrp4geqpqz9rqow/6%20p%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/s/2reh414ks0gc9rf/5%20p.jpg?raw=1",
          fullSrc:
            "https://www.dropbox.com/s/buo3or4yuu6otne/5%20p%20full.jpg?raw=1",
        },
      ],
      imageId: "animal-art",
    },
  ];

  const [fullImageSrc, setFullImageSrc] = useState(null);

  const currentGallery = useMemo(
    () => fullImageSrc && pageData[fullImageSrc.pageIdx]?.galleryImages,
    [fullImageSrc, pageData]
  );
  const isLastPhoto = useMemo(
    () =>
      currentGallery &&
      fullImageSrc &&
      currentGallery.length <= fullImageSrc.imageIdx + 1,
    [currentGallery, fullImageSrc]
  );
  const isFirstPhoto = useMemo(
    () => currentGallery && fullImageSrc && fullImageSrc.imageIdx === 0,
    [currentGallery, fullImageSrc]
  );

  const handleNextPhoto = () => {
    if (!isLastPhoto && fullImageSrc) {
      setFullImageSrc((prev) =>
        currentGallery.length > prev.imageIdx + 1
          ? { ...prev, imageIdx: prev.imageIdx + 1 }
          : prev
      );
    }
  };

  const handlePrevPhoto = () => {
    if (!isFirstPhoto && fullImageSrc) {
      setFullImageSrc((prev) =>
        prev.imageIdx > 0 ? { ...prev, imageIdx: prev.imageIdx - 1 } : prev
      );
    }
  };

  return (
    <div className="products-page__wrapper">
      {pageData.map((props, idx) => (
        <ProductPageItem
          {...props}
          setFullImageIdx={(imageIdx) =>
            setFullImageSrc({ pageIdx: idx, imageIdx })
          }
          key={idx}
        />
      ))}
      {/* <BeautyArt /> */}
      <ArtStylesSize />
      {isMobile ? <FooterMobile /> : <Footer />}

      <Dialog open={!!fullImageSrc} onClose={() => setFullImageSrc(null)}>
        {!isFirstPhoto && (
          <StyledIconButtonWrapper left="10px">
            <StyledIconButton onClick={handlePrevPhoto}>
              <ArrowBackIosIcon
                style={{
                  transform: "translateX(20%)",
                }}
              />
            </StyledIconButton>
          </StyledIconButtonWrapper>
        )}

        <GalleryPhotoBox>
          <ImageWithLoader
            height="100%"
            src={currentGallery?.[fullImageSrc?.imageIdx]?.fullSrc}
            alt=""
            key={currentGallery?.[fullImageSrc?.imageIdx]?.fullSrc}
          />
        </GalleryPhotoBox>
        {!isLastPhoto && (
          <StyledIconButtonWrapper right="10px">
            <StyledIconButton onClick={handleNextPhoto}>
              <ArrowForwardIosIcon />
            </StyledIconButton>
          </StyledIconButtonWrapper>
        )}
      </Dialog>
      {isMobile ? <ContactsSticky /> : null}
    </div>
  );
};

export default ProductsPage;
