import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface UserState {
    // Định nghĩa trạng thái của người dùng ở đây
}

const initialState: UserState = {
    // Khởi tạo trạng thái ban đầu của người dùng
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // Định nghĩa các hành động và reducers liên quan đến người dùng ở đây
    },
});

export const { /* các hành động */ } = userSlice.actions;

export const selectUser = (state: RootState) => state.user; // Chọn trạng thái người dùng

export default userSlice.reducer;
