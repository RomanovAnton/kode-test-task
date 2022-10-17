import { createSlice } from "@reduxjs/toolkit";

const popupSlice = createSlice({
  name: "popup",
  initialState: {
    isOpen: false,
    sort: "alphabet",
  },
  reducers: {
    changeSort: (state, action) => {
      state.sort = action.payload;
    },
    setIsOpen: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { changeSort, setIsOpen } = popupSlice.actions;
export default popupSlice.reducer;
