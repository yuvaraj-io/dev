import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { configureStore } from '@reduxjs/toolkit';
import { blogsApi } from './apis/blog';

export const store = configureStore({
    reducer: {
        [blogsApi.reducerPath]: blogsApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(blogsApi.middleware);
    }
});
setupListeners(store.dispatch);