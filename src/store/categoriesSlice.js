import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    items: [],
    status: "",
  },
  reducers: {
    setCategories: async (state) => {
      const api = await fetch(`https://api.thecatapi.com/v1/categories `);
      const data = await api.json();
      state.items = data;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(getCategories.rejected, (state) => {});
  },
});

export const getCategories = createAsyncThunk("fetch/categories", async () => {
  const api = await fetch(`https://api.thecatapi.com/v1/categories `);
  const data = await api.json();
  return data;
});

export const { setCategories } = categoriesSlice.actions;
export const categoriesState = (state) => state.categories.items;

export default categoriesSlice.reducer;
