import React from "react";
import { Dialog } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

import BeautyArt from "./Beauty-art/beauty-art";

import ProductPageItem from "./PortraitPage/portrait-page";
import Footer from "../../components/Pages/Footer/footer";

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
              previewSrc: "/images/styles/Портрет в образе/5o-2.jpg",
              fullSrc: "/images/styles/Диджитал/4d.jpg",
            },
          ],
          reverse: true,
          imageId: "likeness-art",
        },
        {
          portraitTitle: "Фьюжн",
          portraitPrice: 1890,
          portraitDescription: `Стиль «Фьюжн» всё больше набирает популярность, и, наверное, уже стал классикой. Особенность этого стиля в смелых пастозных мазках. Фон предоставляем на Ваш выбор. Портрет отлично работает в тандеме с услугой «арт-гель», придающей объём картине. Печать на холсте или портрет маслом на холсте —«Фюжн» превосходен в любом виде…`,
          srcAfter: "/images/styles/Фьюжн/фьюжн.jpg",
          srcBefore: "/images/styles/Фьюжн/до-первое.jpg",
          galleryImages: [
            {
              previewSrc: "/images/styles/Фьюжн/f1.jpg",
              fullSrc:
                "https://www.dropbox.com/s/m6iscvy8xkl7qzf/1%20ba.jpg?raw=1",
            },
            {
              previewSrc: "/images/styles/Фьюжн/f2.jpg",
              fullSrc:
                "https://www.dropbox.com/s/m6iscvy8xkl7qzf/1%20ba.jpg?raw=1",
            },
            {
              previewSrc: "/images/styles/Фьюжн/f3.jpg",
              fullSrc:
                "https://www.dropbox.com/s/m6iscvy8xkl7qzf/1%20ba.jpg?raw=1",
            },
            {
              previewSrc: "/images/styles/Фьюжн/f4.jpg",
              fullSrc:
                "https://www.dropbox.com/s/m6iscvy8xkl7qzf/1%20ba.jpg?raw=1",
            },
            {
              previewSrc: "/images/styles/Фьюжн/f5.jpg",
              fullSrc:
                "https://www.dropbox.com/s/m6iscvy8xkl7qzf/1%20ba.jpg?raw=1",
            },
            {
              previewSrc: "/images/styles/Фьюжн/f6.jpg",
              fullSrc:
                "https://www.dropbox.com/s/m6iscvy8xkl7qzf/1%20ba.jpg?raw=1",
            },
          ],
          imageId: "fusion-art",
        },
        {
          portraitTitle: "Карандаш",
          portraitPrice: 1790,
          portraitDescription: `Портрет карандашом - любимый всеми классический портрет, который будет актуальным и стильным всегда. Художник-дизайнер на планшете с нуля рисует портрет на основе предоставленной фотографии. Далее макет можно перенести на холст любого размера.`,
          srcAfter: "/images/styles/Карандаш/карандаш.jpg",
          srcBefore: "/images/styles/Карандаш/до--карандаш.jpg",
          galleryImages: [
            {
              previewSrc: "/images/styles/Карандаш/3 k.jpg",
              fullSrc: "/images/styles/Диджитал/1d.jpg",
            },
            {
              previewSrc: "/images/styles/Карандаш/1 k.jpg",
              fullSrc: "/images/styles/Диджитал/2d.jpg",
            },
            {
              previewSrc: "/images/styles/Карандаш/2 k.jpg",
              fullSrc: "/images/styles/Портрет в образе/4o.jpg",
            },
          ],
          reverse: true,
          imageId: "pencil-art",
        },
        {
          portraitTitle: "Инфинити",
          portraitPrice: 2900,
          portraitDescription: `На стиль «Инфинити» можно смотреть бесконечно. Он объединяет в себе два направления: черно-белый портрет и яркий граффити стиль. Вздорный фон и грамотные сочные акценты создают целостную картину, которая точно порадует своего получателя.`,
          srcAfter: "/images/styles/Инфинити/инфинити.jpg",
          srcBefore: "/images/styles/Инфинити/до--инфинити.jpg",
          galleryImages: [
            {
              previewSrc: "/images/styles/Инфинити/1 i.jpg",
              fullSrc:
                "https://www.dropbox.com/s/m6iscvy8xkl7qzf/1%20ba.jpg?raw=1",
            },
            {
              previewSrc: "/images/styles/Инфинити/2 i.jpg",
              fullSrc:
                "https://www.dropbox.com/s/m6iscvy8xkl7qzf/1%20ba.jpg?raw=1",
            },
            {
              previewSrc: "/images/styles/Инфинити/3 i.jpg",
              fullSrc:
                "https://www.dropbox.com/s/m6iscvy8xkl7qzf/1%20ba.jpg?raw=1",
            },
            {
              previewSrc: "/images/styles/Инфинити/4 i.jpg",
              fullSrc:
                "https://www.dropbox.com/s/m6iscvy8xkl7qzf/1%20ba.jpg?raw=1",
            },
            {
              previewSrc: "/images/styles/Инфинити/5 i.jpg",
              fullSrc:
                "https://www.dropbox.com/s/m6iscvy8xkl7qzf/1%20ba.jpg?raw=1",
            },
          ],
          imageId: "infiniti-art",
        },
        {
          portraitTitle: "Мастихин",
          portraitPrice: 2900,
          portraitDescription: `Такой стиль в портретном искусстве достаточно редок, но абсолютно точно - ярок и оригинален. Если Вы готовы уйти от фотографичности, довериться творческому полету наших дизайнеров, то данный вид портрета именно для Вас. Готовьтесь собрать возгласы "WOW", ведь это самый-самый арт. Портрет может быть выполнен как в спокойных тонах, так и в ярких, ослепительных тонах. Печать на холсте или портрет маслом в исполнении художника? Решать Вам - и в одном, и в другом исполнении этот вид портрета не оставит никого равнодушным.`,
          srcAfter: "/images/styles/Мастихин/мастихин.jpg",
          srcBefore: "/images/styles/Мастихин/до--мастихин.jpg",
          galleryImages: [
            {
              previewSrc: "/images/styles/Мастихин/01.jpg",
              fullSrc: "/images/styles/Диджитал/1d.jpg",
            },
            {
              previewSrc: "/images/styles/Мастихин/02.jpg",
              fullSrc: "/images/styles/Диджитал/2d.jpg",
            },
            {
              previewSrc: "/images/styles/Мастихин/03.jpg",
              fullSrc: "/images/styles/Портрет в образе/4o.jpg",
            },
            {
              previewSrc: "/images/styles/Мастихин/04.jpg",
              fullSrc: "/images/styles/Портрет в образе/4o.jpg",
            },
          ],
          reverse: true,
          imageId: "mastihin-art",
        },
        {
          portraitTitle: "Портрет питомца",
          portraitPrice: 1490,
          portraitDescription: `Выразите свою любовь к своей собаке или кошке путём превращения своего домашнего питомца в произведение искусства! Нужно лишь выбрать образ: исторический, современный или известное произведение мировых художников.`,
          srcAfter: "/images/styles/Портрет питомца/питомец первое.jpg",
          srcBefore: "/images/styles/Портрет питомца/питомец первое.jpg",
          galleryImages: [
            {
              previewSrc: "/images/styles/Портрет питомца/1 p.jpg",
              fullSrc:
                "https://www.dropbox.com/s/m6iscvy8xkl7qzf/1%20ba.jpg?raw=1",
            },
            {
              previewSrc: "/images/styles/Портрет питомца/2 p.jpg",
              fullSrc:
                "https://www.dropbox.com/s/m6iscvy8xkl7qzf/1%20ba.jpg?raw=1",
            },
            {
              previewSrc: "/images/styles/Портрет питомца/3 p.jpg",
              fullSrc:
                "https://www.dropbox.com/s/m6iscvy8xkl7qzf/1%20ba.jpg?raw=1",
            },
            {
              previewSrc: "/images/styles/Портрет питомца/4 p.jpg",
              fullSrc:
                "https://www.dropbox.com/s/m6iscvy8xkl7qzf/1%20ba.jpg?raw=1",
            },
            {
              previewSrc: "/images/styles/Портрет питомца/6 p.jpg",
              fullSrc:
                "https://www.dropbox.com/s/m6iscvy8xkl7qzf/1%20ba.jpg?raw=1",
            },
            {
              previewSrc: "/images/styles/Портрет питомца/5 p.jpg",
              fullSrc:
                "https://www.dropbox.com/s/m6iscvy8xkl7qzf/1%20ba.jpg?raw=1",
            },
          ],
          imageId: "animal-art",
        },
      ].map((props, idx) => (
        <ProductPageItem {...props} setFullImage={setFullImageSrc} key={idx} />
      ))}
      {/* <BeautyArt /> */}

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
