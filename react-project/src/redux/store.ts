import { configureStore } from "@reduxjs/toolkit";
import mealsReducer from "./mealsSlice";
import filtersReducer from "./filtersSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    meals: mealsReducer,
    filters: filtersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();