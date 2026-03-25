
import { createSlice } from '@reduxjs/toolkit';

// Initial State: Empty cart array
const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Add item to cart (prevents duplicates)
    addItem: (state, action) => {
      const plant = action.payload;
      const existingItem = state.items.find((item) => item.name === plant.name);
      if (!existingItem) {
        state.items.push({ ...plant, quantity: 1 });
      }
    },

    // Remove item from cart by name
    removeItem: (state, action) => {
      const itemName = action.payload;
      state.items = state.items.filter((item) => item.name !== itemName);
    },

    // Update item quantity
    updateQuantity: (state, action) => {
      const { name, amount } = action.payload;
      const existingItem = state.items.find((item) => item.name === name);
      if (existingItem) {
        existingItem.quantity = amount;
      }
    },
  },
});

// Export Action Creators
export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

// Export Reducer
export default cartSlice.reducer;
