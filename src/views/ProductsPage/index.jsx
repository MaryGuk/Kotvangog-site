import React from "react";
import { Dialog } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import AnimalArt from "./Animal-art/animal-art";
import BeautyArt from "./Beauty-art/beauty-art";
import DigitalPortrait from "./Digital-portrait/digital-portrait";
import FusionArt from "./Fusion-art/fusion-art";
import InfinitiArt from "./Infiniti-art/infiniti-art";
import LikenessArt from "./Likeness-art/likeness-art";
import MastihinArt from "./Mastihin-art/mastihin-art";
import OliArt from "./Oil-art/oil-art";
import PencilArt from "./Pencil-art/pencil-art";
import ProductPageItem from "./PortraitPage/portrait-page";

const ProductsPage = () => {
  const [fullImageSrc, setFullImageSrc] = useState(null);

  return (
    <div className="products-page__wrapper">
      {[
        {
          portraitTitle: "Бьюти-арт портрет",
          portraitPrice: 1590,
          portraitDescription:
            "Гладкость и блеск — главный принцип стиля. Он представляет собой нежный, роскошный образ. Особенностью стиля является детальная прорисовка портрета. Самый популярный вид исполнения - печать на холсте, она хорошо сочетается с текстурным гелем.",
          srcAfter: "/images/styles/Бьюти-арт/бьюти-арт.jpg",
          srcBefore: "/images/styles/Бьюти-арт/до бьюти-арт.jpg",
          galleryImages: [
            {
              previewSrc: "/images/styles/Бьюти-арт/1 ba.jpg",
              fullSrc:
                "https://www.dropbox.com/s/m6iscvy8xkl7qzf/1%20ba.jpg?raw=1",
            },
            {
              previewSrc: "/images/styles/Бьюти-арт/2 ba.jpg",
              fullSrc:
                "https://www.dropbox.com/s/m6iscvy8xkl7qzf/1%20ba.jpg?raw=1",
            },
            {
              previewSrc: "/images/styles/Бьюти-арт/3 ba.jpg",
              fullSrc:
                "https://www.dropbox.com/s/m6iscvy8xkl7qzf/1%20ba.jpg?raw=1",
            },
            {
              previewSrc: "/images/styles/Бьюти-арт/4 ba.jpg",
              fullSrc:
                "https://www.dropbox.com/s/m6iscvy8xkl7qzf/1%20ba.jpg?raw=1",
            },
            {
              previewSrc: "/images/styles/Бьюти-арт/5 ba.jpg",
              fullSrc:
                "https://www.dropbox.com/s/m6iscvy8xkl7qzf/1%20ba.jpg?raw=1",
            },
            {
              previewSrc: "/images/styles/Бьюти-арт/6 ba.jpg",
              fullSrc:
                "https://www.dropbox.com/s/m6iscvy8xkl7qzf/1%20ba.jpg?raw=1",
            },
          ],
          imageId: "beauty-art",
        },
        {
          portraitTitle: "Диджитал-портрет",
          portraitPrice: 2800,
          portraitDescription: `Яркий и беспрецедентный — именно такой портрет в стиле «Диджитал».Если Вы искали особенный, ни на что не похожий стиль, то он перед Вами. В этом стиле художник проявляет себя, не ограничивая привычными рамками. Стиль «Диджитал» — это концентрация громких восторгов и обескураживающих эмоций. Мы гарантируем, что результат будет ослепительным.`,
          srcAfter: "/images/styles/Диджитал/диджитал.jpg",
          srcBefore: "/images/styles/Диджитал/до диджитал.jpg",
          galleryImages: [
            {
              previewSrc: "/images/styles/Диджитал/1d.jpg",
              fullSrc: "/images/styles/Диджитал/1d.jpg",
            },
            {
              previewSrc: "/images/styles/Диджитал/2d.jpg",
              fullSrc: "/images/styles/Диджитал/2d.jpg",
            },
            {
              previewSrc: "/images/styles/Диджитал/3d.jpg",
              fullSrc: "/images/styles/Диджитал/3d.jpg",
            },
            {
              previewSrc: "/images/styles/Диджитал/4d.jpg",
              fullSrc: "/images/styles/Диджитал/4d.jpg",
            },
          ],
          reverse: true,
          imageId: "digital",
        },
        {
          portraitTitle: "Имитация масла",
          portraitPrice: 950,
          portraitDescription: `Данный вариант - прекрасная альтернатива классике. Дизайнер повторяет мазки, как в традиционной живописи, что создает впечатление картины, написанной маслом. Особенно хорошо подойдет «арт гель», который предаст мазкам выраженный текстурный объём поверх печати.`,
          srcAfter: "/images/styles/Имитация масла/первое фото.jpg",
          srcBefore: "/images/styles/Имитация масла/первое фото.jpg",
          galleryImages: [
            {
              previewSrc: "/images/styles/Имитация масла/1im.jpg",
              fullSrc: "/images/styles/Диджитал/1d.jpg",
            },
            {
              previewSrc: "/images/styles/Имитация масла/2im.jpg",
              fullSrc: "/images/styles/Диджитал/2d.jpg",
            },
            {
              previewSrc: "/images/styles/Имитация масла/3im.jpg",
              fullSrc: "/images/styles/Диджитал/3d.jpg",
            },
            {
              previewSrc: "/images/styles/Имитация масла/4im.jpg",
              fullSrc: "/images/styles/Диджитал/4d.jpg",
            },
            {
              previewSrc: "/images/styles/Имитация масла/14im.jpg",
              fullSrc: "/images/styles/Диджитал/4d.jpg",
            },
            {
              previewSrc: "/images/styles/Имитация масла/6im.jpg",
              fullSrc: "/images/styles/Диджитал/4d.jpg",
            },
            {
              previewSrc: "/images/styles/Имитация масла/7im.jpg",
              fullSrc: "/images/styles/Диджитал/4d.jpg",
            },
            {
              previewSrc: "/images/styles/Имитация масла/8im.jpg",
              fullSrc: "/images/styles/Диджитал/4d.jpg",
            },
            {
              previewSrc: "/images/styles/Имитация масла/9im.jpg",
              fullSrc: "/images/styles/Диджитал/4d.jpg",
            },
            {
              previewSrc: "/images/styles/Имитация масла/10im.jpg",
              fullSrc: "/images/styles/Диджитал/4d.jpg",
            },
            {
              previewSrc: "/images/styles/Имитация масла/11im.jpg",
              fullSrc: "/images/styles/Диджитал/4d.jpg",
            },
            {
              previewSrc: "/images/styles/Имитация масла/12im.jpg",
              fullSrc: "/images/styles/Диджитал/4d.jpg",
            },
            {
              previewSrc: "/images/styles/Имитация масла/13im.jpg",
              fullSrc: "/images/styles/Диджитал/4d.jpg",
            },
            {
              previewSrc: "/images/styles/Имитация масла/5im.jpg",
              fullSrc: "/images/styles/Диджитал/4d.jpg",
            },
          ],

          imageId: "oli-art",
        },
        {
          portraitTitle: "Портрет в образе",
          portraitPrice: 1090,
          portraitDescription: `Портрет в образе - самое необычное перевоплощение! Лучший способ удивить и подарить не только портрет на долгую память, но и море улыбок. Если вам хочется большего, нежели перенос фото на холст — обратите внимание на эти работы. Яркий и беспрецедентный — именно такой портрет в стиле «Диджитал». Если Вы искали особенный, ни на что не похожий стиль, то он перед Вами. В этом стиле художник проявляет себя, не ограничивая привычными рамками. Стиль «Диджитал» — это концентрация громких восторгов и обескураживающих эмоций. Мы гарантируем, что результат будет ослепительным.`,
          srcAfter: "/images/styles/Портрет в образе/11o.jpg",
          srcBefore: "/images/styles/Портрет в образе/11o.jpg",
          galleryImages: [
            {
              previewSrc: "/images/styles/Портрет в образе/1o.jpg",
              fullSrc: "/images/styles/Диджитал/1d.jpg",
            },
            {
              previewSrc: "/images/styles/Портрет в образе/2o.jpg",
              fullSrc: "/images/styles/Диджитал/2d.jpg",
            },
            {
              previewSrc: "/images/styles/Портрет в образе/3o.jpg",
              fullSrc: "/images/styles/Портрет в образе/4o.jpg",
            },
            {
              previewSrc: "/images/styles/Портрет в образе/4o.jpg",
              fullSrc: "/images/styles/Портрет в образе/4o.jpg",
            },
            {
              previewSrc: "/images/styles/Портрет в образе/6o.jpg",
              fullSrc: "/images/styles/Диджитал/4d.jpg",
            },
            {
              previewSrc: "/images/styles/Портрет в образе/5o.jpg",
              fullSrc: "/images/styles/Диджитал/4d.jpg",
            },
          ],
          reverse: true,
          imageId: "likeness-art",
        },
      ].map((props, idx) => (
        <ProductPageItem {...props} setFullImage={setFullImageSrc} key={idx} />
      ))}
      {/* <BeautyArt /> */}
      {/* <DigitalPortrait /> */}
      {/* <OliArt />
      <LikenessArt />
      <FusionArt />
      <PencilArt />
      <InfinitiArt />
      <MastihinArt />
      <AnimalArt /> */}
      <Dialog open={!!fullImageSrc} onClose={() => setFullImageSrc(null)}>
        <Box height="500px" overflow="hidden">
          <img height="100%" src={fullImageSrc} alt="" />
        </Box>
      </Dialog>
    </div>
  );
};

export default ProductsPage;
