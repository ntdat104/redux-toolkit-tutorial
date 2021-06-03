import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const asyncGetCount = (num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num);
        }, 2000);
    });
};

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
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        }
    },
    extraReducers: {
        [fetchCount.pending]: (state, action) => {
            console.log('Fetching...');
        },
        [fetchCount.fulfilled]: (state, action) => {
            console.log('Done');
            state.value = action.payload;
        },
        [fetchCount.rejected]: (state, action) => {
            console.log('Failed');
        }
    }
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const selectCount = (state) => state.counter.value;

export const counterReducer = counterSlice.reducer;
