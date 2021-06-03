import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: ['Listen to music', 'Play the piano']
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.value = [...state.value, action.payload];
        },
        removeTodo: (state, action) => {
            state.value = [...state.value].filter((todo) => todo !== action.payload);
        }
    }
});

//* export các action
export const { addTodo, removeTodo } = todoSlice.actions;

//* export state (todos ở trong file store)
export const selectTodo = (state) => state.todo.value;

//* export reducer
export const todoReducer = todoSlice.reducer;
