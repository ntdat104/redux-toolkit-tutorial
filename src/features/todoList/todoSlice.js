import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todoSlice',
    initialState: {
        value: ['Listen to music', 'Play the piano']
    },
    reducers: {
        addTodo: (state, action) => {
            const newState = { ...state, value: [...state.value, action.payload] };
            return newState;
        },
        removeTodo: (state, action) => {
            const newState = { ...state, value: [...state.value].filter((todo) => todo !== action.payload) };
            return newState;
        }
    }
});

//* export các action
export const { addTodo, removeTodo } = todoSlice.actions;

//* export state (todos ở trong file store)
export const getTodos = (state) => state.todo.value;

//* export reducer
export default todoSlice.reducer;
