import { configureStore, combineReducers } from '@reduxjs/toolkit';
import searchesReducer from './slices/searches';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const reducers = combineReducers({ searches: searchesReducer });

const persistConfig = {
    key: 'searches',
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
	reducer: persistedReducer,
});