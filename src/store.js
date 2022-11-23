import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./store/categoriesSlice";
import imagesSlice from "./store/imagesSlice";

export default configureStore({
  reducer: {
    categories: categoriesReducer,
    images: imagesSlice,
  },
});
