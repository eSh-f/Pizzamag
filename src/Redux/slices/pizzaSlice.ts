import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface PizzaState {
  id: number;
  categories: string;
  price: number;
  sizes: number;
  types: string[];
}

const initialState: PizzaState = {
  id: 1,
  categories: "Мясные",
  price: 690,
  sizes: 26,
  types: ["тонкое", "традиционное"],
};

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    getPizzas: (state, action) => {
      return (state.id = action.payload);
    },
  },
});

export const { getPizzas } = pizzaSlice.actions;

export default pizzaSlice.reducer;
