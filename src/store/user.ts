import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { boolean } from 'yargs';
import type { RootState } from './index';

interface IuserState {
    userId: string;
    userEmail: string;
    token: string;
    username: string;
    loading: boolean;
}

const initialState: IuserState = {
    userId: '',
    userEmail: '',
    token: '',
    username: '',
    loading: false
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        resetLoaders: (state) => {
            state.loading = false;
        },
        updateProfile: (state, action: PayloadAction<{key: string, value: string | number | boolean}>) => {
            const {payload} = action;
            // state[payload.key] = payload.value
        }
    }
});

export const { resetLoaders, updateProfile } = userSlice.actions;

export default userSlice.reducer;