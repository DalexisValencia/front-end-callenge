import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const searchesSlice = createSlice({
    name: 'searches',
    initialState: initialState,
    reducers: {
        addSearch: (state = initialState, action) => {
            state.push(action.payload);
        }
    }
});

export const {addSearch} = searchesSlice.actions;
export default searchesSlice.reducer; 