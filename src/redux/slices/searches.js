import { createSlice } from '@reduxjs/toolkit';

export const searchesSlice = createSlice({
    name: 'searches',
    initialState: [],
    reducers: {
        addSearch: (state, action) => {
            // state.find(stateItem => {
            //     console.info(stateItem.id);
            //     console.info(action.payload.id);
            // })
            state.push(action.payload);
        }
    }
});

export const {addSearch} = searchesSlice.actions;
export default searchesSlice.reducer; 