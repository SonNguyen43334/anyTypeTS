import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/user.reducer';

export const store = configureStore({
    reducer: {
        user: userReducer, // Thêm reducer cho người dùng vào cấu trúc gốc
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
