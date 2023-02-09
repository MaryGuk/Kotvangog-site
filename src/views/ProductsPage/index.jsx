import React from "react";
import AnimalArt from "./Animal-art/animal-art";
import BeautyArt from "./Beauty-art/beauty-art";
import DigitalPortrait from "./Digital-portrait/digital-portrait";
import FusionArt from "./Fusion-art/fusion-art";
import InfinitiArt from "./Infiniti-art/infiniti-art";
import LikenessArt from "./Likeness-art/likeness-art";
import MastihinArt from "./Mastihin-art/mastihin-art";
import OliArt from "./Oil-art/oil-art";
import PencilArt from "./Pencil-art/pencil-art";

const ProductsPage = () => {
  return (
    <div className="products-page__wrapper">
      <BeautyArt />
      <DigitalPortrait />
      <OliArt />
      <LikenessArt />
      <FusionArt />
      <PencilArt />
      <InfinitiArt />
      <MastihinArt />
      <AnimalArt />
    </div>
  );
};

export default ProductsPage;
