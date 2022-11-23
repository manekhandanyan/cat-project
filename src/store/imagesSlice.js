import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const imagesSlice = createSlice({
  name: "images",
  initialState: {
    items: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getImages.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getImages.fulfilled, (state, action) => {
        state.items = state.items.concat(action.payload);
      })
      .addCase(getImages.rejected, (state) => {});
  },
});

export const getImages = createAsyncThunk(
  "fetch/images",
  async (currentPage) => {
    const api = await fetch(
      `https://api.thecatapi.com/v1/images/search?limit=10&page=${currentPage}&category_ids=1 
              `
    );
    const data = await api.json();
    return data;
  }
);

export const imagesState = (state) => state.images.items;

export default imagesSlice.reducer;
