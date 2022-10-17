import { createSlice } from "@reduxjs/toolkit";
import fetchItems from "./asyncAction";

const itemsSlice = createSlice({
  name: "items",
  initialState: {
    items: [],
    status: "",
    error: "",
    category: "",
    sort: "",
  },
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchItems.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      state.items = action.payload.items.sort((a, b) =>
        a.firstName.toLowerCase() < b.firstName.toLowerCase() ? -1 : 1
      );
      state.status = "resolved";
      state.error = "";
    });
    builder.addCase(fetchItems.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    });
  },
});

export const { setCategory } = itemsSlice.actions;
export default itemsSlice.reducer;
