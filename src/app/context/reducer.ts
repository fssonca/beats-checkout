import { iState } from "../types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

const initialState: iState = {
  orderPhase: "select-product",
  productVariant: "black",
  loadingProduct: "SUCCESS",
};

export const slice = createSlice({
  name: "checkout",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    changeOption: (state, action: PayloadAction<string>) => {
      return { ...state, productVariant: action.payload };
    },

    changeOrderPhase: (state, action: PayloadAction<iState["orderPhase"]>) => {
      console.log("half past five");
      return { ...state, orderPhase: action.payload };
    },

    /* 
   // TODO - reducer for fetching data process
   loadingProduct: (state, action: PayloadAction<string>) => {
      switch (action.payload) {
        case "LOADING":
          return { ...state, loadingProduct: "LOADING" };
        case "SUCCESS":
          return { ...state, loadingProduct: "SUCCESS" };
        case "FAIL":
          return { ...state, loadingProduct: "FAIL" };
        default:
          return state;
      }
    },*/
  },
});

export const { changeOption, changeOrderPhase } = slice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectOption = (state: RootState) => state.checkout.productVariant;

export default slice.reducer;
