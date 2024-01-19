import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
const initialState = {
  fav: [],
  products: [],
  products2: [],
};
export const getAllData = createAsyncThunk("products/data", async () => {
  const response = await axios("http://localhost:3000/products");
  return response.data;
});
export const getAllData2 = createAsyncThunk("products/data", async () => {
  const response = await axios("http://localhost:3000/products");
  return response.data;
});
export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addFav: (state, action) => {
      let localFav = JSON.parse(localStorage.getItem("fav"));
      if (localFav) {
        localFav.push(action.payload);
        state.fav.push(action.payload);

        localStorage.setItem("fav", JSON.stringify(localFav));
      } else {
        let arr = [];
        arr.push(action.payload);
        localStorage.setItem("fav", JSON.stringify(arr));
        state.fav.push(action.payload);
      }

      // state.fav.push(action.payload);
    },
    deleteFav: (state, action) => {
      let localFav = JSON.parse(localStorage.getItem("fav"));
      // console.log(localFav);
      // console.log(action.payload);
      let filterFav = localFav.filter((elem) => elem.id != action.payload.id);
      // state.fav = filterFav;
      console.log(filterFav);
      state.fav = filterFav;
      localStorage.setItem("fav", JSON.stringify(filterFav));
      // state.fav.push(action.payload);
    },
    deleteProduct: (state, action) => {
      axios.delete(`http://localhost:3000/products/${action.payload.id}`);
      state.products = state.products.filter(
        (elem) => elem.id != action.payload.id
      );
    },
    addProduct: (state, action) => {
      axios.post("http://localhost:3000/products/", action.payload);
      state.products.push(action.payload);
    },
    filter: (state, action) => {
      state.products = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getAllData.fulfilled, (state, action) => {
      state.products = action.payload;
      state.products2 = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const { addFav, deleteFav, deleteProduct, addProduct, filter } =
  productSlice.actions;

export default productSlice.reducer;
