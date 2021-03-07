import { combineReducers } from 'redux';
import todoReducer from './TodoReducer';

const allReducers = combineReducers({
    todo: todoReducer,
})

export default allReducers;