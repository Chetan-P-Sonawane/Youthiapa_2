import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    allProducts: [],
    filteredProducts: [],
  },
  reducers: {
    setProducts: (state, action) => {
      state.allProducts = action.payload;
      state.filteredProducts = action.payload;
    },
    filterByCategory: (state, action) => {
      state.filteredProducts = state.allProducts.filter(
        (item) => item.category === action.payload
      );
    },
    resetFilter: (state) => {
      state.filteredProducts = state.allProducts;
    },
  },
});

export const { setProducts, filterByCategory, resetFilter } =
  productSlice.actions;
export default productSlice.reducer;
