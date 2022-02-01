import React, { useState } from "react";
import Button from "@mui/material/Button";
import { useAppSelector, useAppDispatch } from "../../context/hooks";

import "./style.scss";

import { formatCurrency } from "../../utils";
import ProductMainImage from "../../components/productDisplay/mainImage";
import Thumbnail from "../../components/productDisplay/thumbnail";
import ProductOption from "../../components/productOption";

import getProduct from "../../utils/getProduct";

import productSeries from "../../mock/products.json";
import { changeOption, changeOrderPhase } from "../../context/reducer";

export default function SelectProduct() {
  const [activeImage, setActiveImage] = useState(0); //  get image by array index

  const state = useAppSelector((state) => state.checkout);

  console.log(state);
  const dispatch = useAppDispatch();

  const product = getProduct(state.productVariant);

  const image = product.images[activeImage]["full-size"];

  const handleClickThumb = (index: number) => {
    setActiveImage(index);
  };

  const handleClickOption = (key: string) => {
    dispatch(changeOption(key));
  };

  const allOptions = () => {
    return productSeries["beats-solo3"];
  };

  return (
    <div>
      <h2>Select Product</h2>

      <hr />
      <br />

      <div className="product-container">
        <div className="product-display">
          <ProductMainImage src={image} name={product.title} />

          <div className="thumbnail-list" data-testid="product-thumbnail-list">
            {product.images.map((i, index) => (
              <Thumbnail
                onClick={() => handleClickThumb(index)}
                src={i.thumb}
                selected={index === activeImage}
                key={i.thumb}
              />
            ))}
          </div>
        </div>

        <div className="product-info">
          <div className="product-name" data-testid="product-name">
            {product.title}
          </div>

          <div className="product-price" data-testid="product-price">
            {formatCurrency(product.price)}
          </div>

          <div className="product-details">
            <h3>About</h3>

            <div
              dangerouslySetInnerHTML={{ __html: product.description }}
              data-testid="product-details"
            ></div>
          </div>

          <div className="product-other-options">
            <h3>Available Colors</h3>

            <div data-testid="product-other-options" className="row">
              {allOptions().map((i) => (
                <ProductOption
                  item={i}
                  key={i.title}
                  onClick={() => {
                    handleClickOption(i.key);
                  }}
                />
              ))}
            </div>
          </div>

          <div>
            <br />
            <br />
            <Button
              variant="contained"
              onClick={() => dispatch(changeOrderPhase("delivery-details"))}
              className="submit-button"
            >
              Next step: Delivery details
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
