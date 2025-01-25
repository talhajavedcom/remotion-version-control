import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  canvasItems: [],
};

const jsonDataSlice = createSlice({
  name: 'jsonData',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.canvasItems.push(action.payload);
    },
    deleteItem: (state, action) => {
      state.canvasItems = state.canvasItems.filter(item => item.id !== action.payload);
    },
    updateItem: (state, action) => {
      const index = state.canvasItems.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.canvasItems[index] = action.payload;
      }
    },
    updateCanvasItems: (state, action) => {
      state.canvasItems = action.payload;
    },
  },
});

export const { addItem, deleteItem, updateItem, updateCanvasItems } = jsonDataSlice.actions;

export default jsonDataSlice.reducer;
