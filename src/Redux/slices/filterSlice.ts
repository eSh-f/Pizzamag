import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SortType = "rating" | "price" | "abc";

interface IFilterSlice {
  sortType: SortType;
  searchValue: string;
  category: number;
}

const initialState: IFilterSlice = {
  sortType: "rating",
  searchValue: "",
  category: 0,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSortType: (state, action: PayloadAction<SortType>) => {
      state.sortType = action.payload;
    },
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    setCategory: (state, action: PayloadAction<number>) => {
      state.category = action.payload;
    },
  },
});

export const { setSortType, setSearchValue } = filterSlice.actions;
export default filterSlice.reducer;
