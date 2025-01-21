import { createAction } from "@reduxjs/toolkit";
import {
  MEALS_ADD_MEAL,
  MEALS_DELETE_MEAL,
  MEALS_CHANGE_FILTER,
} from "./constants";
import { Meal } from "../types";

// type AddMealPayload = Meal;

// type ChangeFilterPayload = "breakfast" | "lunch" | "dinner" | "all";

// const addMeal = createAction<AddMealPayload>(MEALS_ADD_MEAL);
// const deleteMeal = createAction<number>(MEALS_DELETE_MEAL);
// const changeFilter = createAction<ChangeFilterPayload>(MEALS_CHANGE_FILTER);

// export { addMeal, deleteMeal, changeFilter };
