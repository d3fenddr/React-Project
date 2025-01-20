import { createSlice, AnyAction } from "@reduxjs/toolkit";

const initialState = {
  status: "all", // filter for meal types (all, breakfast, lunch, dinner)
  search: "", // search input
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeStatusFilter(state, action: AnyAction) {
      state.status = action.payload;
    },
    changeSearchFilter(state, action: AnyAction) {
      state.search = action.payload;
    },
  },
});

export const { changeStatusFilter, changeSearchFilter } = filtersSlice.actions;

export default filtersSlice.reducer;