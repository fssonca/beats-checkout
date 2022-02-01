import React from "react";
import "./style.scss";
import { IProductItem } from "../../types";

interface IProductOption {
  item: IProductItem;
  onClick: () => void;
}

export default function ProductOption({ item, onClick }: IProductOption) {
  return (
    <div
      data-testid="product-option"
      onClick={onClick}
      title={item.title}
      className="product-option"
    >
      <img src={item.images[0].thumb} alt="" />
    </div>
  );
}
