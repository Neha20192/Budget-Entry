import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  items: [],
};

const budgetSlice = createSlice({
  name: 'budget',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const {addItem} = budgetSlice.actions;
export const bugdetForm = state => state.budget.items;
export default budgetSlice;
