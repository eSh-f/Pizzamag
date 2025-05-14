import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  type: string;
  size: string;
  quantity: number;
}

interface CartState {
  item: CartItem[];
  total: number;
}

const initialState: CartState = {
  item: [],
  total: 0,
};

const newTotal = (items: CartItem[]) =>
  items.reduce((sum, obj) => sum + obj.price * obj.quantity, 0);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Omit<CartItem, "quantity">>) => {
      const addPizza = action.payload;
      /*
      думал так, но это не один объект.

      const pizzaInCart = state.item;

      if (
        pizzaInCart.id === addPizza.id &&
        pizzaInCart.type === addPizza.type &&
        pizzaInCart.size === addPizza.size
      ) {
        pizzaInCart.quantity += 1;
      } else {
        state.item.push({ ...addPizza, quantity: 1 });
      }*/

      const pizzaInCart = state.item.find(
        (pizza) =>
          pizza.id === addPizza.id &&
          pizza.type === addPizza.type &&
          pizza.size === addPizza.size,
      );

      if (pizzaInCart) {
        pizzaInCart.quantity += 1;
      } else {
        state.item.push({ ...addPizza, quantity: 1 });
      }

      state.total = newTotal(state.item);
    },
    minusItem: (
      state,
      action: PayloadAction<Pick<CartItem, "id" | "size" | "type">>,
    ) => {
      const pizzaInCart = state.item.find(
        (pizza) =>
          pizza.id === action.payload.id &&
          pizza.size === action.payload.size &&
          pizza.type === action.payload.type,
      );
      if (pizzaInCart) {
        pizzaInCart.quantity -= 1;
      }

      state.total = newTotal(state.item);
    },
    removeItem: (
      state,
      action: PayloadAction<Pick<CartItem, "id" | "size" | "type">>,
    ) => {
      state.item = state.item.filter(
        (item) =>
          !(
            item.id === action.payload.id &&
            item.size === action.payload.size &&
            item.type === action.payload.type
          ), // пытался только по id, но в корзине может быть разного размера и типа пицца с одним id.
      );

      state.total = newTotal(state.item);
    },
    clearCart: (state) => {
      state.total = 0;
      state.item = [];
    },
  },
});

export const { addItem, removeItem, clearCart, minusItem } = cartSlice.actions;

export default cartSlice.reducer;
