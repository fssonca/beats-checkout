export interface iAction {
  type: string;
  payload?: any;
}

export interface iState {
  orderPhase: "select-product" | "delivery-details" | "payment-info";
  productVariant: string;
  loadingProduct: string;
}

export interface IContextProps {
  state: iState;
  dispatch: ({ type, payload }: iAction) => void;
}

interface IProductItemImage {
  "full-size": string;
  thumb: string;
}

export interface IProductItem {
  key: string;
  title: string;
  description: string;
  price: number;
  images: IProductItemImage[];
}
