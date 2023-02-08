import React from "react";
import BeautyArt from "./Beauty-art/beauty-art";
import DigitalPortrait from "./Digital-portrait/digital-portrait";
import LikenessArt from "./Likeness-art/likeness-art";
import OliArt from "./Oil-art/oil-art";

const ProductsPage = () => {
  return (
    <div className="products-page__wrapper">
      <BeautyArt />
      <DigitalPortrait />
      <OliArt />
      <LikenessArt />
    </div>
  );
};

export default ProductsPage;
