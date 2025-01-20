import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Meal } from "../types";

const initialState: { items: Meal[]; index: number } = {
  items: [],
  index: 0,
};

const mealsSlice = createSlice({
  name: "meals",
  initialState,
  reducers: {
    addMeal(state, action: PayloadAction<Meal>) {
      state.items.push(action.payload);
    },
    deleteMeal(state, action: PayloadAction<number>) {
      state.items = state.items.filter((meal) => meal.id !== action.payload);
    },
    setIndex(state, action: PayloadAction<number>) {
      state.index = action.payload;
    },
  },
});

export const { addMeal, deleteMeal, setIndex } = mealsSlice.actions;

export default mealsSlice.reducer;