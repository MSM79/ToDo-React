import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
