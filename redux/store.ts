import { configureStore } from '@reduxjs/toolkit';
import filtersReducer from './reducers/filtersSlice';

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
  },
} );

store.subscribe(() => console.log('Redux Store State:', store.getState()));

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch