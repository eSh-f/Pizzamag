import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  type: string;
  size: number;
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

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setItem: (state, action: PayloadAction<CartItem[]>) => {
      state.item = action.payload;
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.item = state.item.filter((item) => item.id !== action.payload);
    },
    getTotal: (state) => {
      state.total = state.item.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0,
      );
    },
  },
});

export const { setItem, removeItem, getTotal } = cartSlice.actions;

export default cartSlice.reducer;
