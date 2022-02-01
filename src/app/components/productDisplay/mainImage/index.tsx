import React from "react";
import "./style.scss";

interface iProductImage {
  src: string;
  name: string;
}

export default function ProductMainImage({ src, name }: iProductImage) {
  return (
    <div data-testid="product-main-image" className="product-main-image">
      {src && name && <img src={src} alt={name} />}
    </div>
  );
}
