import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { asyncGetCount } from './counterAPI';

export const fetchCount = createAsyncThunk('counter/fetchCount', async () => {
    const response = await asyncGetCount(10);
    return response;
});

const initialState = {
    value: 0
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value++;
        },
        decrement: (state) => {
            state.value--;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        }
    },
    extraReducers: {
        [fetchCount.pending]: () => {
            console.log('Fetching...');
        },
        [fetchCount.fulfilled]: (state, action) => {
            console.log('Done');
            state.value = action.payload;
        },
        [fetchCount.rejected]: () => {
            console.log('Failed');
        }
    }
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const selectCount = (state) => state.counter.value;

export const counterReducer = counterSlice.reducer;
