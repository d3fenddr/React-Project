import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Meal } from "../types";

interface MealsState {
  items: Meal[];
  index: number;
}

const initialState: MealsState = {
  items: [],
  index: 0,
};

const mealsSlice = createSlice({
  name: "meals",
  initialState,
  reducers: {
    incrementIndex(state) {
      state.index = (state.index + 1) % state.items.length;
    },

    decrementIndex(state) {
      state.index =
        (state.index - 1 + state.items.length) % state.items.length;
    },

    setIndex(state, action: PayloadAction<number>) {
      if (action.payload >= 0 && action.payload < state.items.length) {
        state.index = action.payload;
      } else {
        console.warn("Invalid index value:", action.payload);
      }
    },
  },
});

export const { incrementIndex, decrementIndex, setIndex } =
  mealsSlice.actions;

export default mealsSlice.reducer;