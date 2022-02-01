import React from "react";

interface IThumbnail {
  src: string;
  selected: boolean;
  onClick: () => void;
}

export default function Thumbnail({ src, selected, onClick }: IThumbnail) {
  return (
    <div
      onClick={onClick}
      data-testid="product-thumbnail"
      className={`product-thumbnail  ${selected ? "image-selected" : ""}`}
    >
      <img src={src} alt="" />
    </div>
  );
}
