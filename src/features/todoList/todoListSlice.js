import { createSlice } from '@reduxjs/toolkit';

const todoListSlice = createSlice({
    name: 'todoListSlice',
    initialState: ['Listen to music', 'Play the piano'],
    reducers: {
        addTodo: (state, action) => [...state, action.payload],
        removeTodo: (state, action) => [...state].filter((todo) => todo !== action.payload)
    }
});

//* export các action
export const { addTodo, removeTodo } = todoListSlice.actions;

//* export state (todos ở trong file store)
export const selectTodos = (state) => state.todos;

//* export reducer
export default todoListSlice.reducer;
