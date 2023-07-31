import { useState } from "react";
import ProductPageItem from "./PortraitPage/portrait-page";
import Footer from "../../components/Pages/Footer/footer";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import ArtStylesSize from "./PortraitSizes/ArtStylesSize";
import { useMemo } from "react";
import FooterMobile from "../../components/Pages/FooterMobile";
import { isMobile } from "react-device-detect";
import ContactsSticky from "../../components/Pages/ContactsSticky";
import PreviewPhotoDialog from "../../components/PreviewPhotoDialog";

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
            "https://www.dropbox.com/scl/fi/kx0fk985qmvhjl8ykerh3/0000.jpg?rlkey=y0xihkn6jrhx7mt1jy18rivmy&raw=1",
          fullSrc: "https://www.dropbox.com/s/ofkqxekkzrmvyqu/1%20ba.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/scl/fi/lwj45hpngbjt9kzr7wrlu/03.jpg?rlkey=9qee5ga3odqwv80blefhmwgte&raw=1",
          fullSrc:
            "https://www.dropbox.com/s/75tt4p8uaqvx07e/2%20ba%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/scl/fi/y349vw3txdgvyu6ivk1ek/3.jpg?rlkey=yhjwx6ks8bvp7f251aemdxetm&raw=1",
          fullSrc:
            "https://www.dropbox.com/s/o794wha97seb778/3%20ba%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/scl/fi/lhkpolaqbkhbhct5pjzf4/73537.jpg?rlkey=b9kscg82stu34nstow14n4zdv&raw=1",
          fullSrc:
            "https://www.dropbox.com/s/gmdw93f2wzwnz9x/4%20ba%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/scl/fi/7xlf70grhffycmk9no1gv/meika-woollard-3-1-730x913.jpg?rlkey=1h5ivc8zczurwvs2jrx7f785p&raw=1",
          fullSrc:
            "https://www.dropbox.com/s/hko3gtyeoz4er36/5%20ba%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/scl/fi/xgbyickndkiktz34p9p58/.jpg?rlkey=33dxzn2jy2qy59irc8jbwyriy&raw=1",
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
          previewSrc:
            "https://www.dropbox.com/scl/fi/bgqlfh3amdz8l7uc06jkw/1.jpg?rlkey=eyblo6g891ehg75betg4pldbc&raw=1",
          fullSrc:
            "https://www.dropbox.com/s/4kounumsmybbh70/1d%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/scl/fi/llekom1jh1unhrtw7ugwk/2.jpg?rlkey=5ikzn9r4v59mpp02f14xwycxp&raw=1",
          fullSrc:
            "https://www.dropbox.com/s/hp4eo64pfzcwy3g/2d%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/scl/fi/vvugeqnd3267gstmi0hoq/3.jpg?rlkey=0fyk5vzhho3y7hg442vgp73fy&raw=1",
          fullSrc:
            "https://www.dropbox.com/s/17vcoize8fr8rok/3d%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/scl/fi/wa0x3wk42n6njume6wufy/5.jpg?rlkey=92k5a55520dp4ywbuvvyralo8&raw=1",
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
          previewSrc:
            "https://www.dropbox.com/scl/fi/e4pe3gaatvz0295zbmg3j/011.jpg?rlkey=qiqy6gb6iicejkdba41vyhzs8&raw=1",
          fullSrc:
            "https://www.dropbox.com/s/kn5i8q2fyx3ava2/1im%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/scl/fi/40jwc3koyngmhwanuydft/012.jpg?rlkey=xr05lcx7vhjitxswlbpkwaz5k&raw=1",
          fullSrc:
            "https://www.dropbox.com/s/cz87yt6ctyqq3q9/2im%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/scl/fi/dsrjcjnpd63c8dlw5wjjq/013.jpg?rlkey=wm10twxbtmskq2rwgf5b11y7z&raw=1",
          fullSrc:
            "https://www.dropbox.com/s/3fd0fjfhm94vx8j/3im%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/scl/fi/oxnzhfgko2k9q89gy6rl0/0483_40-30.jpg?rlkey=q4r60s3j3926o8l5cdvjumy9o&raw=1",
          fullSrc:
            "https://www.dropbox.com/s/925gjevbxei0fs7/4%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/scl/fi/orh1g234v9mjvly0idg61/0504_50-70.jpg?rlkey=rqfil2rknedpfe65ocovwgsa4&raw=1",
          fullSrc:
            "https://www.dropbox.com/s/wwhcigzg11d1ehk/5%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/scl/fi/jvevvjuyo3p35e45st8rg/1510_50-70.jpg?rlkey=xdxjwvzghtehwjxt1l5eorezl&raw=1",
          fullSrc:
            "https://www.dropbox.com/s/7wh96gqw1r7aqy5/6%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/scl/fi/1h6zpjsvv344qadyho9ew/1635_50-70-Style.jpg?rlkey=lbwlsw4aheti9lysvsr2ipkgc&raw=1",
          fullSrc:
            "https://www.dropbox.com/s/tmaw3tfzf4215cq/7%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/scl/fi/mofebj55kfh7h6k8fety3/0774_40-40.jpg?rlkey=kl9gco3wyoaizjvj80l6mp3tm&raw=1",
          fullSrc:
            "https://www.dropbox.com/s/kt8btfia4ebojbd/8%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/scl/fi/0hobso75n1de83xti2pex/014.jpg?rlkey=w2di3h73de2k32chvm90wvsrr&raw=1",
          fullSrc:
            "https://www.dropbox.com/s/ep2gbqhgendm8pv/4im%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/scl/fi/kuubmfgb1ufwoch7y82gz/025.jpg?rlkey=fkwle4t0xflayuovy89nmrssh&raw=1",
          fullSrc:
            "https://www.dropbox.com/s/2zbbhim41gc2uc1/14im%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/scl/fi/pwglah0yhp6klbu7ca3gr/017.jpg?rlkey=rax3pnggj0k64k520q8mdpwvq&raw=1",
          fullSrc:
            "https://www.dropbox.com/s/bgbwe3m4dsyser5/6im%20full%20.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/scl/fi/hdh2v1q401d8ia5lrjo6e/018.jpg?rlkey=vq4mubofr0c3knnqnlxy34r0d&raw=1",
          fullSrc:
            "https://www.dropbox.com/s/476ssc6p1kkjk6m/7im%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/scl/fi/k5wfigmu9deuxxk1fr0fd/019.jpg?rlkey=d0yue2acslvek90qqpgzticuk&raw=1",
          fullSrc:
            "https://www.dropbox.com/s/sg3f4kxenph3ob7/8im%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/scl/fi/dq3i9g46fomasuxyziqp0/020.jpg?rlkey=pz72odlo6dye5avi46s0swnow&raw=1",
          fullSrc:
            "https://www.dropbox.com/s/3ubs1p653qcryig/9im%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/scl/fi/lkqowq50h180f6dn9zfam/021.jpg?rlkey=hgxtlavgwgwsdw5wpkne6ave4&raw=1",
          fullSrc:
            "https://www.dropbox.com/s/n8k154xpfnse4q7/10im%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/scl/fi/1bbyks8oxvcdcpuay5ctw/022.jpg?rlkey=lfzbphbjmybo950zt8e3c2mq6&raw=1",
          fullSrc:
            "https://www.dropbox.com/s/7nptdazwbmm8vn6/11im%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/scl/fi/6cl2gizv77yykswy95qyh/023.jpg?rlkey=2v3ieqfr68atz301s7n39t0sv&raw=1",
          fullSrc:
            "https://www.dropbox.com/s/doaar5xwwfusrhc/12im%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/scl/fi/dg4z2rmyj7cf0rw88qsrf/024.jpg?rlkey=b14vd897awbbjn2d2gbvxdyzy&raw=1",
          fullSrc:
            "https://www.dropbox.com/s/hy7q3sw71fy3f3a/13im%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/scl/fi/hvqfe0j7jxab9x40xy3el/016.jpg?rlkey=i1hz03fogrn2g83dpd5x1teic&raw=1",
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
        "https://www.dropbox.com/scl/fi/fd6q2x0uy4swq6lsngs84/.jpg?rlkey=b95b46r3jpvqg3ohri6herjyc&raw=1",
      galleryImages: [
        {
          previewSrc:
            "https://www.dropbox.com/scl/fi/e0shswix3orchezxtaeda/5368_50-70.jpg?rlkey=1opnskmhjrj0h5goros4b6ozg&raw=1",
          fullSrc:
            "https://www.dropbox.com/s/t9y2qxo66mxg5bg/1%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/scl/fi/6ot2kz5rmc1slb3rpq219/4569.jpg?rlkey=sj91ib0x6c830kpm4ooo0197l&raw=1",
          fullSrc:
            "https://www.dropbox.com/s/s9fs6nmr3j6i6qa/1o%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/scl/fi/si1nr5k3et9r4clfke7f4/6767661.jpg?rlkey=q67t4djaz2lc1y6y27rly8i02&raw=1",
          fullSrc:
            "https://www.dropbox.com/s/25swnptbb0sji7q/3%20full.jpg?raw=1",
        },

        {
          previewSrc:
            "https://www.dropbox.com/scl/fi/oxi6vo3p9wpsmup4ydeka/5646_60-80.jpg?rlkey=a0u586pik1ozd4jo5aa0nw8er&raw=1",
          fullSrc:
            "https://www.dropbox.com/s/lpd95v2uln6vrjr/3o%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/scl/fi/uxbayyejbgok4pjn0han2/5965_40-601.jpg?rlkey=5qbxrgsaiff7ppsasrzselaqt&raw=1",
          fullSrc:
            "https://www.dropbox.com/s/eqpqbxmokqa80vl/4o%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/scl/fi/76yf9r2ef6hcknt490m2k/Artist_Ricardo_Sanz__28Spainish_artist_292__285_29-1-1.jpg?rlkey=n31xfst8fwxnoqdze7evgn4cx&raw=1",
          fullSrc:
            "https://www.dropbox.com/s/m90vaavlgvpl0y9/6o%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/scl/fi/p1ghkv5gzqhoa54jwl1hu/1755_45-515.jpg?rlkey=yrrdvmxshzeun6to2mvb7922l&raw=1",
          fullSrc:
            "https://www.dropbox.com/s/24e3bclac1cyv9o/7%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/scl/fi/d5td01v74alb0j8at8414/4_0930_30-40.jpg?rlkey=ct81iuuu5jtb03ozs2xoh62rl&raw=1",
          fullSrc:
            "https://www.dropbox.com/s/2uy1zzvv422vs7y/8%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/scl/fi/9z9d1iwqujkf868byz6o7/1.jpg?rlkey=4jimfyakwp9fo0qk3efjkn5pd&raw=1",
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
          previewSrc:
            "https://www.dropbox.com/scl/fi/p73fwf4v6vttzoxyade5x/001.jpg?rlkey=5gd6nnlzkcoavs3jeciemxrp6&raw=1",
          fullSrc:
            "https://www.dropbox.com/s/ogmn03m77gmly9e/f1%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/scl/fi/ynzoo6k0ezc1j3ctkpixu/002.jpg?rlkey=2ujqi6fqfza0knfgizef4o24e&raw=1",
          fullSrc:
            "https://www.dropbox.com/s/jijtfa0nwc1hk12/f2%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/scl/fi/c5ql6m29pj1cvidzvs8kd/003.jpg?rlkey=relzewx8u35xgez039w40qpyb&raw=1",
          fullSrc:
            "https://www.dropbox.com/s/9hy8pwvclxth8ro/f3%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/scl/fi/p6iddsk36j7kygb5w9efg/1875_40-30.jpg?rlkey=4k1aisem9yn2vv0fh3cbl3tvm&raw=1",
          fullSrc:
            "https://www.dropbox.com/s/4iytwh90qozsjq2/4%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/scl/fi/iocil55z104l3izajje8x/0837_50-70.jpg?rlkey=x71w3r1m66iif05tcy9a10w6r&raw=1",
          fullSrc:
            "https://www.dropbox.com/s/lbxtrg3nngty81x/5%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/scl/fi/tj1i6yqymq6ottd1cbobh/654632525.jpg?rlkey=zknx09u345sakhqj8gxwkvj7s&raw=1",
          fullSrc:
            "https://www.dropbox.com/s/v7y8jjd0l1z2t8r/6%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/scl/fi/pcshuzk6d3rp0rl57384s/1046_40-60.jpg?rlkey=zih2k7hsza8vrdz08x0btg5dq&raw=1",
          fullSrc:
            "https://www.dropbox.com/s/gkw1cx455hjrd33/7%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/scl/fi/sxxk7u45qgcdvuvzolm3g/005.jpg?rlkey=8hqth7tj32mz6rfqmar5bh0m0&raw=1",
          fullSrc:
            "https://www.dropbox.com/s/gefodwz51t4ziaf/f4%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/scl/fi/wu0ikvixhbt9s27uhyyip/006.jpg?rlkey=ku7vuns1vnpqdvjeuel23tsju&raw=1",
          fullSrc:
            "https://www.dropbox.com/s/5pvzmy8rbh63f1v/f5%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/scl/fi/8wvd5uv6loytohyhnwouy/007.jpg?rlkey=6xa3z9ro4dddkexf7fw6ezeph&raw=1",
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
            "https://www.dropbox.com/scl/fi/vma1u04znazan4gbukwyi/0543_40-30-1.jpg?rlkey=nzw6cc6kybpjvlrxbo0jxj0nv&raw=1",
          fullSrc:
            "https://www.dropbox.com/s/k3jr18ae5w2lchq/1%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/scl/fi/bpah5akxbqdi7vcthuauu/1417271.jpg?rlkey=4hbusm5dibklaqntnkc0eth2r&raw=1",
          fullSrc:
            "https://www.dropbox.com/s/aeg3webrmvgdaa0/3%20k%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/scl/fi/ndhb0b3w9j913wo9isy7h/5757_40-501.jpg?rlkey=rd3hbi5nnxbkfnalgvimen3pw&raw=1",
          fullSrc:
            "https://www.dropbox.com/s/onwwvynxu6azayo/2%20k%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/scl/fi/2wqty775hsse0gfp24y74/000.jpg?rlkey=jpg6v52hgodoozb60ujgnw096&raw=1",
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
            "https://www.dropbox.com/scl/fi/jwb6759k33n3ipbg7d4ah/5.jpg?rlkey=8u2k7fa1d7swhi4bywlpk3lk3&raw=1",
          fullSrc:
            "https://www.dropbox.com/s/5mwy9x2txnzbsla/1%20i%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/scl/fi/1j0l7ww3a2kdwqz2krdok/0525_40-601.jpg?rlkey=z2wtpetsz5qjm5aodgkziemux&raw=1",
          fullSrc:
            "https://www.dropbox.com/s/qxoiwvdpvwdqwm0/2%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/scl/fi/6ogx9cl8b2zvxqjh9zxnq/9.jpg?rlkey=y4tpkb475ro5fb06sy9zvbnj2&raw=1",
          fullSrc:
            "https://www.dropbox.com/s/qdef3j2vv09a3dm/2%20i%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/scl/fi/z06lpoko4nb84iq4j36nh/10.jpg?rlkey=nkojuwvabq1c52n91ius5qgat&raw=1",
          fullSrc:
            "https://www.dropbox.com/s/jhoz3ynona85f9p/3%20i%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/scl/fi/61m6r4b98gj3pho84sz40/11.jpg?rlkey=bxagek4pxh2vfuuwttnz6e7xb&raw=1",
          fullSrc:
            "https://www.dropbox.com/s/s70ehfdun5arqw5/4%20i%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/scl/fi/wiset5z6junpi47kuq421/12.jpg?rlkey=sopulvs138u2uamaq8l9ad00s&raw=1",
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
          previewSrc:
            "https://www.dropbox.com/scl/fi/hquhhnrwaa4rojs86ib88/01.jpg?rlkey=82y3742v1e2pgfd12p1ezi4o0&raw=1",
          fullSrc:
            "https://www.dropbox.com/s/e6rdxhcwbs2me3m/01%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/scl/fi/mdf0o5b9zng1ft45b90dm/02.jpg?rlkey=jk54dcuj9vfw1etiarwzdrg0s&raw=1",
          fullSrc:
            "https://www.dropbox.com/s/83jipv4jpj1mtnw/02%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/scl/fi/k7zv8d2kscz3fbowwunuo/03.jpg?rlkey=cacb1pfr47pdqcnjib5jvqi28&raw=1",
          fullSrc:
            "https://www.dropbox.com/s/fzi9by4co2qjfwt/03%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/scl/fi/kt8u77l0h92bwsagt41nf/04.jpg?rlkey=qn7zvitr45e979qodjito5nsm&raw=1",
          fullSrc:
            "https://www.dropbox.com/s/ccg1n6kobqwsgz5/04%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/scl/fi/8uaomi7v651t4umakrxpr/05.jpg?rlkey=o2pt6ck317p358iyk11xc1oqz&raw=1",
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
            "https://www.dropbox.com/scl/fi/kr5vpz5cjvv1takbn8tr3/100.jpg?rlkey=u3d8wzmfqc6f76z74kzg6hhbx&raw=1",
          fullSrc:
            "https://www.dropbox.com/s/6t80pbu8pfgiequ/1%20p%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/scl/fi/51gjckd484207d0ffpy4c/102.jpg?rlkey=ovlfyslpxkccrqotadmnwfkae&raw=1",
          fullSrc:
            "https://www.dropbox.com/s/qoyp5p6r768ajy4/2%20p%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/scl/fi/wiqmrf1icv4577cx1g741/103.jpg?rlkey=gje73hgcu9qjaba1fkd777031&raw=1",
          fullSrc:
            "https://www.dropbox.com/s/8y9fisggar3z46v/3%20p%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/scl/fi/ls8qv3oiti6fajfkjmy4b/104.jpg?rlkey=b8rytau3zvoplc175pm2ekuj1&raw=1",
          fullSrc:
            "https://www.dropbox.com/s/b42nccx1vhsypmf/4%20p%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/scl/fi/bvfqdmvie427nlmdwt3hl/106.jpg?rlkey=5e9rv01d0mbyknfpuuq3bbxu2&raw=1",
          fullSrc:
            "https://www.dropbox.com/s/hrp4geqpqz9rqow/6%20p%20full.jpg?raw=1",
        },
        {
          previewSrc:
            "https://www.dropbox.com/scl/fi/yii8xo5yvfhpc9t46ybz6/105.jpg?rlkey=avkwv36ii74cmg492c50p1xbw&raw=1",
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

      <PreviewPhotoDialog
        open={!!fullImageSrc}
        onClose={() => setFullImageSrc(null)}
        showPrevArrow={isFirstPhoto}
        showNextArrow={isLastPhoto}
        handlePrevPhoto={handlePrevPhoto}
        handleNextPhoto={handleNextPhoto}
        src={currentGallery?.[fullImageSrc?.imageIdx]?.fullSrc}
      />

      {isMobile ? <ContactsSticky /> : null}
    </div>
  );
};

export default ProductsPage;
