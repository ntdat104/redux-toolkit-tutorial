import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import todoListReducer from '../features/todoList/todoListSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todos: todoListReducer
    }
});
