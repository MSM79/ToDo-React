import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './features/todoslice';

export default configureStore({
  reducer: {
    todo: todoSlice,
  },
});
