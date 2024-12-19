import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
    totalItemQuantity : 0
  },
  reducers: {
    addItem: (state, action) => {
        const { name, image, cost, value} = action.payload;
        const existingItem = state.items.find(item => item.name === name);
        if (existingItem) {
          existingItem.quantity++;
        } else {
          state.items.push({ name, image, cost, value, quantity: 1 });
        }
        state.totalItemQuantity = state.items.length;
      },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload);
      state.totalItemQuantity = state.items.length;
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
