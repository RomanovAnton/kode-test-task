import { createSlice } from "@reduxjs/toolkit";
import fetchItems from "./asyncAction";

const itemsSlice = createSlice({
  name: "items",
  initialState: {
    items: [],
    status: "",
    sort: "alphabet",
    error: "",
    category: "Все",
    currentItem: null,
  },
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setCurrentItem: (state, action) => {
      state.currentItem = action.payload;
    },
    changeSort: (state, action) => {
      state.sort = action.payload;
    },
    sortByAlphabet: (state, action) => {
      state.items = state.items.sort((a, b) =>
        a.firstName.toLowerCase() < b.firstName.toLowerCase() ? -1 : 1
      );
    },
    sortByBirthday: (state) => {
      const date = new Date();
      const currentDate = () => {
        return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
      };
      const auxiliaryElem = {
        birthday: currentDate(),
        name: "current",
      };
      const arr = [...state.items].concat(auxiliaryElem);
      arr.sort((a, b) => {
        return new Date(a.birthday.slice(5)) - new Date(b.birthday.slice(5));
      });
      const idxElemCurDate = () => {
        return arr.indexOf(arr.filter((el) => el.name === "current")[0]);
      };
      state.items = arr
        .slice(idxElemCurDate() + 1)
        .concat(arr.slice(0, idxElemCurDate()));
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
      state.sort = "alphabet";
    });
    builder.addCase(fetchItems.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    });
  },
});

export const {
  setCategory,
  changeSort,
  setCurrentItem,
  sortByAlphabet,
  sortByBirthday,
} = itemsSlice.actions;
export default itemsSlice.reducer;
