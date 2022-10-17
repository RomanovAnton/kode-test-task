import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./itemsSlice";
import popupSlice from "./popupSlice";

const store = configureStore({
  reducer: {
    items: itemsSlice,
    popup: popupSlice,
  },
});

export default store;
