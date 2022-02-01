import productSeries from "../mock/products.json";

const beats = productSeries["beats-solo3"];

export default (key: string) => {
  const product = beats.filter((item) => item.key === key);

  return product[0] || {};
};
